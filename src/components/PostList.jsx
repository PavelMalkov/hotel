import React from 'react';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import '../styles/styles.css'
import Post from './Post';

const PostList = function ({posts, title, remove}) {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup className={'item'}>
            
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='item'
                    >
                    <Post remove={remove} number={index + 1} post = {post} key={post.id}/>
                    </CSSTransition> 
                )}
            </TransitionGroup>
        </div>
    );
}

export default PostList;