import Image from "next/image";
import styles from "../styles/nosotros.module.css";
import Layout from "../components/layout";

const Nosotros = () => {
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <main className="contenedor contenido-principal">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Nosotros"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Suspendisse potenti. Donec ex risus, lacinia vitae fermentum
              pellentesque, volutpat nec sem. Cras eu odio eu magna sagittis
              efficitur. Maecenas iaculis tellus sagittis tempor ullamcorper.
              Morbi et quam rhoncus, mollis eros vitae, interdum eros. Ut eget
              lectus viverra metus posuere ultricies eget a metus. Cras bibendum
              dolor varius tristique lacinia. Phasellus non malesuada lectus.
              Aliquam quis nibh sed ex venenatis ornare et quis eros. Fusce
              fermentum condimentum mollis.
            </p>
            <p>
              Suspendisse potenti. Donec ex risus, lacinia vitae fermentum
              pellentesque, volutpat nec sem. Cras eu odio eu magna sagittis
              efficitur. Maecenas iaculis tellus sagittis tempor ullamcorper.
              Morbi et quam rhoncus, mollis eros vitae, interdum eros. Ut eget
              lectus viverra metus posuere ultricies eget a metus. Cras bibendum
              dolor varius tristique lacinia. Phasellus non malesuada lectus.
              Aliquam quis nibh sed ex venenatis ornare et quis eros. Fusce
              fermentum condimentum mollis.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
