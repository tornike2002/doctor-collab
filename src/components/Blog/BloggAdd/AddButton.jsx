import React from 'react';

export default function AddButton({ onClick }) {
    return (
        <div className="flex justify-center items-center mt-10">
            <div 
                onClick={onClick} 
                className="p-4 rounded-[10px] flex justify-center items-center bg-blue-500 text-white text-2xl cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              Add New Article
            </div>
         
        </div>
    );
}
