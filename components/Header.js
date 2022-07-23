import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router"
import styles from "../styles/Header.module.css";

const Header = ({producto}) => {

  const router = useRouter()
  

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image
                width={450}
                height={140}
                src="/img/logoLetrasBlancas.png"
                alt="imagen logo"
              />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/destacados">Destacados</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image layout="fixed" width={30}
                height={25} src="/img/carrito.png" alt="Imagen carrito"  />
              </a>
            </Link>
          </nav>
        </div>
        {producto && (
          <div className={styles.modelo}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p className={styles.precio}>${producto.precio}</p>
            <Link href={`/productos/${producto.url}`}>
            <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>
          {router.pathname === '/' && (
            <div className={styles.aguila}>
              <Image layout="fixed" width={600} height={650}  src="/img/aguila.png" alt="imagen header aguila" />
            </div>
          )}
    </header>
  );
};

export default Header;
