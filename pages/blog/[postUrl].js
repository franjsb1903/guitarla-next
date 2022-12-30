import Image from "next/image";
import Layout from "../../components/layout";
import { formatDate } from "../../utils/helpers";
import styles from "../../styles/blog.module.css";

const PostUrl = ({ post }) => {
  const { content, image, title, url, publishedAt } = post;

  return (
    <Layout>
      <article className={`${styles.card} ${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={image.data.attributes.url}
          alt={`Blog ${title}`}
          width={1000}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{title}</h3>
          <p className={styles.fecha}>{formatDate(publishedAt)}</p>
          <p className={styles.texto}>{content}</p>
        </div>
      </article>
    </Layout>
  );
};

export async function getServerSideProps({ query: { postUrl } }) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${postUrl}&populate=image`
  );

  const { data: post } = await response.json();

  return { props: { post: post[0].attributes } };
}

export default PostUrl;
