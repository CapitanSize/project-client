import React from 'react';
import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {POST_ROUTE} from "../utils/consts";

const PostItem = ({post}) => {
    const navigate = useNavigate()
    return (
        <Card style={{cursor: 'pointer'}} className={"mt-3"} onClick={() => navigate(POST_ROUTE + '/' + post.id)}>
            <Card.Header><h2 style={{textAlign: 'center'}}>{post.title}</h2></Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {post.content}
                    </p>
                    <footer className="blockquote-footer d-flex justify-content-between">
                        Автор - <cite title="Source Title">{post.author}</cite>
                        <div className={"m-lg-auto"}> Рейтинг -
                            {post.rating}
                        </div>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default PostItem;