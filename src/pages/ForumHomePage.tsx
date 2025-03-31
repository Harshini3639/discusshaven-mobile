
import React from 'react';
import Header from '../components/forum/Header';
import BottomNav from '../components/forum/BottomNav';
import PostCard from '../components/forum/PostCard';
import { posts } from '../data/forumData';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const ForumHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Forum" />
      <div className="p-4">
        <div className="mb-4">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className="fixed bottom-20 right-4">
        <Button className="rounded-full w-14 h-14 bg-forum-primary hover:bg-forum-primary/90 shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
      <BottomNav />
    </div>
  );
};

export default ForumHomePage;
