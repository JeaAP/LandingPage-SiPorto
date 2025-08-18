export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-b-orange-500 animate-spin"></div>
      </div>
      <p className="mt-6 text-lg font-medium text-gray-700 animate-pulse">
        Loading...
      </p>
    </div>
  );
}