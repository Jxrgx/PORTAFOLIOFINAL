export default function SectionTitle({ children, className = "" }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {/* Main title */}
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent mb-4">
        {children}
      </h2>
      
      {/* Decorative elements */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg" />
        <div className="w-24 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg" />
        <div className="w-12 h-px bg-gradient-to-r from-pink-500 to-transparent" />
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}