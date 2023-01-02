import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";

const Carrito = ({ carrito, updateAmount, deleteGuitar }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      carrito?.reduce(
        (total, product) => total + product.amount * product.price,
        0
      )
    );
  }, [carrito]);

  return (
    <Layout title="Carrito de Compras">
      <main className="contenedor contenido-principal">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>

            {carrito.length === 0
              ? "Carrito vacío"
              : carrito.map((guitar) => (
                  <div key={guitar.id} className={styles.producto}>
                    <div>
                      <Image
                        src={guitar.image}
                        width={250}
                        height={250}
                        alt={guitar.name}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{guitar.name}</p>
                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select
                          className={styles.select}
                          onChange={(e) =>
                            updateAmount({
                              id: guitar.id,
                              amount: e.target.value,
                            })
                          }
                          value={guitar.amount}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={styles.precio}>
                        $<span>{guitar.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $<span>{guitar.price * guitar.amount}</span>
                      </p>
                    </div>
                    <button
                      className={styles.eliminar}
                      type="button"
                      onClick={() => deleteGuitar(guitar.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
