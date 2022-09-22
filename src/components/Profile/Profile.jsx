
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostContainer data={props.store} />
        </div>
    )
}

export default Profile;