import React from 'react';
import Navbar from './Navbar';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'Overview', href: '#overview' },
  { title: 'Genetics & Growth', href: '#genetics' },
  { title: 'Influences', href: '#influences' },
  { title: 'Development', href: '#development' },
  { title: 'Dispositions', href: '#dispositions' },
  { title: 'Practice', href: '#practice' },
  { title: 'References', href: '#references' },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} />
      <main className="container mx-auto px-4 pt-20 pb-12">
        {children}
      </main>
    </div>
  );
}