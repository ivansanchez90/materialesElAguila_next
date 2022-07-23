import Entrada from "./Entrada";
import styles from "../styles/Destacado.module.css"

const ListadoDestacado = ({entradas}) => {
  return (
    <>
      <h2 className="heading">Destacados</h2>
      <div className={styles.destacado}>
        {entradas.map((entrada) => (
          <Entrada key={entrada.id} entrada={entrada} />
        ))}
      </div>
    </>
  );
};

export default ListadoDestacado;
