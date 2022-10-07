import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {Field, reduxForm } from 'redux-form';

const MyPost = (props) => {
   
    let postsElements = props.postsPage.posts.map(( post , index) => <Post message={post.posts} key={index} likes={post.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return (
     
        <div className={s.postsBlock}>
            <h3>My posts</h3>
          <AddNewPostReduxForm onSubmit={onAddPost}/>
          <div className={s.posts}>
              {postsElements}
          </div>
        </div>
    )
} 

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
                <Field name={"newPostBody"} component={"textarea"} placeholder="New text" />
                <button>Add post</button>
           </form>
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPost;