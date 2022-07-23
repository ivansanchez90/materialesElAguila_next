
import Layout from "../components/Layout";
import ListadoDestacado from "../components/ListadoDestacado";

const Destacados = ({ entradas }) => {
  
  return (
    <Layout pagina="Destacados">
      <main className="contenedor">
        <ListadoDestacado 
        entradas={entradas}
        />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/destacados?_sort=createdAt:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas,
    },
  };
}

export default Destacados;
