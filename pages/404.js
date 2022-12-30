import Link from "next/link";
import Layout from "../components/layout";

const Page404 = () => {
  return (
    <Layout title="Página no encontrada">
      <main className="contenido-principal">
        <div className="error-container">
          <p className="error-text">
            <span className="error-status">404</span> Página No Encontrada
          </p>
          <Link href="/">Volver a la página principal</Link>
        </div>
      </main>
    </Layout>
  );
};

export default Page404;
