import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, USER_ROUTE} from "../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    let {userId} = 0
    if (user.isAuth) {
        const {id} = JSON.parse(localStorage.getItem('authUser') || 0)
        userId = id
    }


    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
        navigate(LOGIN_ROUTE)
    }


    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={'/'}>Посты &Со</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-2" style={{color: 'white'}}>
                            <Button variant={'outline-light'} className={"m-2"} onClick={() => navigate(USER_ROUTE + '/' + userId)}>Моя страница</Button>
                            <Button variant={'outline-light'} className={"m-2"} onClick={() => navigate(ADMIN_ROUTE)}>Администратор</Button>
                            <Button variant={'outline-light'} className={"m-2"} onClick={() => logOut()}>Выйти</Button>
                        </Nav>
                        :
                            <Nav className="ml-auto" style={{color: 'white'}}>
                                <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                            </Nav>
                    }
                </Container>
            </Navbar>
        </div>
    );
});

export default NavBar;