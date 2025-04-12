import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen py-16 scroll-mt-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="prose prose-indigo max-w-none">
        {children}
      </div>
    </section>
  );
}