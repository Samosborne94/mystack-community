// Data structures matching the AI Resource Scraping System output

export const ContentType = {
  PROMPT: 'prompt',
  TUTORIAL: 'tutorial',
  RESEARCH_PAPER: 'research_paper',
  VIDEO: 'video',
  TOOL: 'tool',
  DATASET: 'dataset',
  WORKFLOW: 'workflow',
  CODE_SNIPPET: 'code_snippet'
}

export const SourcePlatform = {
  GITHUB: 'github',
  REDDIT: 'reddit',
  MEDIUM: 'medium',
  ARXIV: 'arxiv',
  HUGGING_FACE: 'hugging_face',
  YOUTUBE: 'youtube',
  DISCORD: 'discord',
  TWITTER: 'twitter',
  LINKEDIN: 'linkedin',
  PERSONAL_BLOG: 'personal_blog',
  COMPANY_BLOG: 'company_blog'
}

export const AIModel = {
  CHATGPT: 'chatgpt',
  CLAUDE: 'claude',
  GEMINI: 'gemini',
  LLAMA: 'llama',
  MISTRAL: 'mistral',
  PALM: 'palm',
  GPT4: 'gpt-4',
  DALLE: 'dalle',
  MIDJOURNEY: 'midjourney',
  STABLE_DIFFUSION: 'stable_diffusion'
}

export const Category = {
  MARKETING: 'marketing',
  DEVELOPMENT: 'development',
  CREATIVE: 'creative',
  ANALYTICS: 'analytics',
  EDUCATION: 'education',
  BUSINESS: 'business',
  RESEARCH: 'research',
  DESIGN: 'design',
  WRITING: 'writing',
  DATA_SCIENCE: 'data_science'
}

// Main content structure from scraping system
export const createContentItem = ({
  id,
  title,
  description,
  content_type,
  category,
  ai_models = [],
  source_url,
  source_platform,
  author,
  scraped_at,
  processed_at,
  quality_score,
  popularity_metrics = {},
  tags = [],
  price = null,
  is_free = true,
  content_length,
  difficulty_level,
  estimated_time,
  language = 'en',
  metadata = {}
}) => ({
  id,
  title,
  description,
  content_type,
  category,
  ai_models,
  source_url,
  source_platform,
  author: {
    name: author?.name || 'Unknown',
    avatar: author?.avatar || null,
    reputation: author?.reputation || 0,
    verified: author?.verified || false,
    social_links: author?.social_links || {}
  },
  scraped_at,
  processed_at,
  quality_score, // 0-100 from AI processing
  popularity_metrics: {
    views: popularity_metrics.views || 0,
    likes: popularity_metrics.likes || 0,
    shares: popularity_metrics.shares || 0,
    comments: popularity_metrics.comments || 0,
    bookmarks: popularity_metrics.bookmarks || 0
  },
  tags,
  price,
  is_free,
  content_length,
  difficulty_level, // beginner, intermediate, advanced, expert
  estimated_time, // in minutes
  language,
  metadata: {
    word_count: metadata.word_count || 0,
    code_blocks: metadata.code_blocks || 0,
    images: metadata.images || 0,
    links: metadata.links || 0,
    ...metadata
  }
})

// Search and filter structures
export const SearchFilters = {
  content_type: [],
  category: [],
  ai_models: [],
  source_platform: [],
  difficulty_level: [],
  price_range: { min: 0, max: 1000 },
  is_free: null,
  quality_score_min: 0,
  language: [],
  date_range: { start: null, end: null },
  tags: []
}

export const SortOptions = {
  RELEVANCE: 'relevance',
  NEWEST: 'newest',
  OLDEST: 'oldest',
  PRICE_LOW: 'price_low',
  PRICE_HIGH: 'price_high',
  QUALITY_HIGH: 'quality_high',
  POPULARITY: 'popularity',
  AUTHOR_REPUTATION: 'author_reputation'
}

// User and marketplace structures
export const UserRole = {
  BUYER: 'buyer',
  SELLER: 'seller',
  ADMIN: 'admin',
  MODERATOR: 'moderator'
}

export const TransactionStatus = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  REFUNDED: 'refunded',
  DISPUTED: 'disputed'
}

export const createUser = ({
  id,
  username,
  email,
  display_name,
  avatar,
  bio,
  role,
  reputation_score,
  total_sales,
  total_purchases,
  verified,
  social_links = {},
  created_at,
  last_active
}) => ({
  id,
  username,
  email,
  display_name,
  avatar,
  bio,
  role,
  reputation_score,
  total_sales,
  total_purchases,
  verified,
  social_links,
  created_at,
  last_active
})