
import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-forum-text">{title}</h1>
      <button className="relative p-2">
        <Bell className="h-5 w-5 text-forum-text" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-forum-accent rounded-full"></span>
      </button>
    </div>
  );
};

export default Header;
