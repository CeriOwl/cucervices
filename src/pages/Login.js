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
    contra: ""
  });

  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleInput = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
  };

  const CheckUserDB = require("../firebase/CheckUserDB")

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(data.usuario.length > 0 && data.contra.length > 0) {
      let existence = await CheckUserDB.CheckUserDB(data.usuario[0], data.contra[0])
      if(existence) {
        console.log("Redirection")  
      }
    }else {
      console.log("NO Enviar")
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
