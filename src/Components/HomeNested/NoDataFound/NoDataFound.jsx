const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-4">
      <div className="bg-blue-100 p-6 rounded-full mb-6">
        {/* Icon (using Heroicons as an example) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-16 h-16 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9V3.75a.75.75 0 111.5 0V9h4.75a.75.75 0 010 1.5h-4.75v4.75a.75.75 0 01-1.5 0V10.5H6.5a.75.75 0 010-1.5h4.75z"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        No Data Found
      </h2>
      <p className="text-gray-500">
        We couldnt find any data matching your request. Try adjusting your
        filters or come back later.
      </p>
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </div>
  );
};

export default NoDataFound;
