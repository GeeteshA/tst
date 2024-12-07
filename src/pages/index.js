import { useRouter } from 'next/router';
import ProgressBar from '@/components/ProgressBar';


export default function Screen1() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-white p-4">
      {/* Progress Bar */}
      <div className="w-full flex justify-between items-center">
        <ProgressBar progress={16} />
        <span className="text-xs font-medium text-gray-500">01/06</span>
      </div>

      {/* Title and Illustration */}
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-xl font-semibold text-[#5259a6]">SonicLinker</h1>
        <img src="/Illestration.png" alt="Illustration" className="w-3/4 mt-4" />
      </div>

      {/* Description */}
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-900">
          Get 2x More Customers from Google Reviews.
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          We make it effortless for small businesses like restaurants, salons,
          and doctors.
        </p>
      </div>

      {/* Navigation */}
      <button
        className="w-12 h-12 bg-[#5259a6] text-white rounded-full flex items-center justify-center mt-4"
        onClick={() => router.push('/screen2')}
      >
        →
      </button>
      <p className="text-xs text-gray-400 mt-2">Join 1,000 businesses growing with us</p>
  
    </div>
  );
}
