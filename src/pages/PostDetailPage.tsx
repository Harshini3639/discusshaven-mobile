
import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, Send } from 'lucide-react';
import { posts } from '../data/forumData';
import CommentCard from '../components/forum/CommentCard';
import BottomNav from '../components/forum/BottomNav';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const PostDetailPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState('');
  
  const post = useMemo(() => {
    return posts.find(p => p.id === postId);
  }, [postId]);

  if (!post) {
    return <div>Post not found</div>;
  }

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

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would add the comment to the post
    alert(`Comment submitted: ${newComment}`);
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ArrowLeft className="h-5 w-5 text-forum-text" />
          </button>
          <h1 className="text-lg font-bold text-forum-text truncate">{post.title}</h1>
        </div>
      </div>
      
      <div className="bg-white p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-forum-text">{post.author}</h2>
              <span className="text-xs text-forum-lightText">{formatTimeAgo(post.timestamp)}</span>
            </div>
            <h1 className="text-lg font-bold text-forum-text mt-2">{post.title}</h1>
            <p className="text-forum-text mt-2">{post.content}</p>
            <div className="flex items-center mt-4">
              <button className="flex items-center text-forum-lightText">
                <Heart className="h-5 w-5 mr-1" />
                <span>{post.likes} likes</span>
              </button>
              <span className="bg-forum-secondary text-forum-text px-2 py-1 rounded-full text-xs ml-4">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-forum-text mb-4">Comments ({post.comments.length})</h3>
        <div className="space-y-3">
          {post.comments.map(comment => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
          
          {post.comments.length === 0 && (
            <div className="text-center py-4">
              <p className="text-forum-lightText">No comments yet. Be the first to comment!</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-3">
        <form onSubmit={handleSubmitComment} className="flex items-center space-x-2">
          <Textarea 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..." 
            className="min-h-[40px] text-sm resize-none"
          />
          <Button type="submit" size="icon" className="h-10 w-10 rounded-full bg-forum-primary hover:bg-forum-primary/90">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
      <BottomNav />
    </div>
  );
};

export default PostDetailPage;
