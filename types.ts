
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
