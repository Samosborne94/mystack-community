import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ContentCard from '../components/ContentCard'
import { mockContentItems, mockCategories, mockStats } from '../data/mockData.js'

const PromptCard = ({ title, description, price, category, author, rating }) => (
  <Card className="h-full">
    <div className="flex flex-col h-full">
      <Card.Header>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Card.Title className="line-clamp-2">{title}</Card.Title>
            <Card.Description className="mt-2 line-clamp-3">{description}</Card.Description>
          </div>
          <span className="ml-3 text-lg font-bold text-primary-400">${price}</span>
        </div>
      </Card.Header>
      
      <Card.Content className="flex-1">
        <div className="flex items-center justify-between text-sm">
          <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded-full">
            {category}
          </span>
          <div className="flex items-center space-x-1 text-yellow-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span className="text-gray-300">{rating}</span>
          </div>
        </div>
        
        <div className="mt-3 text-sm text-gray-400">
          by <span className="text-gray-300">{author}</span>
        </div>
      </Card.Content>
      
      <Card.Footer>
        <Button className="w-full" size="sm">
          View Details
        </Button>
      </Card.Footer>
    </div>
  </Card>
)

const StatCard = ({ label, value, icon }) => (
  <Card className="text-center">
    <div className="text-3xl mb-2">{icon}</div>
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </Card>
)

const CategoryCard = ({ name, count, icon, description }) => (
  <Card className="text-center group cursor-pointer">
    <div className="text-4xl mb-4 transition-transform group-hover:scale-110">{icon}</div>
    <Card.Title className="mb-2">{name}</Card.Title>
    <Card.Description className="mb-3">{description}</Card.Description>
    <div className="text-sm text-primary-400 font-medium">{count} prompts</div>
  </Card>
)

const HomePage = ({ onNavigate }) => {
  const handleViewItem = (item) => {
    console.log('View item:', item)
    // TODO: Navigate to item detail page
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
          The Ultimate AI
          <br />
          Prompt Marketplace
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Discover, buy, and sell the most effective AI prompts and workflows. 
          Join thousands of creators monetizing their expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8" onClick={() => onNavigate('browse')}>
            Explore Prompts
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Sell Your Prompts
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="bento-grid">
          <div className="bento-item-small">
            <StatCard label="Active Prompts" value={formatNumber(mockStats.total_prompts)} icon="⚡" />
          </div>
          <div className="bento-item-small">
            <StatCard label="Happy Customers" value={formatNumber(mockStats.active_users)} icon="😊" />
          </div>
          <div className="bento-item-small">
            <StatCard label="Total Sales" value={`$${formatNumber(mockStats.total_sales)}`} icon="💰" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Browse Categories</h2>
          <p className="text-gray-400 text-lg">Find prompts tailored to your specific needs</p>
        </div>
        
        <div className="bento-grid">
          {mockCategories.slice(0, 6).map((category, index) => (
            <div key={index} className="bento-item-small">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Prompts */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Prompts</h2>
          <p className="text-gray-400 text-lg">Hand-picked by our community</p>
        </div>
        
        <div className="bento-grid">
          {mockContentItems.slice(0, 6).map((item, index) => (
            <div key={item.id} className={index === 0 ? "bento-item-large" : "bento-item-small"}>
              <ContentCard item={item} onView={handleViewItem} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20">
        <Card className="max-w-4xl mx-auto">
          <Card.Header>
            <Card.Title className="text-4xl mb-4">Ready to Get Started?</Card.Title>
            <Card.Description className="text-lg">
              Join the community and start discovering amazing AI prompts today
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <Button size="lg" className="px-8" onClick={() => onNavigate('browse')}>
                Browse All Prompts
              </Button>
              <Button variant="secondary" size="lg" className="px-8">
                Join as Creator
              </Button>
            </div>
          </Card.Content>
        </Card>
      </section>
      </div>
    </div>
  )
}

export default HomePage