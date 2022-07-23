import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({ productos }) => {
  return (
    <Layout pagina="Tienda Virutal">
      <h1 className="heading">Productos</h1>
      <main className="contenedor">
        <Listado productos={productos} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const urlProductos = `${process.env.API_URL}/productos`;
  const respuesta = await fetch(urlProductos);
  const productos = await respuesta.json();

  return {
    props: {
      productos,
    },
  };
}

export default Tienda;
