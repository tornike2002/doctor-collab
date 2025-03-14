import useGetBlogHero from "../../../hooks/useGetBlogHero";
import ErrorMessage from "../../ErrorMessage";
import BlogHeroContent from "./BlogHeroContent";
import SkeletonBlog from "./SkeletonBlog";
function BlogHero() {
  const { data, isLoading, isError, error } = useGetBlogHero();

  console.log("Fetched data:", data);

  if (isLoading) return <p><SkeletonBlog/></p>;
  if (isError) return <ErrorMessage errorMessage={error.message}/>

  return (
    <div>
      {data.map((Hero) => (
        <BlogHeroContent
          key={Hero.id} 
          id={Hero.id}
          HeroSubTitle={Hero.sub_title}
          HeroImg={Hero.img}
          HeroTitle={Hero.title}
        />
      ))}
    </div>
  );
}

export default BlogHero;
