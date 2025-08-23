import Card from './ui/Card'
import Button from './ui/Button'

const ContentCard = ({ item, onView, className = '' }) => {
  const {
    title,
    description,
    content_type,
    category,
    ai_models,
    source_platform,
    author,
    quality_score,
    popularity_metrics,
    tags,
    price,
    is_free,
    difficulty_level,
    estimated_time,
    metadata
  } = item

  const formatContentType = (type) => {
    return type.replace('_', ' ').split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const getDifficultyColor = (level) => {
    const colors = {
      beginner: 'text-green-400 bg-green-400/20',
      intermediate: 'text-yellow-400 bg-yellow-400/20',
      advanced: 'text-orange-400 bg-orange-400/20',
      expert: 'text-red-400 bg-red-400/20'
    }
    return colors[level] || 'text-gray-400 bg-gray-400/20'
  }

  const getQualityColor = (score) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 80) return 'text-yellow-400'
    if (score >= 70) return 'text-orange-400'
    return 'text-red-400'
  }

  return (
    <Card className={`h-full flex flex-col ${className}`} hover={true}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full">
            {formatContentType(content_type)}
          </span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(difficulty_level)}`}>
            {difficulty_level}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {is_free ? (
            <span className="text-green-400 font-bold text-sm">FREE</span>
          ) : (
            <span className="text-primary-400 font-bold">${price}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-3">
          {description}
        </p>

        {/* Metadata */}
        <div className="space-y-2 mb-4">
          {/* AI Models */}
          {ai_models && ai_models.length > 0 && (
            <div className="flex items-center space-x-1">
              <span className="text-xs text-gray-500">Models:</span>
              <div className="flex flex-wrap gap-1">
                {ai_models.slice(0, 3).map((model, idx) => (
                  <span key={idx} className="text-xs px-1.5 py-0.5 bg-gray-700 text-gray-300 rounded">
                    {model.toUpperCase()}
                  </span>
                ))}
                {ai_models.length > 3 && (
                  <span className="text-xs text-gray-500">+{ai_models.length - 3}</span>
                )}
              </div>
            </div>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded-full">
                  #{tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="text-xs text-gray-500">+{tags.length - 3}</span>
              )}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              <span>{formatNumber(popularity_metrics?.views || 0)}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span>{formatNumber(popularity_metrics?.likes || 0)}</span>
            </div>

            {estimated_time && (
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span>{estimated_time}min</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className={`font-medium ${getQualityColor(quality_score)}`}>
              {quality_score}/100
            </span>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={author?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32'} 
              alt={author?.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <div className="flex items-center space-x-1">
              <span className="text-xs text-gray-300">{author?.name}</span>
              {author?.verified && (
                <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              )}
            </div>
          </div>

          <span className="text-xs text-gray-500 capitalize">
            {source_platform?.replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <Button 
          onClick={() => onView(item)} 
          className="w-full" 
          size="sm"
        >
          View Details
        </Button>
      </div>
    </Card>
  )
}

export default ContentCard