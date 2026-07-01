import React from 'react'

interface Request {
  id: number
  name: string
  date: Date
  serviceType: string
  location: string
  status?: string
}

interface RequestHistoryPageProps {
  requests: Request[]
}

export default function RequestHistoryPage({ requests }: RequestHistoryPageProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'completed':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'pending':
        return '⏳'
      case 'confirmed':
        return '✓'
      case 'completed':
        return '✓✓'
      default:
        return '•'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-6 pb-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Request History</h1>

      {requests.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-2xl mb-2">📋</p>
          <p className="text-gray-600 text-lg font-semibold">No requests yet</p>
          <p className="text-gray-500 mt-2">Create your first interpreter request to get started!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">{request.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(request.status)}`}>
                  {getStatusIcon(request.status)} {request.status || 'Pending'}
                </span>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Date:</span> {new Date(request.date).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold">Service Type:</span> {request.serviceType}
                </p>
                <p>
                  <span className="font-semibold">Location:</span> {request.location}
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-blue-50 text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition-colors text-sm">
                  View Details
                </button>
                <button className="flex-1 bg-red-50 text-red-600 font-semibold py-2 px-4 rounded hover:bg-red-100 transition-colors text-sm">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}