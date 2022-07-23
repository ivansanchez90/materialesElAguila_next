import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Producto.module.css";

const Producto = ({ producto }) => {
  const { descripcion, imagen, nombre, precio, url } = producto;

  return (
    <div className={styles.contenido}>
      <h3>{nombre}</h3>

      <Image
        layout="responsive"
        width={150}
        height={200}
        src={imagen[0].url}
        alt={`Imagen Producto ${nombre}`}
      />

      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>${precio}</p>
      <Link href={`/productos/${url}`}>
        <a className={styles.enlace}>Ver Producto</a>
      </Link>
    </div>
  );
};

export default Producto;
