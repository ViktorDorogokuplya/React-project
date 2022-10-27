import React, {useState} from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatusHook';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataFormReduxForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

   const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
   } 

    return (
        <div>
            {/* <div>
                <img src='https://www.quasa.io/storage/photos/%D0%A4%D0%BE%D1%82%D0%BE%2014/HHHL%2012.jpeg'
                     alt="background"></img>
            </div> */}
            <div className={s.desBlock}>
                <img src={profile.photos.large || userPhoto} alt='#' />

                {isOwner && <div><input type={'file'} onChange={onMainPhotoSelected} /></div>}

                { editMode ? <ProfileDataFormReduxForm profile={profile} onSubmit={onSubmit} /> 
                : <ProfileData profile={profile} isOwner={isOwner} toEditMode={() => { setEditMode(true) }}/>}
                {/* <p>{profile.aboutMe}</p> */}
            </div>
            <div className=""><ProfileStatus status={status} updateStatus={updateStatus} /></div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return <div className=''>
                <div className="">
                    <b>Full name : </b> {profile.fullName}
                </div>
                    <div className="">
                    <b>Looking for a job : </b> {profile.lookingForAJob ? "Yes" : "No"}
                </div>
                { profile.lookingForAJob && 
                <div className="">
                    <b>My professional skills : </b>{profile.lookingForAJobDescription}
                </div>
                }
                <div className="">
                    <b>About me :</b> {profile.aboutMe}
                </div>
                <div className="">
                    <b>Contact :</b> {Object.keys(profile.contacts).map(
                        key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}></Contact>
                        }
                    )}
                </div>
                {isOwner && <div><button onClick={toEditMode}>Edit</button></div>}
            </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle} :</b>{contactValue}</div>   
}

export default ProfileInfo; 