import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import React, { useState } from "react";
import axios from "axios";
import { DataLog } from "../modulos/DataLog";
import Cookies from 'js-cookie';

export const Login = () => {

  sessionStorage.clear();
  const [data, setData] = useState({
    usuario: "",
    contra: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleInput = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    setError(DataLog(data));
    if (error.usuario === "" && error.contra === "") {
      axios
        .post("/login", data)
        .then((res) => {
          /*En caso de que los datos no regresen un error, nos dara acceso a la siguiente pestaña 
          que es la de "Ventas" y su direccion es /home-ventas*/
          if (res.data !== "Error") {
            Cookies.set('userData', JSON.stringify(data.usuario));
            Cookies.set('verificado', JSON.stringify(res.data));
            const authToken = "valido";
            const cookieExpirationDays = 1;
            const cookieValue = `${encodeURIComponent(
              "authToken"
            )}=${encodeURIComponent(authToken)}; max-age=${cookieExpirationDays * 24 * 60 * 60
              }`;
            document.cookie = cookieValue;
            navigate("/home-ventas");
          } else {
            alert("Los datos son incorrectos");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="box">
          <h1>CUCERVICES</h1>
          <div className="params">
            <label>Usuario</label>
            <input
              placeholder="Ingresa tu usuario"
              id="txt_usuario"
              name="usuario"
              onChange={handleInput}
              required
            ></input>
            <span>{error.usuario && <span>{error.usuario}</span>}</span>
          </div>
          <div className="params">
            <label>Contraseña</label>
            <input
              placeholder="Ingresa tu contraseña"
              id="txt_contra"
              name="contra"
              type="password"
              onChange={handleInput}
            ></input>
            <span>{error.contra && <span>{error.contra}</span>}</span>
          </div>
          <button type="submit" className="btn1">
            Iniciar Sesion
          </button>
          <Link to={"/reg"} className="btn2">
            Crear Cuenta
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
