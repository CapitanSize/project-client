import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const AuthPage = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nick, setNick] = useState('')

    const enter = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password, nick)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight -54}}
        >
            <Card style={{width: 600}} className={"p-5"}>
                <h2 className={"m-auto"}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className={"d-flex flex-column"}>
                    {isLogin ?
                        <div>
                            <Form.Control className={"mt-3"} placeholder={"Введите email..."} value={email} onChange={e => setEmail(e.target.value)}/>
                            <Form.Control className={"mt-3"} placeholder={"Введите пароль..."} value={password} onChange={e => setPassword(e.target.value)} type={"password"}/>
                        </div>
                        :
                        <div>
                            <Form.Control className={"mt-3"} placeholder={"Введите nickname..."} value={nick} onChange={e => setNick(e.target.value)}/>
                            <Form.Control className={"mt-3"} placeholder={"Введите email..."} value={email} onChange={e => setEmail(e.target.value)}/>
                            <Form.Control className={"mt-3"} placeholder={"Введите пароль..."} value={password} onChange={e => setPassword(e.target.value)} type={"password"}/>
                        </div>
                    }

                    <Row className={"d-flex justify-content-between mt-3 pl-3 pr-3"}>
                        {isLogin ?
                            <div>
                                Впервые у нас? <NavLink to={REGISTRATION_ROUTE}>Создай аккаунт!</NavLink>
                            </div>
                            :
                            <div>
                                Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"}
                                onClick={enter}
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Row>

                </Form>

            </Card>
        </Container>
    );
});

export default AuthPage;