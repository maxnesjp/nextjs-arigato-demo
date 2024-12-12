const LoadingPlaceholder = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-4 w-2/3 mx-auto"></div>

      <div className="relative w-full h-56 sm:h-72 md:h-80 mb-6 bg-gray-300 rounded"></div>

      <div className="h-4 bg-gray-300 rounded mb-4 w-5/6 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded mb-4 w-4/5 mx-auto"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>

        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;
