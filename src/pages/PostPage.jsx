import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import axios from 'axios'
import '../styles/styles.css'

const PostPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setCommemts] = useState([])
    const [fetchPostById, isLoading, errorPost] = useFetching(async () => {
        const response = await PostService.getByPostsId(params.id)
        setPost(response.data);
    })

    const [fetchCommentById, isCommentLoading, errorCommemt] = useFetching(async () => {
        const response = await PostService.getByCommentsId(params.id)
        setCommemts(response.data);
    })

    useEffect(() => {
        fetchPostById()
        fetchCommentById()
    }, [])

    return (
        <div style={{width: '800px'}}>

            {isLoading
                ? <h1>Загрузка</h1>
                :
                <>
                    <strong>{post.id}. {post.title}</strong>
                    <div>
                        <p>{post.body}</p>
                    </div>
                </>
            }
            <h1>Комментарии</h1>
            {isCommentLoading
                ? <h1>Загрузка</h1>
                : 
                comments.map((item) => 
                <div key={item.id}> 
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                    {item.email}
                </div>)
            }
        </div>
    )
}

export default PostPage;