import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import PostList from "../components/PostList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getPosts, getTypes} from "../http/postApi"


const MainPage = observer(() => {
    const {post} = useContext(Context)
    useEffect(() => {
        getTypes().then(data => post.setTypes(data))

    }, [])

    useEffect(() => {
        getPosts(post.selectedType.id, null).then(data =>
            post.setPosts(data)
        )
    }, [post.selectedType])

    return (
        <Container>
            <Row className={"mt-4"}>
                <Col md={2} className={"d-flex"}>
                <TypeBar/>
                </Col>
                <Col style={{width: '1000px'}}>
                    <PostList/>
                </Col>
            </Row>
        </Container>
    );
});

export default MainPage;