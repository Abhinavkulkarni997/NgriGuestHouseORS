import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// replace with your imports (you already had these)
import thg1 from "../../assets/Gallery/thg1.jpeg";
import thg2 from "../../assets/Gallery/thg2.jpeg";
import thg3 from "../../assets/Gallery/thg3.png";
import thg4 from "../../assets/Gallery/thg4.jpeg";
import thg6 from "../../assets/Gallery/thg6.jpg";
import thg7 from "../../assets/Gallery/thg7.jpg";

const images = [
  { id: 1, title: "Surat", src: thg1 },
  { id: 2, title: "Kasauli", src: thg2 },
  { id: 3, title: "Ambala", src: thg3 },
  { id: 4, title: "Sakleshpur", src: thg4 },
  { id: 5, title: "Phagwara", src: thg6 },
  { id: 6, title: "Other", src: thg7 },
];

export default function GuestHouseGallerySwiper() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">
          Gallery
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-8 rounded"></div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet w-3 h-3 rounded-full inline-block opacity-60",
            bulletActiveClass: "swiper-pagination-bullet-active bg-purple-600 opacity-100",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={24}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 160,
            modifier: 1,
            slideShadows: false,
          }}
          // responsive sizes -- center slide gets larger because its slide width is larger (see slide style below)
          breakpoints={{
            320: { spaceBetween: 12 },
            640: { spaceBetween: 16 },
            1024: { spaceBetween: 24 },
          }}
          className="py-6"
        >
          {images.map((img, idx) => (
            <SwiperSlide
              key={img.id}
              // using inline style so center slide is wider automatically based on swiper's centeredSlides + slidesPerView:'auto'
              style={{
                width: idx === 2 ? "420px" : "210px", // center index initial is 2 visually — Swiper will center active slide anyway. These widths make center visually larger.
              }}
              className="!flex !justify-center !items-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[420px] md:h-[460px]">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Display title centered only on active slide via Swiper's active-slide class */}
                <div className="absolute inset-x-0 bottom-8 text-center text-white pointer-events-none">
                  {/* <h3 className="text-xl md:text-2xl font-semibold">{img.title}</h3>
                  <button className="mt-3 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white text-white text-sm hover:bg-white hover:text-black transition">
                    Know More
                  </button> */}
                </div>

                {/* vertical text for side slides — we'll hide it on active slide using CSS below */}
                <div className="absolute left-3 bottom-4 text-white text-lg font-medium rotate-90 origin-left z-10 pointer-events-none">
                  {img.title}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* custom nav */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="custom-prev w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
              <FaIcon name="left" />
            </button>
            <button className="custom-next w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
              <FaIcon name="right" />
            </button>
          </div>

          {/* pagination container */}
          <div className="custom-pagination mt-6 flex justify-center items-center"></div>
        </Swiper>
      </div>

      {/* Extra styles to tweak side/center appearance */}
      <style jsx>{`
        /* Hide vertical text on center (active) slide */
        .swiper-slide-active .rotate-90 {
          display: none;
        }
        /* Make active slide a bit larger (scale) */
        .swiper-slide-active > div {
          transform: scale(1.02);
          box-shadow: 0 18px 40px rgba(2, 6, 23, 0.2);
        }
        /* De-emphasize non-active slides */
        .swiper-slide:not(.swiper-slide-active) img {
          filter: saturate(0.95) brightness(0.85);
        }
        /* make bullets purple when active (our pagination config already sets class but this ensures style) */
        .swiper-pagination-bullet-active {
          background: #7c3aed !important;
          opacity: 1 !important;
        }
        /* hide default navigation if present */
        .swiper-button-prev, .swiper-button-next {
          display: none;
        }
        /* remove default outline */
        .swiper-slide:focus {
          outline: none;
        }
      `}</style>
    </section>
  );
}

/* Small inline FaIcon helper to avoid extra imports for this snippet */
function FaIcon({ name }) {
  // lightweight arrows using SVG so we don't rely on react-icons here
  if (name === "left")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
