import { useState } from 'react'
import Button from './ui/Button'

const Navigation = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="glass sticky top-0 z-50 w-full border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <button 
                onClick={() => onNavigate('home')}
                className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
              >
                MyStack
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => onNavigate('browse')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Browse
                </button>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Categories
                </a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Workflows
                </a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  About
                </a>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
              <button 
                onClick={() => onNavigate('browse')}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
              >
                Browse
              </button>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Categories
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Workflows
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                About
              </a>
              <div className="pt-4 pb-3 border-t border-white/10">
                <div className="flex items-center px-3 space-x-3">
                  <Button variant="ghost" size="sm" className="w-full">
                    Sign In
                  </Button>
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-gradient mb-4">MyStack</h2>
            <p className="text-gray-400 mb-4">
              The premier marketplace for AI prompts and workflows. Discover, share, and monetize your best AI strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Prompts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Workflows</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 MyStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const Layout = ({ children, onNavigate }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={onNavigate} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout