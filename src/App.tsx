import React, { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import RequestFormPage from './pages/RequestFormPage'
import RequestHistoryPage from './pages/RequestHistoryPage'
import ProfilePage from './pages/ProfilePage'

type PageType = 'home' | 'request' | 'history' | 'profile'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [requests, setRequests] = useState<any[]>([])

  const handleNewRequest = (requestData: any) => {
    setRequests([...requests, { ...requestData, id: Date.now(), date: new Date() }])
    setCurrentPage('history')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'request':
        return <RequestFormPage onSubmit={handleNewRequest} />
      case 'history':
        return <RequestHistoryPage requests={requests} />
      case 'profile':
        return <ProfilePage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1">
        {renderPage()}
      </main>
      
      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 sticky bottom-0">
        <div className="flex justify-around py-3">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg ${
              currentPage === 'home' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <span className="text-2xl">🏠</span>
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setCurrentPage('request')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg ${
              currentPage === 'request' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <span className="text-2xl">➕</span>
            <span className="text-xs">Request</span>
          </button>
          <button
            onClick={() => setCurrentPage('history')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg ${
              currentPage === 'history' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <span className="text-2xl">📋</span>
            <span className="text-xs">History</span>
          </button>
          <button
            onClick={() => setCurrentPage('profile')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg ${
              currentPage === 'profile' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <span className="text-2xl">👤</span>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default App