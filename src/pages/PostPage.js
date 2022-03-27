import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {getOnePost} from "../http/postApi";

const PostPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState({title: ''})

    useEffect(() => {
        getOnePost(id).then(data => setPost(data))
    }, [])

    return (
        <Col className={"d-flex justify-content-center align-items-center"}>
            <Card className={"mt-3"}>
                <Card.Header><h2 style={{textAlign: 'center'}}>{post.title}</h2></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {post.content}
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            Автор - <cite title="Source Title"></cite> {post.rating}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PostPage;