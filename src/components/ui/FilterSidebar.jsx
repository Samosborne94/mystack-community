import { useState } from 'react'
import Button from './Button'
import { ContentType, Category, AIModel, SourcePlatform } from '../../types/index.js'

const FilterSection = ({ title, children, isCollapsible = true, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-white/10 pb-4 mb-4 last:border-b-0">
      <div 
        className={`flex items-center justify-between mb-3 ${isCollapsible ? 'cursor-pointer' : ''}`}
        onClick={() => isCollapsible && setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-white">{title}</h3>
        {isCollapsible && (
          <svg 
            className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
      {isOpen && children}
    </div>
  )
}

const CheckboxFilter = ({ options, selectedValues = [], onChange, displayKey = 'name', valueKey = 'value' }) => {
  const handleChange = (value, checked) => {
    if (checked) {
      onChange([...selectedValues, value])
    } else {
      onChange(selectedValues.filter(v => v !== value))
    }
  }

  return (
    <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
      {options.map((option) => {
        const value = typeof option === 'string' ? option : option[valueKey]
        const label = typeof option === 'string' ? option : option[displayKey]
        const count = typeof option === 'object' && option.count ? ` (${option.count})` : ''
        
        return (
          <label key={value} className="flex items-center space-x-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selectedValues.includes(value)}
              onChange={(e) => handleChange(value, e.target.checked)}
              className="rounded border-gray-600 bg-transparent text-primary-500 focus:ring-primary-500 focus:ring-offset-0"
            />
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              {label}{count}
            </span>
          </label>
        )
      })}
    </div>
  )
}

const RangeFilter = ({ min, max, value, onChange, label, prefix = '', suffix = '' }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-300">
        <span>{prefix}{value[0]}{suffix}</span>
        <span>{prefix}{value[1]}{suffix}</span>
      </div>
      <div className="px-1">
        <input
          type="range"
          min={min}
          max={max}
          value={value[0]}
          onChange={(e) => onChange([parseInt(e.target.value), value[1]])}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider -mt-2"
        />
      </div>
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
}

const FilterSidebar = ({ filters, onFiltersChange, onClearAll, className = '' }) => {
  const contentTypeOptions = Object.values(ContentType).map(type => ({
    value: type,
    name: type.replace('_', ' ').toUpperCase(),
    count: Math.floor(Math.random() * 200) + 50
  }))

  const categoryOptions = Object.values(Category).map(cat => ({
    value: cat,
    name: cat.charAt(0).toUpperCase() + cat.slice(1).replace('_', ' '),
    count: Math.floor(Math.random() * 150) + 30
  }))

  const aiModelOptions = Object.values(AIModel).map(model => ({
    value: model,
    name: model.toUpperCase().replace('_', ' '),
    count: Math.floor(Math.random() * 100) + 20
  }))

  const sourceOptions = Object.values(SourcePlatform).map(source => ({
    value: source,
    name: source.charAt(0).toUpperCase() + source.slice(1).replace('_', ' '),
    count: Math.floor(Math.random() * 80) + 10
  }))

  const difficultyOptions = [
    { value: 'beginner', name: 'Beginner', count: 145 },
    { value: 'intermediate', name: 'Intermediate', count: 298 },
    { value: 'advanced', name: 'Advanced', count: 187 },
    { value: 'expert', name: 'Expert', count: 76 }
  ]

  const updateFilter = (key, value) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  return (
    <div className={`glass rounded-xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Filters</h2>
        <Button variant="ghost" size="sm" onClick={onClearAll}>
          Clear All
        </Button>
      </div>

      <div className="space-y-6">
        <FilterSection title="Content Type">
          <CheckboxFilter
            options={contentTypeOptions}
            selectedValues={filters.content_type || []}
            onChange={(value) => updateFilter('content_type', value)}
          />
        </FilterSection>

        <FilterSection title="Category">
          <CheckboxFilter
            options={categoryOptions}
            selectedValues={filters.category || []}
            onChange={(value) => updateFilter('category', value)}
          />
        </FilterSection>

        <FilterSection title="AI Models">
          <CheckboxFilter
            options={aiModelOptions}
            selectedValues={filters.ai_models || []}
            onChange={(value) => updateFilter('ai_models', value)}
          />
        </FilterSection>

        <FilterSection title="Price Range" defaultOpen={false}>
          <div className="space-y-4">
            <RangeFilter
              min={0}
              max={1000}
              value={filters.price_range || [0, 1000]}
              onChange={(value) => updateFilter('price_range', value)}
              prefix="$"
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.is_free === true}
                onChange={(e) => updateFilter('is_free', e.target.checked ? true : null)}
                className="rounded border-gray-600 bg-transparent text-primary-500"
              />
              <span className="text-sm text-gray-300">Free only</span>
            </label>
          </div>
        </FilterSection>

        <FilterSection title="Difficulty Level" defaultOpen={false}>
          <CheckboxFilter
            options={difficultyOptions}
            selectedValues={filters.difficulty_level || []}
            onChange={(value) => updateFilter('difficulty_level', value)}
          />
        </FilterSection>

        <FilterSection title="Source Platform" defaultOpen={false}>
          <CheckboxFilter
            options={sourceOptions}
            selectedValues={filters.source_platform || []}
            onChange={(value) => updateFilter('source_platform', value)}
          />
        </FilterSection>

        <FilterSection title="Quality Score" defaultOpen={false}>
          <RangeFilter
            min={0}
            max={100}
            value={[filters.quality_score_min || 0, 100]}
            onChange={(value) => updateFilter('quality_score_min', value[0])}
            suffix="/100"
          />
        </FilterSection>
      </div>
    </div>
  )
}

export default FilterSidebar