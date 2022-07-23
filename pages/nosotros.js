import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout="responsive" width={400} height={200} src="/img/mate01.jpg" alt="imagen nosotros"/>
          <div>
            <p>
              Somos un emprendimiento familiar, orientado a la construcción.
              Atendido por sus dueños, porque nos gusta conocerte. Más de una
              década avalan muestro compromiso y empeño, para que CONSTRUYAS TUS
              SUEÑOS.
            </p>
            <p>
              En Corralón Sánchez, no solo encontrarás información relevante
              para tus proyectos, si no también, que te ayudaremos a gestionar,
              la mejor cotización, que se adapte a tus necesidades y requisitos.
              Precio, Calidad y Garantía. Todo lo que buscas, en un solo lugar.
              Con servicio de logística y entrega, de nuestra casa, a la tuya.
              Si se trata de confianza, es Corralón Sánchez.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
