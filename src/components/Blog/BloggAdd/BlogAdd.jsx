import React, { useState } from 'react';
import { useGetBlogAdd } from '../../../hooks/useGetBlogAdd';
import useAddBlog from '../../../hooks/useAddBlog';
import { v4 as uuidv4 } from 'uuid';
import supabase from '../../../services/supabase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddButton from './AddButton';
import BlogForm from './BlogForm';
import Modal from '../../Modal/Modal';

import { useNavigate } from 'react-router-dom';
import { useDeleteBlogs } from '../../../hooks/useDeleteBlogs';
import BlogSkeleton from './BlogSkeleton';
import ErrorMessage from '../../ErrorMessage';
import BlogList from './BlogList.JSX';
export default function BlogAdd() {
    const { data: blogs, isError, isLoading, error } = useGetBlogAdd();
   
    const { mutate: AddBlogInfo, isPending } = useAddBlog();
    const { mutate: deleteBlogs } = useDeleteBlogs();
    const [showForm, setShowForm] = useState(false);
    const [errors, setErrors] = useState({
        title: '',
        slug: '',
        description: '',
        img: '',
        reading_time: '',
    });

    const navigate = useNavigate();
    const handleDelete = (id) => {
        deleteBlogs(id);
      };
    const handleOpenForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get('title');
        const slug = formData.get('slug');
        const timeValue = formData.get('reading_time');
        const description = formData.get('description');
        const imageFile = formData.get('img');

        setErrors({ title: '', slug: '', description: '', img: '', reading_time: '' });
        const newErrors = {};
        if (!title) newErrors.title = "Title is required.";
        if (!slug) newErrors.slug = "Slug is required.";
        if(description.length < 100){
          newErrors.description = "description must be a minimum 100 letter."
        }
        if (!timeValue) {
          newErrors.reading_time = "Time is required.";
        } else if (parseInt(timeValue, 10) > 60) {
            newErrors.reading_time = "Reading time cannot exceed 60 minutes.";
          }
          
        if (!imageFile || imageFile.size === 0) {
            newErrors.img = "Image is required.";
        }
        if (!imageFile) {
          newErrors.image = "Image is required.";
        }
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
      
        let imageUrl;
        if (imageFile) {
            const imageName = `${uuidv4()}_${imageFile.name}`;
            const { data: uploadData, error } = await supabase.storage
                .from('doctor_storage')
                .upload(imageName, imageFile);

            if (error) {
                return toast.error('Failed to upload image.');
            }

            imageUrl = `https://secchefzcjhlryqhjkvm.supabase.co/storage/v1/object/public/doctor_storage/${uploadData.path}`;
        }

        AddBlogInfo({
            title,
            slug,
            description,
            img: imageUrl,
            reading_time: parseInt(timeValue,10),
        });

        setShowForm(false);
    };

   

    const navigateHandler = (id) => {
        navigate(`/blog/${id}`);
    };






    if (isLoading) return <BlogSkeleton/>
  
    if (isError) return <ErrorMessage errorMessage={error.message}/>

    return (
        <div>
            <AddButton onClick={handleOpenForm} />
            {showForm && (
                <Modal>
                    <BlogForm  onSubmit={handleSubmit} onClose={handleCloseForm} errors={errors} />
                </Modal>
            )}
           
          {/* { blogs.map((item) => (
        <BlogCard
            key={item.id}
            data={item}
            handleDelete={handleDelete}
            errors={errors}
            setErrors={setErrors}
            onClosed={handleCloseForm}
        />
           ))} */}
           
           <BlogList data={blogs} handleDelete={handleDelete}/>
        </div>
    );
}