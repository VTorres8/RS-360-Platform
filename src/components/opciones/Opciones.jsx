import './opciones.css';

export const Opciones = ({url,nombre}) => {
    return (
      <div className="rs-container">
        <a href={url} target="_blank">
            <button className="boton">{nombre}</button>
        </a>
      </div>
    )
}