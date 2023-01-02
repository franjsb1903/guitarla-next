import { useState, useEffect, use } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];
  const [carrito, setCarrito] = useState(carritoLS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

    return () => setReady(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.amount += guitarra.amount;
        }
        return guitarraState;
      });
      setCarrito([...carritoActualizado]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      setCarrito([...carrito, guitarra]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };

  const deleteGuitar = (id) => {
    setCarrito(carrito.filter((producto) => producto.id != id));
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const updateAmount = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.amount = parseInt(guitarra.amount);
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return ready ? (
    <Component
      {...pageProps}
      carrito={carrito}
      addToCarrito={addToCarrito}
      deleteGuitar={deleteGuitar}
      updateAmount={updateAmount}
    />
  ) : null;
}
