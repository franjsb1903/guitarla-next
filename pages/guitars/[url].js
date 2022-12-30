import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../styles/guitarras.module.css";

const Product = ({ guitar }) => {
  const [cantidad, setCantidad] = useState(0);
  const { name, description, image, price } = guitar ?? {};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad no válida");
      return;
    }
  };

  return (
    <Layout title={`Guitarra ${name}`}>
      <main className={`contenido-principal ${styles.guitarra}`}>
        <Image
          src={image?.data.attributes.url}
          alt={`Guitar ${name}`}
          width={600}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${price}</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              id="cantidad"
              onChange={(e) => setCantidad(+e.target.value)}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Añadir al carrito" />
          </form>
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await response.json();

  const paths = data?.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await response.json();

  return {
    props: { guitar: guitar[0].attributes },
  };
}

export default Product;
