
import React from 'react';
import { Heart } from 'lucide-react';
import { Comment } from '../../data/forumData';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const commentDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - commentDate.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    }
  };
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-50 mb-3 animate-fade-in">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <img src={comment.avatar} alt={comment.author} className="h-8 w-8 rounded-full" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-forum-text">{comment.author}</h3>
            <span className="text-xs text-forum-lightText">{formatTimeAgo(comment.timestamp)}</span>
          </div>
          <p className="text-sm text-forum-text mt-1">{comment.content}</p>
          <div className="flex items-center mt-3 text-xs text-forum-lightText">
            <button className="flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              <span>{comment.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
