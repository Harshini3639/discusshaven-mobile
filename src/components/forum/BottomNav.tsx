
import React from 'react';
import { MessageCircle, Users, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className="flex flex-col items-center justify-center w-full h-full">
          <MessageCircle className={`h-6 w-6 ${isActive('/') ? 'text-forum-primary' : 'text-forum-lightText'}`} />
          <span className={`text-xs mt-1 ${isActive('/') ? 'text-forum-primary' : 'text-forum-lightText'}`}>Forums</span>
        </Link>
        <Link to="/categories" className="flex flex-col items-center justify-center w-full h-full">
          <Users className={`h-6 w-6 ${isActive('/categories') ? 'text-forum-primary' : 'text-forum-lightText'}`} />
          <span className={`text-xs mt-1 ${isActive('/categories') ? 'text-forum-primary' : 'text-forum-lightText'}`}>Categories</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center justify-center w-full h-full">
          <User className={`h-6 w-6 ${isActive('/profile') ? 'text-forum-primary' : 'text-forum-lightText'}`} />
          <span className={`text-xs mt-1 ${isActive('/profile') ? 'text-forum-primary' : 'text-forum-lightText'}`}>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
