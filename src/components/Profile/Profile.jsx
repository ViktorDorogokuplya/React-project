import MyPost from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import s from './Profile.module.css';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPost data={props.data} dispatch = {props.dispatch}/>
        </div>
    )
}

export default Profile;