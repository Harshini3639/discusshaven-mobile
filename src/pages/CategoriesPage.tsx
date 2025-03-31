
import React from 'react';
import Header from '../components/forum/Header';
import BottomNav from '../components/forum/BottomNav';
import CategoryCard from '../components/forum/CategoryCard';
import { categories } from '../data/forumData';

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Categories" />
      <div className="p-4">
        <div className="space-y-3">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default CategoriesPage;
