import Bloque from "../components/Bloque";
import ListadoDestacado from "../components/ListadoDestacado";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

export default function Home({ productos, bloque, destacados }) {
  return (
    <div>
      <Layout pagina="Inicio" producto={productos[1]}>
        <main className="contenedor">
          <h1 className="heading">Nuestros Productos</h1>
          <Listado productos={productos} />
        </main>
        <Bloque bloque={bloque} />
        <section className="contenedor">
          <ListadoDestacado entradas={destacados} />
        </section>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const urlProductos = `${process.env.API_URL}/productos`;
  const urlBloque = `${process.env.API_URL}/bloques`;
  const urlDestacados = `${process.env.API_URL}/destacados?_limit=3&_sort=createdAt:desc`;

  const [resProductos, resBloque, resDestacados] = await Promise.all([
    fetch(urlProductos),
    fetch(urlBloque),
    fetch(urlDestacados),
  ]);
  const [productos, bloque, destacados] = await Promise.all([
    resProductos.json(),
    resBloque.json(),
    resDestacados.json(),
  ]);

  return {
    props: {
      productos,
      bloque,
      destacados,
    },
  };
}
