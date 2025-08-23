import { createContentItem, ContentType, Category, AIModel, SourcePlatform } from '../types/index.js'

// Mock data that simulates output from your AI scraping system
export const mockContentItems = [
  createContentItem({
    id: 'ai-001',
    title: 'Advanced ChatGPT Marketing Copy Generator with A/B Testing Framework',
    description: 'Comprehensive prompt template that generates high-converting marketing copy for any product or service. Includes built-in A/B testing variations, emotional triggers, and conversion optimization techniques discovered through scraping 10,000+ successful campaigns.',
    content_type: ContentType.PROMPT,
    category: Category.MARKETING,
    ai_models: [AIModel.CHATGPT, AIModel.GPT4],
    source_url: 'https://github.com/marketing-prompts/advanced-copy-generator',
    source_platform: SourcePlatform.GITHUB,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b35c?w=150',
      reputation: 95,
      verified: true,
      social_links: { twitter: '@sarahj_marketing', linkedin: 'sarah-johnson-marketing' }
    },
    scraped_at: '2025-08-20T10:30:00Z',
    processed_at: '2025-08-20T11:15:00Z',
    quality_score: 94,
    popularity_metrics: {
      views: 15420,
      likes: 892,
      shares: 156,
      comments: 78,
      bookmarks: 445
    },
    tags: ['copywriting', 'conversion', 'a-b-testing', 'email-marketing', 'social-media'],
    price: 29.99,
    is_free: false,
    content_length: 2400,
    difficulty_level: 'intermediate',
    estimated_time: 15,
    language: 'en',
    metadata: {
      word_count: 2400,
      code_blocks: 0,
      images: 3,
      links: 12,
      success_rate: '87%',
      tested_platforms: ['Facebook Ads', 'Google Ads', 'Email Campaigns']
    }
  }),
  
  createContentItem({
    id: 'ai-002',
    title: 'Senior Developer Code Review Assistant - Multi-Language Support',
    description: 'AI-powered code review prompts that catch bugs, suggest optimizations, and ensure best practices across Python, JavaScript, Go, and Rust. Trained on millions of code reviews from top tech companies.',
    content_type: ContentType.PROMPT,
    category: Category.DEVELOPMENT,
    ai_models: [AIModel.CHATGPT, AIModel.CLAUDE],
    source_url: 'https://reddit.com/r/MachineLearning/comments/xyz123',
    source_platform: SourcePlatform.REDDIT,
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      reputation: 88,
      verified: true,
      social_links: { github: 'alexchen-dev', twitter: '@alexchen_code' }
    },
    scraped_at: '2025-08-19T14:22:00Z',
    processed_at: '2025-08-19T15:05:00Z',
    quality_score: 91,
    popularity_metrics: {
      views: 8765,
      likes: 423,
      shares: 89,
      comments: 156,
      bookmarks: 234
    },
    tags: ['code-review', 'debugging', 'best-practices', 'python', 'javascript', 'security'],
    price: 45.00,
    is_free: false,
    content_length: 3200,
    difficulty_level: 'advanced',
    estimated_time: 25,
    language: 'en',
    metadata: {
      word_count: 3200,
      code_blocks: 15,
      images: 5,
      links: 8,
      supported_languages: ['Python', 'JavaScript', 'Go', 'Rust', 'TypeScript'],
      coverage_areas: ['Security', 'Performance', 'Maintainability', 'Testing']
    }
  }),

  createContentItem({
    id: 'ai-003',
    title: 'Creative Writing Story Generator with Character Development',
    description: 'Unlock unlimited story ideas with this comprehensive creative writing system. Generates unique plots, three-dimensional characters, world-building elements, and narrative structures. Based on analysis of 50,000+ published stories.',
    content_type: ContentType.PROMPT,
    category: Category.CREATIVE,
    ai_models: [AIModel.CHATGPT, AIModel.CLAUDE, AIModel.GEMINI],
    source_url: 'https://medium.com/@writer-tools/creative-story-generator',
    source_platform: SourcePlatform.MEDIUM,
    author: {
      name: 'Maya Patel',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      reputation: 82,
      verified: false,
      social_links: { medium: '@writer-tools', instagram: '@maya_writes' }
    },
    scraped_at: '2025-08-18T09:15:00Z',
    processed_at: '2025-08-18T09:45:00Z',
    quality_score: 86,
    popularity_metrics: {
      views: 12340,
      likes: 567,
      shares: 123,
      comments: 89,
      bookmarks: 345
    },
    tags: ['creative-writing', 'storytelling', 'character-development', 'plot-generation', 'world-building'],
    price: 19.99,
    is_free: false,
    content_length: 1800,
    difficulty_level: 'beginner',
    estimated_time: 20,
    language: 'en',
    metadata: {
      word_count: 1800,
      code_blocks: 0,
      images: 7,
      links: 5,
      story_genres: ['Fantasy', 'Sci-Fi', 'Mystery', 'Romance', 'Thriller'],
      character_archetypes: 20
    }
  }),

  createContentItem({
    id: 'ai-004',
    title: 'Data Analysis & Visualization Helper for Business Intelligence',
    description: 'Transform raw data into actionable insights with AI prompts designed for statistical analysis, trend identification, and visualization recommendations. Supports Pandas, R, and SQL workflows.',
    content_type: ContentType.WORKFLOW,
    category: Category.ANALYTICS,
    ai_models: [AIModel.CHATGPT, AIModel.CLAUDE],
    source_url: 'https://huggingface.co/datasets/business-intelligence-prompts',
    source_platform: SourcePlatform.HUGGING_FACE,
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      reputation: 93,
      verified: true,
      social_links: { linkedin: 'david-kim-data', github: 'dkim-analytics' }
    },
    scraped_at: '2025-08-17T16:30:00Z',
    processed_at: '2025-08-17T17:10:00Z',
    quality_score: 95,
    popularity_metrics: {
      views: 9876,
      likes: 445,
      shares: 76,
      comments: 134,
      bookmarks: 298
    },
    tags: ['data-analysis', 'visualization', 'business-intelligence', 'pandas', 'sql', 'statistics'],
    price: 35.00,
    is_free: false,
    content_length: 2800,
    difficulty_level: 'intermediate',
    estimated_time: 30,
    language: 'en',
    metadata: {
      word_count: 2800,
      code_blocks: 12,
      images: 8,
      links: 15,
      tools_covered: ['Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'SQL', 'R'],
      analysis_types: ['Descriptive', 'Predictive', 'Prescriptive']
    }
  }),

  createContentItem({
    id: 'ai-005',
    title: 'Social Media Content Calendar Automation System',
    description: 'Generate weeks of engaging social media content with this AI-powered system. Creates posts, captions, hashtag strategies, and optimal posting schedules. Analyzed 1M+ viral posts for patterns.',
    content_type: ContentType.WORKFLOW,
    category: Category.MARKETING,
    ai_models: [AIModel.CHATGPT, AIModel.GEMINI],
    source_url: 'https://youtube.com/watch?v=social-media-automation',
    source_platform: SourcePlatform.YOUTUBE,
    author: {
      name: 'Lisa Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      reputation: 79,
      verified: false,
      social_links: { youtube: '@lisa-social-media', tiktok: '@lisarodriguez' }
    },
    scraped_at: '2025-08-16T12:45:00Z',
    processed_at: '2025-08-16T13:20:00Z',
    quality_score: 83,
    popularity_metrics: {
      views: 23450,
      likes: 1234,
      shares: 289,
      comments: 167,
      bookmarks: 456
    },
    tags: ['social-media', 'content-calendar', 'automation', 'hashtags', 'engagement'],
    price: 25.00,
    is_free: false,
    content_length: 2100,
    difficulty_level: 'beginner',
    estimated_time: 18,
    language: 'en',
    metadata: {
      word_count: 2100,
      code_blocks: 3,
      images: 12,
      links: 9,
      platforms_covered: ['Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'Facebook'],
      content_types: ['Posts', 'Stories', 'Reels', 'Carousels']
    }
  }),

  createContentItem({
    id: 'ai-006',
    title: 'Technical Documentation Generator for API References',
    description: 'Create clear, comprehensive technical documentation with AI prompts that structure complex information into user-friendly guides. Includes API references, tutorials, and troubleshooting sections.',
    content_type: ContentType.PROMPT,
    category: Category.DEVELOPMENT,
    ai_models: [AIModel.CLAUDE, AIModel.CHATGPT],
    source_url: 'https://dev.to/technical-writing/api-docs-generator',
    source_platform: SourcePlatform.PERSONAL_BLOG,
    author: {
      name: 'Michael Zhang',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150',
      reputation: 90,
      verified: true,
      social_links: { github: 'mzhang-tech-writer', linkedin: 'michael-zhang-docs' }
    },
    scraped_at: '2025-08-15T08:20:00Z',
    processed_at: '2025-08-15T08:55:00Z',
    quality_score: 89,
    popularity_metrics: {
      views: 6789,
      likes: 321,
      shares: 67,
      comments: 45,
      bookmarks: 189
    },
    tags: ['technical-writing', 'documentation', 'api', 'developer-tools', 'guides'],
    price: 40.00,
    is_free: false,
    content_length: 3500,
    difficulty_level: 'advanced',
    estimated_time: 35,
    language: 'en',
    metadata: {
      word_count: 3500,
      code_blocks: 25,
      images: 6,
      links: 18,
      doc_types: ['API Reference', 'Tutorials', 'Troubleshooting', 'Quick Start'],
      frameworks_supported: ['REST', 'GraphQL', 'gRPC', 'WebSockets']
    }
  }),

  // Free content examples
  createContentItem({
    id: 'ai-007',
    title: 'Free Prompt Engineering Fundamentals',
    description: 'Learn the basics of prompt engineering with this comprehensive free guide. Covers fundamental techniques, common pitfalls, and optimization strategies for better AI interactions.',
    content_type: ContentType.TUTORIAL,
    category: Category.EDUCATION,
    ai_models: [AIModel.CHATGPT, AIModel.CLAUDE, AIModel.GEMINI],
    source_url: 'https://arxiv.org/abs/2023.prompt-engineering',
    source_platform: SourcePlatform.ARXIV,
    author: {
      name: 'Dr. Emily Watson',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150',
      reputation: 97,
      verified: true,
      social_links: { twitter: '@dr_emily_ai', github: 'ewatson-research' }
    },
    scraped_at: '2025-08-14T15:30:00Z',
    processed_at: '2025-08-14T16:00:00Z',
    quality_score: 92,
    popularity_metrics: {
      views: 45670,
      likes: 2341,
      shares: 567,
      comments: 234,
      bookmarks: 1234
    },
    tags: ['prompt-engineering', 'ai-fundamentals', 'free', 'education', 'beginner-friendly'],
    price: null,
    is_free: true,
    content_length: 4200,
    difficulty_level: 'beginner',
    estimated_time: 45,
    language: 'en',
    metadata: {
      word_count: 4200,
      code_blocks: 8,
      images: 15,
      links: 25,
      citation_count: 156,
      academic_paper: true
    }
  }),

  createContentItem({
    id: 'ai-008',
    title: 'Machine Learning Model Evaluation Checklist',
    description: 'Comprehensive checklist for evaluating ML models in production. Covers performance metrics, bias detection, data drift monitoring, and model interpretability. Open-source contribution.',
    content_type: ContentType.TOOL,
    category: Category.DATA_SCIENCE,
    ai_models: [AIModel.CHATGPT],
    source_url: 'https://github.com/ml-ops/model-evaluation-checklist',
    source_platform: SourcePlatform.GITHUB,
    author: {
      name: 'Carlos Mendoza',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      reputation: 85,
      verified: true,
      social_links: { github: 'cmendoza-mlops', linkedin: 'carlos-mendoza-ml' }
    },
    scraped_at: '2025-08-13T11:15:00Z',
    processed_at: '2025-08-13T11:45:00Z',
    quality_score: 87,
    popularity_metrics: {
      views: 12890,
      likes: 678,
      shares: 123,
      comments: 89,
      bookmarks: 345
    },
    tags: ['machine-learning', 'model-evaluation', 'mlops', 'free', 'checklist'],
    price: null,
    is_free: true,
    content_length: 1600,
    difficulty_level: 'advanced',
    estimated_time: 20,
    language: 'en',
    metadata: {
      word_count: 1600,
      code_blocks: 5,
      images: 4,
      links: 12,
      github_stars: 2340,
      contributors: 15
    }
  })
]

export const mockCategories = [
  { id: 'marketing', name: 'Marketing', count: 234, icon: '📈', description: 'Sales copy, ads, social media content' },
  { id: 'development', name: 'Development', count: 189, icon: '💻', description: 'Code generation, debugging, documentation' },
  { id: 'creative', name: 'Creative', count: 156, icon: '🎨', description: 'Writing, design, content creation' },
  { id: 'analytics', name: 'Analytics', count: 98, icon: '📊', description: 'Data analysis, reporting, insights' },
  { id: 'education', name: 'Education', count: 124, icon: '📚', description: 'Learning materials, explanations, tutorials' },
  { id: 'business', name: 'Business', count: 167, icon: '💼', description: 'Strategy, planning, productivity' },
  { id: 'data-science', name: 'Data Science', count: 145, icon: '🔬', description: 'ML models, data processing, analysis' },
  { id: 'design', name: 'Design', count: 87, icon: '🎯', description: 'UI/UX, graphics, visual content' },
  { id: 'writing', name: 'Writing', count: 203, icon: '✍️', description: 'Content creation, copywriting, blogs' },
  { id: 'research', name: 'Research', count: 76, icon: '🔍', description: 'Academic papers, analysis, insights' }
]

export const mockStats = {
  total_prompts: 2847,
  active_users: 15234,
  total_sales: 1200000,
  avg_quality_score: 87.5,
  content_growth_rate: 23.4, // percentage per month
  user_satisfaction: 94.2
}