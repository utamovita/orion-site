import { Locale } from "@customTypes/pages";

type BlogItem = {
  title: {
    [key in Locale]: string;
  };
  subtitle: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
};

const imageBasePath = "/assets/images/gallery/";

const blogConfig: BlogItem[] = [
  {
    title: {
      en: "Integration april",
      de: "Integration April",
      pl: "Integracja kwiecień",
    },
    subtitle: "2024",
    images: [
      {
        url: `${imageBasePath}kwiecien-24/2v4.jpg`,
        alt: "gallery blog 1 image 4",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v1.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v3.jpg`,
        alt: "gallery blog 1 image 3",
      },

      {
        url: `${imageBasePath}kwiecien-24/2v2.jpg`,
        alt: "gallery blog 1 image 2",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v5.jpg`,
        alt: "gallery blog 1 image 5",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v6.jpg`,
        alt: "gallery blog 1 image 6",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v7.jpg`,
        alt: "gallery blog 1 image 7",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v8.jpg`,
        alt: "gallery blog 1 image 8",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v9.jpg`,
        alt: "gallery blog 1 image 9",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v10.jpg`,
        alt: "gallery blog 1 image 10",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v11.jpg`,
        alt: "gallery blog 1 image 11",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v12.jpg`,
        alt: "gallery blog 1 image 12",
      },
    ],
  },
  {
    title: {
      en: "Integration june",
      de: "Integration Juni",
      pl: "Integracja czerwiec",
    },
    subtitle: "2023",
    images: [
      {
        url: `${imageBasePath}czerwiec-23/6v1.jpg`,
        alt: "gallery blog 2 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v2.jpeg`,
        alt: "gallery blog 2 image 2",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v3.jpg`,
        alt: "gallery blog 2 image 3",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v4.jpg`,
        alt: "gallery blog 2 image 4",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v5.jpg`,
        alt: "gallery blog 2 image 5",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v6.jpg`,
        alt: "gallery blog 2 image 6",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v7.jpg`,
        alt: "gallery blog 2 image 7",
      },
    ],
  },
];

export { blogConfig };
export type { BlogItem };
