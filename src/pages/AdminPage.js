import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";

const AdminPage = () => {
    const [typeVisible, setTypeVisible] = useState(false)

    return (
        <Container className={"d-flex flex-column"}>
            <Button variant={"outline-primary"} className={"mt-3"} onClick={() => setTypeVisible(true)}>
                Добавить тему
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default AdminPage;