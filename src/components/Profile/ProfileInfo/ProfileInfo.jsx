import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://www.quasa.io/storage/photos/%D0%A4%D0%BE%D1%82%D0%BE%2014/HHHL%2012.jpeg'
                     alt="background"></img>
            </div>
            <div className={s.desBlock}>
                ava
            </div>
        </div>
    )
}

export default ProfileInfo; 