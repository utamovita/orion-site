import styles from "./blog.module.scss";
import { blogConfig, BlogItem } from "@components/views/gallery/blog/blog.config";
import { Container, FlexComponent } from "@design-system/layout/utilities";
import Image from "next/image";
import { useRouter } from "next/router";
import { Locale } from "@customTypes/pages";

function Blog() {
  return (
    <div className={styles.wrapper}>
      {blogConfig.map((item, index) => {
        return <BlogSection item={item} key={index} />;
      })}
    </div>
  );
}

type BlogSectionProps = {
  item: BlogItem;
};

function BlogSection(props: BlogSectionProps) {
  const { title, images } = props.item;
  const { locale } = useRouter();

  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <h2>{title[locale as Locale]}</h2>
        <FlexComponent>
          {images.slice(0, 5).map((image) => (
            <div className={styles.blogItemImage} key={image.alt}>
              <Image
                src={image.url}
                alt={image.alt}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </FlexComponent>
      </Container>
    </div>
  );
}

export { Blog };
