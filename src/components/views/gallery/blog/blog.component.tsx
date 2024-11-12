import styles from "./blog.module.scss";
import {blogConfig, BlogItem} from "@components/views/gallery/blog/blog.config";
import { Container } from "@design-system/layout/utilities";
import Image from "next/image";
import {useRouter} from "next/router";
import {Locale} from "@customTypes/pages";

function Blog() {
    return (
        <div className={styles.wrapper}>
            {blogConfig.map((item, index) => {
                return <BlogSection item={item} key={index}/>;
            })}
        </div>
    );
}

type BlogSectionProps = {
    item: BlogItem;
};

function BlogSection(props: BlogSectionProps) {
    const {title, images} = props.item;
    const {locale} = useRouter();

    return (
        <div className={styles.sectionWrapper}>
            <Container className={styles.gridWrapper}>
                <div className={styles.gridItem}>{title[locale as Locale]}</div>
                {images.slice(0, 4).map((image) => (
                    <div className={styles.gridItem} key={image.alt}>
                          <div className={styles.imageWrapper}>
                              <Image
                                  src={image.url}
                                  alt={image.alt}
                                  fill
                                  style={{
                                      objectFit: "cover",
                                  }}
                              />
                          </div>
                    </div>
                ))}
            </Container>
        </div>
    );
}

export {Blog};
