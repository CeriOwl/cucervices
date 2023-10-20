import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";
import axios from "axios";
import Cookies from "js-cookie";
import { recargarPagina, salir, mapeo_s, verificador } from "../modulos/Funciones";

function Services() {
  const verificado = Cookies.get("verificado");
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const handleInput = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
  };
  useEffect(() => {
    const authToken = Cookies.get("authToken");
    if (authToken) {
      axios
        .get("http://localhost:8081/home-ser", {
          params: {
            consulta: data,
          },
        })
        .then((response) => {
          const data = response.data;
          setResult(data);
        })
        .catch((error) => {
          console.error("No se recibieron los datos: ", error);
        });
    } else {
      alert("No has iniciado sesion");
      window.location.assign("/");
    }
  }, [data]);

  function irVentas() {
    navigate("/home-ventas");
  }
  function irCliente() {
    navigate("/cliente");
  }

  return (
    <div className="big-box">
      <div className="topnav">
        <ul className="barra_sup">
          <button onClick={irCliente}>Mi cuenta</button>
          {verificador(verificado)}
        </ul>
      </div>
      <div className="elementos">
        <div className="categoria">
          <ul>
            <li>
              <button className="lateral" onClick={irVentas}>
                Ventas
              </button>
            </li>
            <li>
              <button className="lateral" onClick={recargarPagina}>
                Servicios
              </button>
            </li>
            <li>
              <button className="lateral">Contactos</button>
            </li>
          </ul>
          <button onClick={salir} className="btn_salir">
            SALIR DE SESION
          </button>
        </div>
        <div className="resultados">
          <input
            onChange={handleInput}
            type="text"
            id="searchInput"
            placeholder="Buscar..."
          />
          {mapeo_s(result)}
        </div>
      </div>
    </div>
  );
}

export default Services;
