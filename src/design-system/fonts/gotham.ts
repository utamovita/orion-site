import localFont from "next/font/local";

export const gotham = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/gotham/gotham-book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/gotham/gotham-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/gotham/gotham-bold.ttf",
      weight: "600",
      style: "normal",
    },
  ]
});
