import { useState, useMemo } from 'react'
import SearchBar from '../components/ui/SearchBar'
import FilterSidebar from '../components/ui/FilterSidebar'
import ContentCard from '../components/ContentCard'
import Button from '../components/ui/Button'
import { mockContentItems } from '../data/mockData.js'
import { SearchFilters, SortOptions } from '../types/index.js'

const SortDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const sortOptions = [
    { value: SortOptions.RELEVANCE, label: 'Relevance' },
    { value: SortOptions.NEWEST, label: 'Newest First' },
    { value: SortOptions.PRICE_LOW, label: 'Price: Low to High' },
    { value: SortOptions.PRICE_HIGH, label: 'Price: High to Low' },
    { value: SortOptions.QUALITY_HIGH, label: 'Highest Quality' },
    { value: SortOptions.POPULARITY, label: 'Most Popular' }
  ]

  const currentOption = sortOptions.find(opt => opt.value === value) || sortOptions[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass px-4 py-2 rounded-lg text-white text-sm flex items-center space-x-2 hover:bg-white/10 transition-colors"
      >
        <span>Sort: {currentOption.label}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg border border-white/10 py-2 z-10">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                value === option.value 
                  ? 'text-primary-400 bg-primary-500/20' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const ResultsHeader = ({ totalResults, currentFilters, onClearFilters }) => {
  const activeFilterCount = Object.values(currentFilters).filter(value => {
    if (Array.isArray(value)) return value.length > 0
    if (typeof value === 'object' && value !== null) return Object.values(value).some(v => v !== null && v !== undefined)
    return value !== null && value !== undefined && value !== ''
  }).length

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Browse AI Resources</h1>
        <p className="text-gray-400">
          {totalResults.toLocaleString()} results found
          {activeFilterCount > 0 && (
            <span className="ml-2">
              • {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''} active
            </span>
          )}
        </p>
      </div>

      {activeFilterCount > 0 && (
        <Button variant="ghost" size="sm" onClick={onClearFilters}>
          Clear All Filters
        </Button>
      )}
    </div>
  )
}

const BrowsePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({ ...SearchFilters })
  const [sortBy, setSortBy] = useState(SortOptions.RELEVANCE)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // Filter and search logic
  const filteredAndSortedItems = useMemo(() => {
    let results = [...mockContentItems]

    // Apply text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      results = results.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query)) ||
        item.author.name.toLowerCase().includes(query)
      )
    }

    // Apply filters
    if (filters.content_type?.length > 0) {
      results = results.filter(item => filters.content_type.includes(item.content_type))
    }

    if (filters.category?.length > 0) {
      results = results.filter(item => filters.category.includes(item.category))
    }

    if (filters.ai_models?.length > 0) {
      results = results.filter(item => 
        filters.ai_models.some(model => item.ai_models?.includes(model))
      )
    }

    if (filters.difficulty_level?.length > 0) {
      results = results.filter(item => filters.difficulty_level.includes(item.difficulty_level))
    }

    if (filters.source_platform?.length > 0) {
      results = results.filter(item => filters.source_platform.includes(item.source_platform))
    }

    if (filters.is_free === true) {
      results = results.filter(item => item.is_free)
    }

    if (filters.price_range) {
      results = results.filter(item => {
        if (item.is_free) return filters.price_range[0] === 0
        return item.price >= filters.price_range[0] && item.price <= filters.price_range[1]
      })
    }

    if (filters.quality_score_min > 0) {
      results = results.filter(item => item.quality_score >= filters.quality_score_min)
    }

    // Apply sorting
    switch (sortBy) {
      case SortOptions.NEWEST:
        results.sort((a, b) => new Date(b.processed_at) - new Date(a.processed_at))
        break
      case SortOptions.OLDEST:
        results.sort((a, b) => new Date(a.processed_at) - new Date(b.processed_at))
        break
      case SortOptions.PRICE_LOW:
        results.sort((a, b) => {
          const priceA = a.is_free ? 0 : a.price
          const priceB = b.is_free ? 0 : b.price
          return priceA - priceB
        })
        break
      case SortOptions.PRICE_HIGH:
        results.sort((a, b) => {
          const priceA = a.is_free ? 0 : a.price
          const priceB = b.is_free ? 0 : b.price
          return priceB - priceA
        })
        break
      case SortOptions.QUALITY_HIGH:
        results.sort((a, b) => b.quality_score - a.quality_score)
        break
      case SortOptions.POPULARITY:
        results.sort((a, b) => (b.popularity_metrics?.views || 0) - (a.popularity_metrics?.views || 0))
        break
      default: // RELEVANCE
        // For demo purposes, randomize slightly to simulate relevance scoring
        results.sort(() => Math.random() - 0.5)
    }

    return results
  }, [searchQuery, filters, sortBy])

  const handleViewItem = (item) => {
    console.log('View item:', item)
    // TODO: Navigate to item detail page
  }

  const clearAllFilters = () => {
    setFilters({ ...SearchFilters })
    setSearchQuery('')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <SearchBar
          onSearch={setSearchQuery}
          className="max-w-2xl mx-auto"
        />
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden flex-shrink-0`}>
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            onClearAll={() => setFilters({ ...SearchFilters })}
            className="sticky top-24"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-4">
            <Button 
              variant="ghost" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full justify-center"
            >
              {isSidebarOpen ? 'Hide' : 'Show'} Filters
            </Button>
          </div>

          {/* Results Header */}
          <ResultsHeader
            totalResults={filteredAndSortedItems.length}
            currentFilters={filters}
            onClearFilters={clearAllFilters}
          />

          {/* Sort and View Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <SortDropdown value={sortBy} onChange={setSortBy} />
              
              {/* Desktop filter toggle */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="hidden lg:flex items-center space-x-2 glass px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
                <span className="text-sm">{isSidebarOpen ? 'Hide' : 'Show'} Filters</span>
              </button>
            </div>
          </div>

          {/* Results Grid */}
          {filteredAndSortedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedItems.map((item) => (
                <ContentCard
                  key={item.id}
                  item={item}
                  onView={handleViewItem}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button onClick={clearAllFilters}>
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Load More Button (for pagination simulation) */}
          {filteredAndSortedItems.length > 0 && filteredAndSortedItems.length >= 12 && (
            <div className="text-center mt-12">
              <Button variant="secondary" size="lg">
                Load More Results
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BrowsePage