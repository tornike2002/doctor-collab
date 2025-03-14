import useGetBlogHero from "../../../hooks/useGetBlogHero";
import BlogHeroContent from "./BlogHeroContent";
import SkeletonBlog from "./SkeletonBlog";
function BlogHero() {
  const { data, isLoading, isError, error } = useGetBlogHero();

  console.log("Fetched data:", data);

  if (isLoading) return <p><SkeletonBlog/></p>;
  if (isError) return <p>Error: {error.message}</p>;

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
