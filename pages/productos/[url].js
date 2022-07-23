import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Producto.module.css";

const Material = ({ material, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const { descripcion, imagen, nombre, precio, id } = material[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad no válida");
      return;
    }

    // Agregarlo al Carrito
    const productoSeleccionado = {
      id,
      imagen: imagen[0].url,
      nombre,
      precio,
      cantidad,
    };

    agregarCarrito(productoSeleccionado);
  };

  return (
    <Layout pagina={nombre}>
      <div className={styles.producto}>
        <Image
          layout="responsive"
          width={150}
          height={200}
          src={imagen[0].url}
          alt={`Imagen Producto ${nombre}`}
        />
        <div className={styles.contenido2}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>Cantidad:</label>
            <input type="number" value={cantidad} className={styles.cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value))}/>
            {/* <select
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select> */}
            <input type="submit" value="Agregar al Carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlProducto = `${process.env.API_URL}/productos?url=${url}`;
  const respuesta = await fetch(urlProducto);
  const material = await respuesta.json();

  console.log(material);
  return {
    props: {
      material,
    },
  };
}

export default Material;
