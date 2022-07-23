import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers";
import styles from "../../styles/Entrada.module.css";

const EntradaDestacado = ({ entrada }) => {
  const { contenido, imagen, published_at, titulo } = entrada[0];

  return (
    <Layout pagina={titulo}>
      <main className="contenedor">
        <h2 className="heading">{titulo}</h2>
        <article className={styles.entrada}>
          <Image
            priority="true"
            layout="responsive"
            width={800}
            height={600}
            src={imagen.url}
            alt={`imagen entrada ${titulo}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getServerSideProps({ params: { url } }) {
  const url2 = `${process.env.API_URL}/destacados?url=${url}`;
  const respuesta = await fetch(url2);
  const entrada = await respuesta.json();

  return {
    props: {
      entrada,
    },
  };
}

// export async function getStaticPaths() {
//   const url = 'http://localhost:1337/destacados'
//   const respuesta = await fetch(url)
//   const entradas = await respuesta.json()

//   const paths = entradas.map(entrada => ({
//     params: { id: entrada.id}
//   }))
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({params: {id}}) {

//   const url = `http://localhost:1337/destacados/${id}`;
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();

//   return {
//     props: {
//       entrada
//     }
//   }
// }

export default EntradaDestacado;
