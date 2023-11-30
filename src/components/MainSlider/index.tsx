import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.css";

import type Image from "../../interfaces/image";

interface SlideProp {
  slides: Image[];
  wide?: boolean;
}

const MainSlider = ({ slides }: SlideProp) => {
  return (
    <section className="relative">
      <svg
        className="block sm:hidden absolute top-0 z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="20"
        viewBox="0 0 384 20"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M384 19.1373C367.684 17.8999 355.563 15.5259 344.28 13.3139C330.24 10.3888 319.44 8.29941 300 8.29941C281.981 8.29941 270.714 10.4509 257.441 12.9856L254.029 13.6372C238.277 16.6511 220.775 20 192 20C162.383 20 144.707 16.5346 128.591 13.3749L128.28 13.3139C114.24 10.3888 103.008 8.29941 84 8.29941C65.2411 8.29941 54.0555 10.4972 40.2703 13.2058L39.72 13.3139L38.9656 13.458C27.9309 15.5652 15.8411 17.874 0 19.1065V0H384V19.1373Z"
          fill="white"
        />
      </svg>
      <svg
        className="hidden sm:block absolute -top-2 z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="20"
        viewBox="0 0 1512 20"
        fill="none"
      >
        <path
          d="M44.28 13.3139C30.24 10.3888 19.44 8.29941 0 8.29941V0H1512V8.29941C1493.24 8.29941 1482.06 10.4972 1468.27 13.2057L1467.72 13.3139L1466.97 13.4579C1450.95 16.5167 1432.71 20 1404 20C1374.41 20 1356.48 16.4898 1340.28 13.3139C1326.24 10.3888 1315.44 8.29941 1296 8.29941C1277.21 8.29941 1265.76 10.6395 1251.72 13.3139C1235.52 16.4062 1217.81 20 1188 20C1158.38 20 1140.71 16.5346 1124.59 13.3749L1124.28 13.3139C1110.24 10.3888 1099.01 8.29941 1080 8.29941C1061.24 8.29941 1050.06 10.4972 1036.27 13.2057L1035.72 13.3139L1034.97 13.4579C1018.95 16.5167 1000.71 20 972 20C942.408 20 924.48 16.4898 908.28 13.3139C894.24 10.3888 883.44 8.29941 864 8.29941C845.208 8.29941 833.76 10.6395 819.72 13.3139C803.52 16.4062 785.808 20 756 20C726.383 20 708.707 16.5346 692.591 13.3749L692.28 13.3139C678.24 10.3888 667.008 8.29941 648 8.29941C629.241 8.29941 618.056 10.4972 604.27 13.2058L603.72 13.3139L602.966 13.458C586.949 16.5167 568.708 20 540 20C510.408 20 492.48 16.4898 476.28 13.3139C462.24 10.3888 451.44 8.29941 432 8.29941C413.208 8.29941 401.76 10.6395 387.72 13.3139C371.52 16.4062 353.808 20 324 20C294.383 20 276.707 16.5346 260.591 13.3749L260.28 13.3139C246.24 10.3888 235.008 8.29941 216 8.29941C197.241 8.29941 186.056 10.4972 172.271 13.2057L171.72 13.3139L170.966 13.4579C154.949 16.5167 136.708 20 108 20C78.408 20 60.48 16.4898 44.28 13.3139Z"
          fill="white"
        />
      </svg>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          bulletClass: "dot",
          bulletActiveClass: "dot-active",
          clickable: true,
          horizontalClass: "custom-pagination",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slides?.map((el, index) => (
          <SwiperSlide key={index}>
            {el.attributes.mime === "video/mp4" && (
              <video
                className="h-600 sm:h-766 object-cover w-full"
                src={`${import.meta.env.PUBLIC_STRAPI_URL}${el.attributes.url}`}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            )}
            {el.attributes.mime === "image/jpeg" && (
              <img
                className="h-600 sm:h-766 object-cover w-full"
                src={`${import.meta.env.PUBLIC_STRAPI_URL}${el.attributes.url}?format=webp&resize=1700x766&embed`}
                alt={el.attributes.alternativeText ?? "img"}
              />
            )}
            {el.attributes.mime === "image/webp" && (
              <img
                className="h-600 sm:h-766 object-cover w-full"
                src={`${import.meta.env.PUBLIC_STRAPI_URL}${el.attributes.url}?resize=1700x766&embed`}
                alt={el.attributes.alternativeText ?? "img"}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <svg
        className="hidden sm:block absolute -bottom-2 z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="20"
        viewBox="0 0 1512 20"
        fill="none"
      >
        <path
          d="M44.28 6.68605C30.24 9.6112 19.44 11.7006 0 11.7006V20H1512V11.7006C1493.24 11.7006 1482.06 9.50282 1468.27 6.79425L1467.72 6.68605L1466.97 6.54206C1450.95 3.48333 1432.71 0 1404 0C1374.41 0 1356.48 3.51018 1340.28 6.68605C1326.24 9.6112 1315.44 11.7006 1296 11.7006C1277.21 11.7006 1265.76 9.36047 1251.72 6.68605C1235.52 3.59375 1217.81 0 1188 0C1158.38 0 1140.71 3.46542 1124.59 6.62507L1124.28 6.68605C1110.24 9.6112 1099.01 11.7006 1080 11.7006C1061.24 11.7006 1050.06 9.50283 1036.27 6.79427L1035.72 6.68605L1034.97 6.54206C1018.95 3.48332 1000.71 0 972 0C942.408 0 924.48 3.51018 908.28 6.68605C894.24 9.6112 883.44 11.7006 864 11.7006C845.208 11.7006 833.76 9.36047 819.72 6.68605C803.52 3.59375 785.808 0 756 0C726.383 0 708.707 3.46542 692.591 6.62507L692.28 6.68605C678.24 9.6112 667.008 11.7006 648 11.7006C629.241 11.7006 618.056 9.50278 604.27 6.79418L603.72 6.68605L602.966 6.54203C586.949 3.4833 568.708 0 540 0C510.408 0 492.48 3.51018 476.28 6.68605C462.24 9.6112 451.44 11.7006 432 11.7006C413.208 11.7006 401.76 9.36047 387.72 6.68605C371.52 3.59375 353.808 0 324 0C294.383 0 276.707 3.46542 260.591 6.62507L260.28 6.68605C246.24 9.6112 235.008 11.7006 216 11.7006C197.241 11.7006 186.056 9.50283 172.271 6.79427L171.72 6.68605L170.966 6.54206C154.949 3.48332 136.708 0 108 0C78.408 0 60.48 3.51018 44.28 6.68605Z"
          fill="white"
        />
      </svg>
      <svg
        className="block sm:hidden absolute bottom-0 z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="20"
        viewBox="0 0 384 20"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M384 0.862656C367.684 2.10007 355.563 4.47414 344.28 6.68605C330.24 9.61119 319.44 11.7006 300 11.7006C281.981 11.7006 270.714 9.5491 257.441 7.01439L254.029 6.36279C238.277 3.34889 220.775 0 192 0C162.383 0 144.707 3.46542 128.591 6.62508L128.28 6.68605C114.24 9.61119 103.008 11.7006 84 11.7006C65.2411 11.7006 54.0555 9.50278 40.2703 6.79419L39.72 6.68605L38.9656 6.54202C27.9309 4.43475 15.8411 2.12598 0 0.893524V20H384V0.862656Z"
          fill="white"
        />
      </svg>
    </section>
  );
};

export default MainSlider;
