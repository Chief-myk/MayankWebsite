import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Oops! Page not found.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound