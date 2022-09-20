import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {addNewPostActionCreator, updatePostActionCreator} from '../../../redux/profile-reducer'

const MyPost = (props) => {
    
    let postsElements = props.data.posts.map(post => <Post message={post.posts} likes={post.likesCount}/>)

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addNewPostActionCreator());
    }

    let onPostText = () => {
        let text = newPost.current.value;
        let action = updatePostActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
          <div>
              <div>
                  <textarea onChange={onPostText} ref={newPost} value={props.data.newPostText}></textarea>
              </div>
              <div>
                  <button onClick={addPost}>Add post</button>
              </div>
          </div>
          <div className={s.posts}>
              {postsElements}
          </div>
        </div>
    )
} 

export default MyPost;