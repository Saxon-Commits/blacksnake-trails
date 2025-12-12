import React from 'react';

export interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export enum ProjectType {
  MTB = "Mountain Bike Trail",
  BMX = "BMX Track",
  WALKING = "Walking Trail",
  EXCAVATION = "General Excavation",
  LANDSCAPING = "Landscaping"
}