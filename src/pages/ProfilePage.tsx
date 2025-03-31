
import React from 'react';
import Header from '../components/forum/Header';
import BottomNav from '../components/forum/BottomNav';
import { User, Mail, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Profile" />
      <div className="p-4">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-forum-secondary flex items-center justify-center mb-4">
              <User className="h-12 w-12 text-forum-primary" />
            </div>
            <h2 className="text-lg font-bold text-forum-text">Guest User</h2>
            <p className="text-forum-lightText text-sm">Forum Member</p>
            
            <div className="mt-6 w-full space-y-4">
              <div className="flex items-center text-forum-text">
                <Mail className="h-5 w-5 mr-3" />
                <span>guest@example.com</span>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-medium text-forum-text mb-4">Activity</h3>
          <div className="text-center py-4">
            <p className="text-forum-lightText">No recent activity</p>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
