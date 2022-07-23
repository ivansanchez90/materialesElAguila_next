import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";

const Carrito = ({ carrito,  actualizarCantidad, eliminarProducto}) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    },[carrito])


  return (
    <Layout pagina={"Carrito de Compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.contenido}`}>
        <div className={styles.carrito}>
            <h2>Artículos</h2>
          {carrito.length == 0
            ? "Carrito Vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <Image
                    layout="responsive"
                    width={250}
                    height={400}
                    src={producto.imagen}
                    alt={producto.nombre}
                  />

                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      
                      <label>Cantidad:</label>
                      <input
                        type="number"
                        value={producto.cantidad}
                        className={styles.select}
                        onChange={e => actualizarCantidad({
                            cantidad: e.target.value,
                            id: producto.id
                        })}
                      />
                    </div>
                    <p className={styles.precio}>
                      $<span>{producto.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                  <button
                  type="button"
                  className={styles.eliminar}
                  onClick={() => eliminarProducto(producto.id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.resumen}>

            {total > 0 ? (
                <>
                <h3>Resumen del Pedido</h3>
                <p>Resumen del Pedido</p>
                <p>Total a pagar: ${total}</p>
                </>
            ) : 
            <p>No hay productos en el carrito</p>}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
