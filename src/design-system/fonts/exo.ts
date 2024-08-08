import localFont from "next/font/local";

export const exo = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/exo/exo-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/exo/exo-regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/exo/exo-bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});
