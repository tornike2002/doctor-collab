import React, { useState } from 'react';
import { useGetBlogAdd } from '../../../hooks/useGetBlogAdd';
import AddButton from './AddButton';
import BlogForm from './BlogForm';
import Modal from '../../Modal/Modal';

export default function BlogAdd() {
    const { data, isError, isLoading, error } = useGetBlogAdd();
    const [showForm, setShowForm] = useState(false);

    const handleOpenForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div>
            <AddButton onClick={handleOpenForm} />
            {showForm && (
                <Modal>
                    <BlogForm onClose={handleCloseForm} />
                </Modal>
            )}
        </div>
    );
}