import React from 'react'

interface HomePageProps {
  onNavigate: (page: 'request' | 'history' | 'profile') => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center px-4 pb-20">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white mb-3">REQUEST</h1>
        <p className="text-xl text-blue-100 mb-2">ASL Interpreter Request App</p>
        <p className="text-sm text-blue-50">Connect with professional ASL interpreters</p>
      </div>

      <div className="w-full max-w-sm space-y-3">
        <button
          onClick={() => onNavigate('request')}
          className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
        >
          📝 Request an Interpreter
        </button>

        <button
          onClick={() => onNavigate('history')}
          className="w-full bg-blue-400 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
        >
          📋 View My Requests
        </button>

        <button
          onClick={() => onNavigate('profile')}
          className="w-full bg-purple-400 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
        >
          👤 My Profile
        </button>
      </div>

      <div className="mt-12 w-full max-w-sm bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-white">
        <h3 className="font-bold mb-3 text-lg">Quick Stats</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-xs text-blue-100">Active Requests</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-xs text-blue-100">Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-xs text-blue-100">Hours Used</p>
          </div>
        </div>
      </div>
    </div>
  )
}