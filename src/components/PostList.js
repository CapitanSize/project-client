import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PostItem from "./PostItem";

const PostList = observer(() => {
    const {post} = useContext(Context)
    return (
        <Row>
            {post.posts.map((post) =>
                <PostItem key={post.id} post={post}/>
            )}
        </Row>
    );
});

export default PostList;