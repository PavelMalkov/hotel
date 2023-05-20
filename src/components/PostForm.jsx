import React from "react";
import MyButton from './UI/button/MyButton';
import { useState } from "react";
import MyInput from './UI/input/MyInput';

const PostForm = ({create, btnName}) =>{

    const [post, setPost] = useState({title: '', body: ''});


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    

    return (
        <div>
            <form > 
                <MyInput 
                    value = {post.title}
                    type = 'text'
                    placeholder = {"Название поста"}
                    onChange={event => setPost( {...post , title: event.target.value})}
                />
                <MyInput 
                    value = {post.body}
                    type = 'text'
                    placeholder = {"Описание поста"}
                    onChange={event => setPost( {...post , body: event.target.value})}
                /> 
                <div style={{display: 'flex', justifyContent: 'center',width: '100%'}}>
                    <MyButton onClick={addNewPost}>
                        {btnName}
                    </MyButton>
                </div>                
            </form>
        </div>
    );
};

export default PostForm;