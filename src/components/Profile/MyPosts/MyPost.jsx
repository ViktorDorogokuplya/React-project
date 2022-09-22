import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
   
    let postsElements = props.postsPage.posts.map(( post , index) => <Post message={post.posts} key={index} likes={post.likesCount}/>)

    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostText = () => {
        let text = newPost.current.value;
        props.updatePostText(text)
    }

    return (
     
        <div className={s.postsBlock}>
            <h3>My posts</h3>
          <div>
              <div>
                  <textarea onChange={onPostText} ref={newPost} value={props.newPostText}></textarea>
              </div>
              <div>
                  <button onClick={onAddPost}>Add post</button>
              </div>
          </div>
          <div className={s.posts}>
              {postsElements}
          </div>
        </div>
    )
} 

export default MyPost;