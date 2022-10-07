import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
// debugger
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img src='https://www.quasa.io/storage/photos/%D0%A4%D0%BE%D1%82%D0%BE%2014/HHHL%2012.jpeg'
                     alt="background"></img>
            </div> */}
            <div className={s.desBlock}>
                <img src={props.profile.photos.large} alt='#' />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo; 