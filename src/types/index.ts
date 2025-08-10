// src/types/index.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'fan' | 'artist' | 'admin';
  avatar?: string;
  createdAt: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'fan' | 'artist';
  terms: boolean; 
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface Track {
  id: string;
  title: string;
  artist: User;
  audioUrl: string;
  coverUrl?: string;
  duration: number;
  price: number;
  subscribersOnly: boolean;
  createdAt: string;
}

export interface Subscription {
  id: string;
  fanId: string;
  artistId: string;
  plan: 'monthly' | 'annual';
  price: number;
  status: 'active' | 'cancelled' | 'expired';
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}