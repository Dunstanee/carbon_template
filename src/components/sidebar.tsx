import { BarChart3, Check, CheckSquare, ClipboardList, Files,  LayoutDashboard, ListOrdered,  Plus, Settings, UserCheck, Users, X } from "lucide-react";
import SidebarItem from "./sidebarItem";
import Logo from "./Logo";
import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";


interface SideBarMenuProps {
  isMenuTaggled: boolean;
}

export default function SideBarMenu({ isMenuTaggled }: SideBarMenuProps) {

  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isMenuTaggled) {
      toggleSidebar();
    }
  }, [isMenuTaggled]);

  useEffect(() => {
    toggleSidebar();
  }, [navigate]);
  return (
    <>
      


      {/* Sidebar container */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-40 flex flex-col 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex
        `}
      >
        {/* Close button on mobile */}
        <div className="flex items-center justify-between md:hidden p-4 border-b">
          <Logo />
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="hidden md:block p-4 border-b">
          <Logo /> 
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-5">
          <SidebarItem icon={<LayoutDashboard size={18} className="icon-menu" />} title="Dashboard" to="/" />

          <SidebarItem icon={<Files size={18} />} title="Projects" hasChildren={true}>
            <div className="text-sm py-2">
              <NavLink to="/add-project" className="sidebar-link flex items-center gap-3"><Plus className="icon-menu" /> Add Projects</NavLink>
              <NavLink to="/projects" className="sidebar-link flex items-center gap-3"><ListOrdered className="icon-menu" /> Project List</NavLink>
            </div>
          </SidebarItem>

          <SidebarItem icon={<UserCheck size={18} />} title="Committee" hasChildren={true}>
            <div className="text-sm py-2">
              <div className="sidebar-link">Committee List</div>
              <div className="sidebar-link">Pending Approvals</div>
            </div>
          </SidebarItem>

          <SidebarItem icon={<Files size={18} />} title="Article 6 Projects" hasChildren={true}>
            <div className="text-sm py-2">
              <div className="sidebar-link flex items-center gap-3"><Check size={18} /> Seek Authorization</div>
              <NavLink to="/authorized-projects" className="sidebar-link flex items-center gap-3"><CheckSquare className="icon-menu" /> Authorized Projects</NavLink>
            </div>
          </SidebarItem>

          <SidebarItem icon={<Users size={18}  className="icon-menu"/>} title="User Management" to="user-management" />
          <SidebarItem icon={<ClipboardList size={18}  className="icon-menu"/>} title="Compliance Monitoring" to="compliance-monitoring" />
          <SidebarItem icon={<BarChart3 size={18}  className="icon-menu"/>} title="Data Analytics and Reports" to="data-analytics" />
          <SidebarItem icon={<Settings size={18}  className="icon-menu"/>} title="System Settings" to="system-settings" />
        </div>

        <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
          <div>© 2023 All Rights Reserved</div>
          <div className="mt-1 flex items-center">
            <span>Made with</span>
            <span className="text-red-500 mx-1">❤</span>
            <span>by Vite Carbon</span>
          </div>
        </div>
      </div>
    </>
  );
}
