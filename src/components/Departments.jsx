import React from "react";
import styles from "../styles/Departments.module.scss";
import Link from "next/link";
const Departments = () => {
  return (
    <div className={styles._departments}>
      <div className={styles._departments_para}>
        <p>
          Chez <strong>MIRASAKA</strong>, nous nous engageons à offrir des
          solutions innovantes et sur mesure dans quatre domaines clés, alliant
          expertise et savoir-faire pour satisfaire les besoins de nos clients.
        </p>
      </div>
      <div className={styles._departments_child}>
        <div className={styles._departments_child_each} id="espaces">
          <div className={styles._departments_child_each_link}>
            <Link href={"/espace-aluminium"}>
              Espace Aluminium
              <span>
                <svg
                  width="30"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 97 72"
                >
                  <path
                    fill="#fff"
                    d="M57.2,1.4l-1.9,0.3l-0.9,0.2l0,0l-0.9,0.2C56.9,20.8,66.9,29.7,76.2,34H1.3v0.9v1.9v0.9h75.3c-9.7,4.2-20.2,13.2-23.2,31.9l1.9,0.3l1,0.2l0,0l0.9,0.1C61.7,41.5,84.8,38,92.5,37.7c1.7,0.1,2.7,0,2.8,0l-0.1-0.9l0,0v-0.5l0.1-2.4c0,0-0.6,0-1.5,0h-2.5C82.7,33.4,62.2,29.3,57.2,1.4z"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className={styles._departments_child_each}>
          <div className={styles._departments_child_each_link}>
            <Link href={"/espace-vitrage"}>
              Espace Vitrage
              <span>
                <svg
                  width="30"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 97 72"
                >
                  <path
                    fill="#fff"
                    d="M57.2,1.4l-1.9,0.3l-0.9,0.2l0,0l-0.9,0.2C56.9,20.8,66.9,29.7,76.2,34H1.3v0.9v1.9v0.9h75.3c-9.7,4.2-20.2,13.2-23.2,31.9l1.9,0.3l1,0.2l0,0l0.9,0.1C61.7,41.5,84.8,38,92.5,37.7c1.7,0.1,2.7,0,2.8,0l-0.1-0.9l0,0v-0.5l0.1-2.4c0,0-0.6,0-1.5,0h-2.5C82.7,33.4,62.2,29.3,57.2,1.4z"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className={styles._departments_child_each}>
          <div className={styles._departments_child_each_link}>
            <Link href={"/espace-decoration"} aria-label="espace-decoration">
              Espace Décoration
              <span>
                <svg
                  width="30"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 97 72"
                >
                  <path
                    fill="#fff"
                    d="M57.2,1.4l-1.9,0.3l-0.9,0.2l0,0l-0.9,0.2C56.9,20.8,66.9,29.7,76.2,34H1.3v0.9v1.9v0.9h75.3c-9.7,4.2-20.2,13.2-23.2,31.9l1.9,0.3l1,0.2l0,0l0.9,0.1C61.7,41.5,84.8,38,92.5,37.7c1.7,0.1,2.7,0,2.8,0l-0.1-0.9l0,0v-0.5l0.1-2.4c0,0-0.6,0-1.5,0h-2.5C82.7,33.4,62.2,29.3,57.2,1.4z"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className={styles._departments_child_each}>
          <div className={styles._departments_child_each_link}>
            <Link href={"/solutions"}>
              Espace Publicité
              <span>
                <svg
                  width="30"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 97 72"
                >
                  <path
                    fill="#fff"
                    d="M57.2,1.4l-1.9,0.3l-0.9,0.2l0,0l-0.9,0.2C56.9,20.8,66.9,29.7,76.2,34H1.3v0.9v1.9v0.9h75.3c-9.7,4.2-20.2,13.2-23.2,31.9l1.9,0.3l1,0.2l0,0l0.9,0.1C61.7,41.5,84.8,38,92.5,37.7c1.7,0.1,2.7,0,2.8,0l-0.1-0.9l0,0v-0.5l0.1-2.4c0,0-0.6,0-1.5,0h-2.5C82.7,33.4,62.2,29.3,57.2,1.4z"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
