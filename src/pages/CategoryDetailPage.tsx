
import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/forum/Header';
import BottomNav from '../components/forum/BottomNav';
import PostCard from '../components/forum/PostCard';
import { posts, categories } from '../data/forumData';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowLeft } from 'lucide-react';

const CategoryDetailPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = useMemo(() => {
    return categories.find(c => c.id === categoryId);
  }, [categoryId]);
  
  const categoryPosts = useMemo(() => {
    if (!category) return [];
    return posts.filter(post => post.category === category.name);
  }, [category]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ArrowLeft className="h-5 w-5 text-forum-text" />
          </button>
          <h1 className="text-xl font-bold text-forum-text">{category.name}</h1>
        </div>
        <p className="text-sm text-forum-lightText mt-1">{category.description}</p>
      </div>
      
      <div className="p-4">
        {categoryPosts.length > 0 ? (
          categoryPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-forum-lightText">No posts in this category yet.</p>
          </div>
        )}
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

export default CategoryDetailPage;
