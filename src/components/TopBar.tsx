import { Bell,  Menu, Search, Settings } from "lucide-react";

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <div className="h-20  border-gray-200 flex  items-center justify-between px-8 py-8">
        <div className="relative sm:block hidden cursor-pointer menu-toggler">
          <Menu onClick={onMenuClick} size={40} className="text-gray-600 bg-white rounded-full p-1" />
        </div>
      <div className="relative w-100  hidden">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={16} className="text-gray-500" />
        </div>
        <input 
          type="text" 
          className="w-full pl-10 pr-4 py-4 bg-gray-200  text-sm border border-gray-200 rounded-4xl focus:outline-none focus:ring-1 focus:ring-green-500"
          placeholder="Search here..."
        />
      </div>
      
      <div className="flex items-center">
      
        <div className="relative mr-[1rem] cursor-pointer">
          <Bell size={40} className="text-gray-600 bg-white rounded-full p-1" />
          <span className="absolute font-semibold -top-1 -right-1 p-2 bg-yellow-500 text-white text-xs w-5 h-5 shadow-2xl flex items-center justify-center rounded-full">
            12
          </span>
        </div>
        
        <div className="flex items-center">
          <div className="mr-4 text-right">
            <div className="text-[1.25rem] sm:text-[1rem] font-medium">Hello, Dunstan</div>
            <div className="text-[1rem] text-gray-500">Project Organizer</div>
          </div>
          
          <div className="h-15 w-15 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src="/dunstan-profile.png" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
          
        </div>
        <div className="relative ml-[2rem] sm:ml-[1rem]">
          <Settings size={40} className="text-white bg-[#1C4D62] rounded-full p-3" />
          <span className="absolute -top-1 -right-1 bg-red-700 text-white text-[1rem] w-5 h-5 flex items-center justify-center rounded-full">
            !
          </span>
        </div>
      </div>
    </div>
  )
}
