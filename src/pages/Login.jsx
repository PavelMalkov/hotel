import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";
import { useContext } from "react";

import { AlineCentre, Form } from "../styles/Style";

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    };

    return (
        <AlineCentre>
            <Form onSubmit={login}>
                <h1>Simple Hotel Check</h1>
                <div>
                    <p>Логин</p>
                    <MyInput type="text" placeholder="Введите логин" />
                </div>
                <div>
                    <p>Пароль</p>
                    <MyInput type="password" placeholder="Введите пароль" />
                </div>
                <MyButton>Войти</MyButton>
            </Form>
        </AlineCentre>
    );
};

export default Login;
