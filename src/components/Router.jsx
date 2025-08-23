import { useState } from 'react'
import Layout from './Layout'
import HomePage from '../pages/HomePage'
import BrowsePage from '../pages/BrowsePage'

const Router = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => {
    setCurrentPage(page)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'browse':
        return <BrowsePage onNavigate={navigate} />
      case 'home':
      default:
        return <HomePage onNavigate={navigate} />
    }
  }

  return (
    <Layout onNavigate={navigate}>
      {renderCurrentPage()}
    </Layout>
  )
}

export default Router