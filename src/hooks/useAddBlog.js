import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AddBlog } from '../services/blogServicies';

const useAddBlog = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({ title, slug, description, img, reading_time }) =>
            AddBlog({ title, slug, description, img, reading_time }),
        onSuccess: () => {
            toast.success('Blog added successfully');
            queryClient.invalidateQueries(['blogs']); 
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return mutation;
};

export default useAddBlog;