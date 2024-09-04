import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/postService';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],   
    queryFn: getPosts,     
    staleTime: 60000,      
    cacheTime: 30000,     
    onError: (error) => {
      console.error('Error fetching posts:', error);
    },
  });
};
