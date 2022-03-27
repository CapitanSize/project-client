import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {createPost, getTypes} from "../../http/postApi";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const CreatePost = observer(({show, onHide}) => {
    const {post} = useContext(Context)
    console.log(post)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [rating, setRating] = useState(0)
    const {nick} = JSON.parse(localStorage.getItem('authUser'))
    const {id} = JSON.parse(localStorage.getItem('authUser'))

    useEffect(() => {
        getTypes().then(data => post.setTypes(data))
    }, [])

    const addPost = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('rating', `${rating}`)
        formData.append('author', nick)
        formData.append('userId', id)
        formData.append('typeId', post.selectedType.id)
        createPost(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый пост
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>
                            {post.selectedType.name || 'Выберите тему'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {post.types.map(type =>
                                <Dropdown.Item onClick={() => post.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className={"mt-3"} value={title} onChange={e => setTitle(e.target.value)}  placeholder={"Введите название поста"}/>
                    <Form.Control className={"mt-3"}  value={content} onChange={e => setContent(e.target.value)} placeholder={ "Введите текст поста"}/>
                    <Form.Control className={"mt-3"}  value={rating} onChange={e => setRating(e.target.value)} placeholder={"Введите ваш рейтинг"} type={"number"}/>
                    <h2>{nick}</h2>
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addPost}>Принять</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePost;