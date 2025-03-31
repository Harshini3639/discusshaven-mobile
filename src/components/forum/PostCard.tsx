
import React from 'react';
import { MessageSquare, Heart } from 'lucide-react';
import { Post } from '../../data/forumData';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);
    
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
    <Link to={`/post/${post.id}`}>
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-3 hover:border-forum-primary transition-all animate-fade-in">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-forum-text truncate">{post.author}</h3>
              <span className="text-xs text-forum-lightText">{formatTimeAgo(post.timestamp)}</span>
            </div>
            <h2 className="text-base font-medium text-forum-text mt-1">{post.title}</h2>
            <p className="text-sm text-forum-lightText mt-1 line-clamp-2">{post.content}</p>
            <div className="flex items-center mt-3 text-xs text-forum-lightText">
              <span className="bg-forum-secondary text-forum-text px-2 py-0.5 rounded-full text-xs">
                {post.category}
              </span>
              <div className="flex items-center ml-4">
                <Heart className="h-4 w-4 mr-1" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center ml-4">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{post.comments.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
