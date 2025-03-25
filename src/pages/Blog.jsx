import React from "react";
import BlogHero from "../components/Blog/BlogAboutHero/BlogHero";

import BlogAdd from "../components/Blog/BloggAdd/BlogAdd";
import BlogCarousel from "../components/Blog/BlogCarousel/BlogCarousel";

export default function Blog() {
  return <div>
    <BlogHero/>
    <BlogAdd/>
   <BlogCarousel/>
    </div>;
}
