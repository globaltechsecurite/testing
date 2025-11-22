import React from "react";
import styles from "../styles/Testimonials.module.scss";
import Marquee from "react-fast-marquee";
import testimonialsData from "../data/testimonials";
import { MdOutlineStar } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className={styles._testimonials}>
      <div className={styles._testimonials_header}>
        <div className={styles._testimonials_header_title}>
          <h4>Ce que nos clients disent.</h4>
        </div>
        <div className={styles._testimonials_header_subTitle}>
          <p>
            Des avis qui parlent d&apos;eux-mêmes, reflétant la satisfaction de
            nos clients. <br />
            Découvrez comment nos services ont transformé leurs espaces et leur
            quotidien.
          </p>
        </div>
      </div>
      <Marquee className={styles._testimonials_marquee} pauseOnHover={true}>
        {testimonialsData.map((testimonial, i) => {
          return (
            <div className={styles._testimonials_marquee_each} key={i}>
              <div className={styles._testimonials_marquee_each_para}>
                <p>{testimonial.content}</p>
              </div>
              <div className={styles._testimonials_marquee_each_clientName}>
                <span>{testimonial.clientName}</span>
              </div>
              <div className={styles._testimonials_marquee_each_stars}>
                <span>
                  <MdOutlineStar color="#050505" size={18} />
                </span>
                <span>
                  <MdOutlineStar color="#050505" size={18} />
                </span>
                <span>
                  <MdOutlineStar color="#050505" size={18} />
                </span>
                <span>
                  <MdOutlineStar color="#050505" size={18} />
                </span>
                <span>
                  <MdOutlineStar color="#050505" size={18} />
                </span>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Testimonials;
