
import React from 'react';
import { MessageCircle, Mail, MessageSquare, Users } from 'lucide-react';
import { Category } from '../../data/forumData';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const getIcon = () => {
    switch (category.icon) {
      case 'message-circle':
        return <MessageCircle className="h-5 w-5 text-forum-primary" />;
      case 'mail':
        return <Mail className="h-5 w-5 text-forum-primary" />;
      case 'message-square':
        return <MessageSquare className="h-5 w-5 text-forum-primary" />;
      case 'users':
        return <Users className="h-5 w-5 text-forum-primary" />;
      default:
        return <MessageCircle className="h-5 w-5 text-forum-primary" />;
    }
  };

  return (
    <Link to={`/category/${category.id}`}>
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-forum-primary transition-all animate-fade-in">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="bg-forum-secondary p-2 rounded-lg mr-3">
              {getIcon()}
            </div>
            <div>
              <h3 className="font-medium text-forum-text">{category.name}</h3>
              <p className="text-sm text-forum-lightText">{category.description}</p>
            </div>
          </div>
          <span className="text-sm text-forum-lightText">{category.postCount} posts</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
