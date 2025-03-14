import useGetBlogHero from "../../../hooks/useGetBlogHero";
import BlogHeroContent from "./BlogHeroContent";

function BlogHero() {
  const { data, isLoading, isError, error } = useGetBlogHero();

  console.log("Fetched data:", data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;


  if (!Array.isArray(data) || data.length === 0) {
    return <p>No blog content available.</p>;
  }

  return (
    <div>
      {data.map((Hero) => (
        <BlogHeroContent
        
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
