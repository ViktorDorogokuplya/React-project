import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} 
                        isOwner={props.isOwner} 
                        status={props.status} 
                        updateStatus={props.updateStatus} 
                        savePhoto={props.savePhoto} 
                        saveProfile={props.saveProfile}/>
            <MyPostContainer data={props.store} />
        </div>
    )
}

export default Profile;