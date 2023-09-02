import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Item.css";
import Cookies from "js-cookie";
import axios from "axios";
import { muestra, salir } from "./Funciones";

function Item2() {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = Cookies.get("authToken");
    if (authToken) {
      axios
        .get("/home-ser/servicios", {
          params: {
            consulta: id,
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
  }, [id]);

  function irSer() {
    navigate("/home-ser");
  }
  function irCliente() {
    navigate("/cliente");
  }

  function irVentas() {
    navigate("/home-ventas");
  }

  return (
    <div className="big-box">
      <div className="topnav">
        <ul className="barra_sup">
          <button onClick={irCliente}>Mi cuenta</button>
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
              <button className="lateral" onClick={irSer}>
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
        <div className="resultados">{muestra(result)}</div>
      </div>
    </div>
  );
}

export default Item2;
