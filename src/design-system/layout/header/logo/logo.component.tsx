import Link from "next/link";
import React from "react";
import styles from "./logo.module.scss";

function Logo() {
  return (
    <Link href={"/"} className={styles.wrapper}>
      <svg width="121" height="48" viewBox="0 0 121 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="path-1-outside-1_301_1061"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="121"
          height="48"
          fill="black"
        >
          <rect fill="white" width="121" height="48" />
          <path d="M0 0H119V48H0V0Z" />
        </mask>
        <path d="M117 0V48H121V0H117Z" fill="#666666" mask="url(#path-1-outside-1_301_1061)" />
        <path
          d="M12.672 12.12C14.7627 12.12 16.6507 12.6107 18.336 13.592C20.0427 14.5733 21.376 15.9493 22.336 17.72C23.3173 19.4693 23.808 21.4533 23.808 23.672C23.808 25.8907 23.3173 27.8853 22.336 29.656C21.376 31.4053 20.0427 32.7813 18.336 33.784C16.6507 34.7653 14.7627 35.256 12.672 35.256C10.56 35.256 8.65067 34.7653 6.944 33.784C5.25867 32.7813 3.92533 31.4053 2.944 29.656C1.96267 27.8853 1.472 25.8907 1.472 23.672C1.472 21.4533 1.96267 19.4693 2.944 17.72C3.92533 15.9493 5.25867 14.5733 6.944 13.592C8.65067 12.6107 10.56 12.12 12.672 12.12ZM12.672 15.512C11.2213 15.512 9.93067 15.8427 8.8 16.504C7.66933 17.1653 6.784 18.1147 6.144 19.352C5.52533 20.5893 5.216 22.0293 5.216 23.672C5.216 25.3147 5.52533 26.7547 6.144 27.992C6.784 29.2293 7.66933 30.1787 8.8 30.84C9.93067 31.5013 11.2213 31.832 12.672 31.832C14.1013 31.832 15.3707 31.5013 16.48 30.84C17.6107 30.1787 18.4853 29.2293 19.104 27.992C19.744 26.7547 20.064 25.3147 20.064 23.672C20.064 22.0293 19.744 20.5893 19.104 19.352C18.4853 18.1147 17.6107 17.1653 16.48 16.504C15.3707 15.8427 14.1013 15.512 12.672 15.512ZM39.3613 35L33.7292 25.976H31.1373V35H27.4893V12.408H35.4573C38.0386 12.408 39.9906 13.0373 41.3133 14.296C42.6573 15.5547 43.3293 17.2187 43.3293 19.288C43.3293 21.0587 42.8279 22.5093 41.8253 23.64C40.8439 24.7707 39.4146 25.496 37.5373 25.816L43.4573 35H39.3613ZM31.1373 23.384H35.1693C38.1133 23.384 39.5853 22.0827 39.5853 19.48C39.5853 18.2427 39.2226 17.2827 38.4973 16.6C37.7933 15.896 36.6839 15.544 35.1693 15.544H31.1373V23.384ZM50.2623 12.408V35H46.6143V12.408H50.2623ZM65.1408 12.12C67.2314 12.12 69.1194 12.6107 70.8048 13.592C72.5114 14.5733 73.8448 15.9493 74.8048 17.72C75.7861 19.4693 76.2768 21.4533 76.2768 23.672C76.2768 25.8907 75.7861 27.8853 74.8048 29.656C73.8448 31.4053 72.5114 32.7813 70.8048 33.784C69.1194 34.7653 67.2314 35.256 65.1408 35.256C63.0288 35.256 61.1194 34.7653 59.4128 33.784C57.7274 32.7813 56.3941 31.4053 55.4128 29.656C54.4314 27.8853 53.9408 25.8907 53.9408 23.672C53.9408 21.4533 54.4314 19.4693 55.4128 17.72C56.3941 15.9493 57.7274 14.5733 59.4128 13.592C61.1194 12.6107 63.0288 12.12 65.1408 12.12ZM65.1408 15.512C63.6901 15.512 62.3994 15.8427 61.2688 16.504C60.1381 17.1653 59.2528 18.1147 58.6128 19.352C57.9941 20.5893 57.6848 22.0293 57.6848 23.672C57.6848 25.3147 57.9941 26.7547 58.6128 27.992C59.2528 29.2293 60.1381 30.1787 61.2688 30.84C62.3994 31.5013 63.6901 31.832 65.1408 31.832C66.5701 31.832 67.8394 31.5013 68.9488 30.84C70.0794 30.1787 70.9541 29.2293 71.5728 27.992C72.2128 26.7547 72.5328 25.3147 72.5328 23.672C72.5328 22.0293 72.2128 20.5893 71.5728 19.352C70.9541 18.1147 70.0794 17.1653 68.9488 16.504C67.8394 15.8427 66.5701 15.512 65.1408 15.512ZM98.23 35H94.582L83.606 18.328V35H79.958V12.44H83.606L94.582 29.176V12.44H98.23V35Z"
          fill="white"
        />
      </svg>
    </Link>
  );
}

export { Logo };