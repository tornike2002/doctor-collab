import React from "react";
import BlogFom from "./BlogFom";

function BlogHeroModalContent({ 
  handleModalOpen, 
  handleFormSubmit, 
  HeroTitle, 
  HeroSubTitle, 
  imagePreview, 
  handleImagePreview, 
  fileRef 
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] flex flex-col gap-6">
        <h1 className="font-poppinsSemiBold text-black text-[21px]">Edit Blog Cover</h1>

       

        <BlogFom 
        handleFormSubmit={handleFormSubmit}
        HeroTitle={HeroTitle}
        HeroSubTitle={HeroSubTitle}
        fileRef={fileRef}
        handleModalOpen={handleModalOpen}
        imagePreview={imagePreview}
        />
      </div>
    </div>
  );
}

export default BlogHeroModalContent;
