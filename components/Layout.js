import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pagina, producto }) => {
  return (
    <div>
      <Head>
        <title>Materiales El Aguila - {pagina}</title>
        <meta
          name="description"
          content="Sitio Web de Venta de materiales para la contrucción"
        />
       
      </Head>
      <Header 
      producto={producto}
      />
      
      
      {children}


      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  producto: null
}

export default Layout;
