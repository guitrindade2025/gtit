import axios from 'axios';

// Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  company: string;
  rating: number;
  image: string;
}

// Create an axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Service for handling contact form submissions
export const contactService = {
  submitContactForm: async (formData: ContactFormData) => {
    try {
      const response = await api.post('/contact', formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Service for handling service-related data
export const serviceService = {
  getAllServices: async (): Promise<Service[]> => {
    try {
      const response = await api.get('/services');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getServiceById: async (id: string): Promise<Service> => {
    try {
      const response = await api.get(`/services/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Service for handling company information
export const companyService = {
  getTeamMembers: async (): Promise<TeamMember[]> => {
    try {
      const response = await api.get('/team');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getTestimonials: async (): Promise<Testimonial[]> => {
    try {
      const response = await api.get('/testimonials');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Named exports for specific functions
export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    // First try to get data from backend
    const response = await api.get('/testimonials');
    return response.data;
  } catch (error) {
    // Fallback to fetch local data if API fails
    try {
      const response = await fetch('/assets/data/testimonials.json');
      const data = await response.json();
      return data;
    } catch (localError) {
      throw localError;
    }
  }
};

export const fetchServices = async (): Promise<Service[]> => {
  try {
    // First try to get data from backend
    const response = await api.get('/services');
    return response.data;
  } catch (error) {
    // Fallback to fetch local data if API fails
    try {
      const response = await fetch('/assets/data/services.json');
      const data = await response.json();
      return data;
    } catch (localError) {
      throw localError;
    }
  }
};

export const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  try {
    // First try to get data from backend
    const response = await api.get('/team');
    return response.data;
  } catch (error) {
    // Fallback to fetch local data if API fails
    try {
      const response = await fetch('/assets/data/team.json');
      const data = await response.json();
      return data;
    } catch (localError) {
      throw localError;
    }
  }
};

export default api;
