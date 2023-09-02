import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import "../styles/Funciones.css";
import basic from "../images/basic.png";

export function URL_img(buffer) {
  //console.log(buffer)
  if (buffer !== null && buffer!==undefined ) {
    var arrayBufferView = new Uint8Array(buffer.data);
    var blob = new Blob([arrayBufferView], { type: "image/png" });
    var imageUrl = URL.createObjectURL(blob);
    return <img alt="perfil" src={imageUrl} width="300px" height="180px"></img>;
  }
  return <img alt="perfil" src={basic} width="250px"></img>;
}

export function recargarPagina() {
  window.location.reload(); // Recargar la página actual
}

export function salir() {
  window.location.assign("/");
  Cookies.remove("userData");
  sessionStorage.clear();
}

export function muestra(result) {
  return (
    <div className="amplio">
      {result.map((item) => (
        <div key={item.titulo} className="valores">
          {URL_img(item.img)}
          <div className="text_info">
            <h5>{item.usuario}</h5>
            <h5>{item.titulo}</h5>
            <h5>{item.descripcion}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export function mapeo_v(result) {
  return (
    <div className="filas">
      {result.map((item) => (
        <Link
          key={item.titulo}
          className="item"
          to={`/home-ventas/producto/${item.id}`}
        >
          {URL_img(item.img)}
          <div className="text_ventas">
            <div className="txt_generar">
              <h5>{item.titulo}</h5>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function mapeo_s(result) {
  return (
    <div className="filas">
      {result.map((item) => (
        <Link
          key={item.titulo}
          className="item"
          to={`/home-ser/servicios/${item.id}`}
        >
          {URL_img(item.img)}
          <div className="text_ventas">
            <div className="txt_generar">
              <h5>{item.titulo}</h5>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function verificador(valor) {
  if (valor === "0") {
    return <Link to={"/cliente/verificado"}>Deseo Vender</Link>;
  } else if (valor === "1") {
    return (
      <div>
        <Link to={"/cliente/usuario"}>Deseo No Vender</Link>
        <Link to={"/cliente/crear"}>Publicar articulo</Link>
      </div>
    );
  }
}

export function verificar() {
  const usuario = sessionStorage.getItem("user");
  return (
    <div>
      <h2>
        Bienvenido {usuario} para poder vender o prestar servicios, llena el
        siguiente formulario
      </h2>
      <input placeholder="inserta tu numero telefonico" type="number" />
      <input placeholder="inserta tu Linkedin" />
      <div>
        <input type="file" />
        <input type="file" />
      </div>
      <button>Confirmar datos</button>
    </div>
  );
}

export function Articulo() {
  const usuario = sessionStorage.getItem("user");
  return (
    <div className="formulario_crear">
      <h2>{usuario} completa los siguientes campos</h2>
      <h2>Selecciona una opción:</h2>
      <select id="opcionesInput">
        <option value="opcion1">Articulo</option>
        <option value="opcion2">Servicio</option>
      </select>
      <input placeholder="inserta titulo caracterisico" type="number" />
      <input placeholder="inserta la descripcion de tu articulo" />
      <div>
        <input type="file" />
      </div>
      <button>Crear publicacion</button>
    </div>
  );
}
