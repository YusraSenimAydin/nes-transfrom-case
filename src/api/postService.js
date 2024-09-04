import apiClient from './apiClient';

export const getPosts = async () => {
  try {
    const response = await apiClient.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    throw error; 
  }
};
