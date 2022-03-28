import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CreatePost from "../components/modals/CreatePost";
import {getPosts} from "../http/postApi";
import PostItem from "../components/PostItem";

const UserPage = () => {
    const [postVisible, setPostVisible] = useState(false)
    const {id} = JSON.parse(localStorage.getItem("authUser"))
    const [posts, setPosts] = useState([])
    const buttonStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3rem',
        display: 'block'
    }

    useEffect(() => {

        getPosts(null, id).then(data =>
            setPosts(data)
        )
    }, [])

    return (
        <Container className={"d-flex flex-column"} style={{justifyContent: "center"}}>
            <Row style={{justifyContent: "center"}}>
            <Col>
            <Button variant={"primary"} style={buttonStyle} onClick={() => setPostVisible(true)}>
                Создать пост
            </Button>
            <CreatePost show={postVisible} onHide={() => setPostVisible(false)}/>
                {posts.map((post) =>
                    <PostItem key={post.id} post={post}/>
                )}
            </Col>
            </Row>
        </Container>
    );
};

export default UserPage;