import { FaEye, FaSearch, FaCalendarAlt, FaDirections, FaMousePointer } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';

export const statisticsData = [
  {
    name: 'Interactions',
    value: 231,
    change: '+12%',
    icon: <HiOutlineUserGroup className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Views',
    value: 111,
    change: '-3%',
    icon: <FaEye className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Searches',
    value: 23,
    change: '+18%',
    icon: <FaSearch className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Bookings',
    value: 14,
    change: '+10%',
    icon: <FaCalendarAlt className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Directions',
    value: 10,
    change: '-3%',
    icon: <FaDirections className="text-[#5259a6] w-6 h-6" />,
  },
  {
    name: 'Website Clicks',
    value: 7,
    change: '-1%',
    icon: <FaMousePointer className="text-[#5259a6] w-6 h-6" />,
  },
];
