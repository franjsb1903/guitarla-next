import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";

const Carrito = () => {
  return (
    <Layout title="Carrito de Compras">
      <main className="contenedor contenido-principal">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar:</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;