
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
// debugger;
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer data={props.store} />
        </div>
    )
}

export default Profile;