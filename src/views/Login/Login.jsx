import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './index.scss';

const Login = () => {
  return (
    <section className="Login">
    <Header/>
        <form className="login_form">
            <h1>Acesse com seu login ou cadastre-se!
            </h1>
            <h3>você pode entrar com o seu CPF</h3>

            <div className="login-label">
                <label htmlFor="nome">Digite seu CPF:</label>
                <input type="text" placeholder="Nome completo" id="nome" />
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="************" />
            </div>
            <button className="enviar" type="submit">
                <Link to={"/home"}>Entrar</Link> 
            </button>
        </form>
    </section>
  );
};

export default Login;