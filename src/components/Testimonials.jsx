// import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiMenuAlt2 } from "react-icons/hi";
import cookies from "js-cookie";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// icon
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

// image
import pro6 from "../assets/images/Projects/all/landing.png";
import pro5 from "../assets/images/Projects/all/nike.png";
import pro4 from "../assets/images/Projects/all/coffee.png";
import pro3 from "../assets/images/Projects/all/book.png";
import pro2 from "../assets/images/Projects/all/resturnt.png";
import pro1 from "../assets/images/Projects/all/ecommerce.png";
import pro7 from "../assets/images/Projects/all/bravo.png";

const Testimonials = () => {
  // const { Testimonials } = content;
  const lng = cookies.get("i18next") || "en";
  const [activeIndex, setActiveIndex] = useState(0);
  const listServes = [
    { key: "pro-1", img: pro1 },
    { key: "pro-2", img: pro2 },
    { key: "pro-3", img: pro3 },
    { key: "pro-4", img: pro4 },
    { key: "pro-5", img: pro5 },
    { key: "pro-6", img: pro6 },
    { key: "pro-7", img: pro7 },
  ];
  const { t } = useTranslation();

  return (
    <section>
      <div className="container px-2 pt-10">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={110}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] w-full"
        >
          {listServes.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-4 rounded-2xl flex items-center gap-6 
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt="..." className="h-48 " />

                <div>
                  <h6 className={lng === "ar" ? "font-titleAr2 py-1" : "py-1"}>
                    {t(`project.projectData.${content.key}.title`)}
                  </h6>
                  <p
                    className={
                      lng === "ar"
                        ? "font-titleAr2 sm:text-base text-[11px] md:text-[15px]"
                        : "sm:text-base text-[11px] md:text-[15px]"
                    }
                  >
                    {t(`project.projectData.${content.key}.desc`)}
                  </p>

                  <div className="flex justify-end">
                    <div className="flex gap-4">
                      <a
                        href={t(`project.projectData.${content.key}.url`)}
                        className="w-8 h-8 rounded-full bg-slate-300 hover:bg-slate-600 cursor-pointer flex justify-center items-center hover:scale-110 duration-200"
                      >
                        <FaGlobe size={24} />
                      </a>
                      <a
                        href={t(`project.projectData.${content.key}.github`)}
                        className="w-8 h-8 rounded-full bg-slate-300 hover:bg-slate-600 cursor-pointer flex justify-center items-center hover:scale-110 duration-200"
                      >
                        <FaGithub size={26} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
