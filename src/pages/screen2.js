import { useRouter } from 'next/router';
import ProgressBar from '../components/ProgressBar';
import { FiMapPin, FiSearch, FiCheck } from 'react-icons/fi';

export default function Screen2() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen bg-white p-6">
      {/* Progress Bar */}
      <div className="w-full flex justify-between items-center">
        <ProgressBar progress={33} />
        <span className="text-xs font-medium text-gray-500">02/06</span>
      </div>

      {/* Title */}
      <h1 className="text-lg font-semibold mt-6 text-center">
        Link Your Google Business
      </h1>

      {/* Search Bar */}
      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Search your business..."
          className="w-full px-14 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#5259a6] text-sm"
        />
        <FiSearch className="absolute left-4 top-3.5 text-gray-950 text-lg" />
      </div>

      {/* Business Item */}
      <div className="mt-6 bg-[#f7f7fc] p-4 rounded-lg flex items-center shadow-sm">
        {/* Business Logo */}
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-gray-200">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/512px-Etsy_logo.svg.png"
            alt="Etsy Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Business Details */}
        <div className="ml-4">
          <p className="font-medium text-black text-sm">ElemenOPillows</p>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <FiMapPin className="mr-1 text-gray-400" />
            <span>USA</span>
          </div>
        </div>

        {/* Check Icon */}
        <div className="ml-auto">
          <div className="ml-auto w-6 h-6 rounded-full bg-[#5259a6] flex items-center justify-center">
            <FiCheck className="text-white text-sm" />
          </div>
        </div>
      </div>

      {/* Links */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Don’t have a Google Business account?{' '}
        <a href="#" className="text-[#5259a6] underline">
          Click here
        </a>{' '}
        to set it up. Not able to find your business?{' '}
        <a href="#" className="text-[#5259a6] underline">
          Try this
        </a>.
      </p>

      {/* Navigation */}
      <div className="flex justify-between mt-auto pt-6">
        {/* Back Button */}
        <button
          className="w-12 h-12 border-2 border-[#5259a6] text-[#5259a6] rounded-full flex items-center justify-center"
          onClick={() => router.push('/')}
        >
          ←
        </button>

        {/* Forward Button */}
        <button
          className="w-12 h-12 bg-[#5259a6] text-white rounded-full flex items-center justify-center"
          onClick={() => router.push('/screen3')}
        >
          →
        </button>
      </div>

    </div>
  );
}
