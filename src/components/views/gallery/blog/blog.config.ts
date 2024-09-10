import {Locale} from "@customTypes/pages";

type BlogItem = {
    title: {
        [key in Locale]: string;
    };
    images: Array<{
        url: string;
        alt: string;
    }>
}

const imageBasePath = "/assets/images/gallery/"

const blogConfig: BlogItem[] = [
    {
        title: {
            en: "en title 1",
            de: "de title 1",
            pl: "pl title 1",
        },
        images: [
            {
                url: `${imageBasePath}czerwiec-22/8v1.jpg`,
                alt: "gallery blog 1 image 1"
            },
            {
                url: `${imageBasePath}czerwiec-22/8v2.jpeg`,
                alt: "gallery blog 1 image 2"
            },
            {
                url: `${imageBasePath}czerwiec-22/8v4.jpeg`,
                alt: "gallery blog 1 image 4"
            },
            {
                url: `${imageBasePath}czerwiec-22/8v5.jpg`,
                alt: "gallery blog 1 image 5"
            },
            {
                url: `${imageBasePath}czerwiec-22/8v6.jpeg`,
                alt: "gallery blog 1 image 6"
            },
              {
                url: `${imageBasePath}czerwiec-22/8v7.jpeg`,
                alt: "gallery blog 1 image 7"
            },

        ]
    },
    {
        title: {
            en: "en title 2",
            de: "de title 2",
            pl: "pl title 3",
        },
        images: [
            {
                url: `${imageBasePath}czerwiec-23/6v1.jpg`,
                alt: "gallery blog 2 image 1"
            },
            {
                url: `${imageBasePath}czerwiec-23/6v2.jpeg`,
                alt: "gallery blog 2 image 2"
            },
            {
                url: `${imageBasePath}czerwiec-23/6v3.jpg`,
                alt: "gallery blog 2 image 3"
            },
            {
                url: `${imageBasePath}czerwiec-23/6v4.jpg`,
                alt: "gallery blog 2 image 4"
            },
            {
                url: `${imageBasePath}czerwiec-23/6v5.jpg`,
                alt: "gallery blog 2 image 5"
            },
              {
                url: `${imageBasePath}czerwiec-23/6v6.jpg`,
                alt: "gallery blog 2 image 6"
            },
              {
                url: `${imageBasePath}czerwiec-23/6v7.jpg`,
                alt: "gallery blog 2 image 7"
            },

        ]
    },

]

export {blogConfig}
export type {BlogItem}