import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetBlogAdd } from '../../../hooks/useGetBlogAdd';
import ErrorMessage from "../../ErrorMessage";
import CarouselContent from "./CarouselContent";
import BlogCarouselSkeelton from "./BlogCarouselSkeelton";

export default function BlogCarousel() {
  const { data, isLoading, isError, error } = useGetBlogAdd();

  if (isLoading) {
    return <BlogCarouselSkeelton/>;
  }

  if (isError) {
    return <ErrorMessage message={error?.message || "An error occurred"} />;
  }

  return (
    <div className="my-4 p-[30px]">
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1.1,
          },
          475: {
            slidesPerView: 1.4,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CarouselContent
              img={item.img}
              reading={item.reading_time}
              title={item.title}
              content={item.description}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}