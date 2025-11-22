"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Hero.module.scss";
import gsap, { Back } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import SplitText from "../lib/SplitText.min.js";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import WistiaVideo from "./WistiaVideo.jsx";
const Hero = () => {
  gsap.registerPlugin(ScrollToPlugin, CSSRulePlugin, SplitText);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const hero = useRef(null);
  const herofirstTitle = useRef(null);
  const heroPara = useRef(null);
  const heroBtn = useRef(null);

  useEffect(() => {
    const imageScaleRule = CSSRulePlugin.getRule(`.${styles._hero}::before`);
    const tl = gsap.timeline();

    const split = new SplitText(
      [herofirstTitle.current, heroPara.current],
      {
        type: "lines",
        linesClass: "lineChildren",
      }
    );
    const splitParent = new SplitText(
      [herofirstTitle.current, heroPara.current],
      {
        type: "lines",
        linesClass: "lineParent",
      }
    );
    tl.to(".main_container", {
      css: {
        visibility: "visible",
      },
    })
      .to(split.lines, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "Power3.easeOut",
        duration: 2,
      })
      .fromTo(
        [heroBtn.current],
        {
          duration: 1,
          opacity: 0,
          y: 20,
        },
        { opacity: 1, y: 0 },
        2
      )
      .to(imageScaleRule, {
        ease: "Power3.easeOut",
        duration: 1.5,
        scale: 1,
      });
  }, []);

  const handleScroll = () => {
    const tl = gsap.timeline({
      defaults: {
        ease: Back.easeOut,
      },
    });
    tl.fromTo(
      "#btn",
      {
        duration: 1.8,
        scale: 0.8,
      },
      {
        duration: 0.8,
        scale: 1,
      }
    );
    gsap.to(window, {
      scrollTo: "#espaces",
      duration: 1,
    });
  };
  return (
    <div className={styles._hero} ref={hero}>
      <div className={styles._hero_title}>
        <h1 ref={herofirstTitle}>Élevez votre espace avec l&apos;élégance de nos solutions</h1>
      </div>
      <div
        className={styles._hero_playBtn}
        onClick={() => {
          setIsVideoOpen(true);
        }}
      >
        <svg
          width="40px"
          height="40px"
          viewBox="-0.5 0 7 7"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-347.000000, -3766.000000)"
              fill="#000000"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                  id="play-[#1003]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className={styles._hero_para}>
        <p ref={heroPara}>
          Découvrez des solutions sur mesure alliant design raffiné et
          performance. Nos créations transcendent l&apos;ordinaire pour
          transformer votre vision en réalité.
        </p>
        <button ref={heroBtn} onClick={handleScroll}>
          Découvrez nos solutions
        </button>
      </div>
      {isVideoOpen && (
        <div className={styles._hero_videoHandler}>
          <div className={styles._hero_videoHandler_child}>
            <WistiaVideo />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => {
                  setIsVideoOpen(false);
                }}
              >
                fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
