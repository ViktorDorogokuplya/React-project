// import React from "react";
import { connect } from "react-redux";
import {addNewPostActionCreator, updatePostActionCreator} from '../../../redux/profile-reducer'
import MyPost from "./MyPost";

// const MyPostContainer = (props) => {
//     let state = props.data.store.postsPage;
//     let addPost = () => {
//         props.data.dispatch(addNewPostActionCreator());
//     }

//     let onPostText = (text) => {
//         let action = updatePostActionCreator(text);
//         props.data.dispatch(action);
//     }

//     return <MyPost updatePostText={onPostText} addPost={addPost} state={state} newPostText={state.newPostText} />
// } 

let mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage,
        newPostText: state.postsPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText : (text) => {
            dispatch(updatePostActionCreator(text));
        },
        addPost : () => {
            dispatch(addNewPostActionCreator());
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;