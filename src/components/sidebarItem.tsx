import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router';

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  hasChildren?: boolean;
  children?: React.ReactNode;
  to?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  hasChildren = false,
  children,
  to = '#',
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    if (hasChildren) {
      setExpanded(!expanded);
    }
  };

  const itemContent = (
    <div
      className={`flex items-center p-3 gap-3 cursor-pointer transition-all duration-200 hover:bg-green-50 hover:text-green-600`}
      onClick={toggleExpand}
    >
      {icon}
        {title}
      {hasChildren && (
        <div className="ml-auto">
          {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {hasChildren ? (
        itemContent
      ) : (
        <NavLink to={to} className="block ">
          {itemContent}
        </NavLink>
      )}

      {hasChildren && expanded && (
        <div className="pl-8 py-1 bg-gray-50">{children}</div>
      )}
    </div>
  );
};

export default SidebarItem;