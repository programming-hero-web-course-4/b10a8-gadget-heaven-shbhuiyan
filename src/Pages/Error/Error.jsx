import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] text-gray-800">
          <div className="text-center max-w-2xl px-8 py-16 bg-white bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-md border border-gray-200">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFAA85] to-[#B3315F] animate-pulse">
              404
            </h1>
            <h2 className="text-4xl font-serif font-semibold text-gray-700 mt-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              We’re sorry, but the page you were looking for isn’t here. Perhaps it
              has been moved, or maybe the URL was mistyped.
            </p>
            <Link
              to="/"
              className="mt-8 inline-block px-8 py-4 text-xl font-medium text-white bg-gradient-to-r from-[#7F53AC] to-[#647DEE] rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Return Home
            </Link>
          </div>
        </div>
      );
    };

export default ErrorPage;
