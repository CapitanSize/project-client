import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, ListGroup} from "react-bootstrap";


const TypeBar = observer(() => {
    const {post} = useContext(Context)
    return (
        <div>
            <ListGroup style={{width: '200px'}}>
                {post.types.map(type =>
            <ListGroup.Item
                className={"d-flex justify-content-center"}
                style={{cursor: 'pointer'}}
                active={type.id === post.selectedType.id}
                onClick={() => post.setSelectedType(type)}
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>
            )}
                <Button className={"mt-3"} style={{marginRight: '3rem', marginLeft: '3rem'}} onClick={() => post.setSelectedType('')}>Все темы</Button>
            </ListGroup>
        </div>
    );
});

export default TypeBar;
