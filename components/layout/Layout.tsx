import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Page } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Layout;
