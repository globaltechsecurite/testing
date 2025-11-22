"use client";
import React, { useEffect, useState } from "react";
import "swiper/scss";
import "swiper/scss/navigation";
import styles from "../styles/FichesTechnique.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const FicheTechnique = () => {
  const projectsData = [
    {
      img: "accordeon.webp",
      imgName: "accordéon",
    },
    {
      img: "compacto.webp",
      imgName: "compacto",
    },
    {
      img: "gard-corp.webp",
      imgName: "gard-corp",
    },
    {
      img: "guillotine.webp",
      imgName: "guillotine",
    },
    {
      img: "pergola.webp",
      imgName: "pergola",
    },
    {
      img: "rails-slim.webp",
      imgName: "rails-slim",
    },
  ];
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles._slider}>
      <div className={styles._slider_header} id="projects">
        <div className={styles._slider_header_title}>
          <h4>Fiches Techniques</h4>
        </div>
        <div className={styles._slider_header_subtitle}>
          <p>
            Découvrez fiches techniques détaillées, mettant en avant
            l&apos;innovation et la qualité de nos produits.
          </p>
        </div>
        <div className={`${styles._slider_header_nextBtn} swiper-button-next`}>
          <svg
            width="60px"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 97 72"
          >
            <path
              fill="#00000"
              d="M57.2,1.4l-1.9,0.3l-0.9,0.2l0,0l-0.9,0.2C56.9,20.8,66.9,29.7,76.2,34H1.3v0.9v1.9v0.9h75.3c-9.7,4.2-20.2,13.2-23.2,31.9l1.9,0.3l1,0.2l0,0l0.9,0.1C61.7,41.5,84.8,38,92.5,37.7c1.7,0.1,2.7,0,2.8,0l-0.1-0.9l0,0v-0.5l0.1-2.4c0,0-0.6,0-1.5,0h-2.5C82.7,33.4,62.2,29.3,57.2,1.4z"
            ></path>
          </svg>
        </div>
        <div className={`${styles._slider_header_leftBtn} swiper-button-prev`}>
          <svg
            width="60px"
            height="60px"
            viewBox="0 0 59 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.616 43.4021L24.7912 43.2165L25.3479 43.0928L25.9046 42.9691C23.8015 31.4021 17.616 25.8969 11.8634 23.2371L58.1933 23.2371V22.6804V21.5052V20.9485L11.616 20.9485C17.616 18.3505 24.1108 12.7835 25.9665 1.21651L24.7912 1.03094L24.1727 0.907227L23.616 0.845372C20.8325 18.5979 6.54382 20.7629 1.78093 20.9485C0.729385 20.8866 0.110826 20.9485 0.0489706 20.9485L0.11083 21.5052V21.8144L0.0489706 23.299C0.0489706 23.299 0.420105 23.299 0.976806 23.299H2.5232C7.84278 23.6083 20.5232 26.1443 23.616 43.4021Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div className={styles._slider_child} id="swiperProjects">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          grabCursor={true}
          navigation={{
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          modules={[Navigation, Autoplay]}
        >
          {projectsData.map((prj, i) => {
            return (
              <SwiperSlide key={i} className={styles._slider_child_op}>
                <Image
                  src={`/assets/fiches-techniques/${prj.img}`}
                  width={801}
                  height={521}
                  priority={false}
                  alt={`${prj.imgName}`}
                  title={`${prj.imgName}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FicheTechnique;
