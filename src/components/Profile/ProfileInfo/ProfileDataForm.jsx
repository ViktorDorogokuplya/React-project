import React from "react";
import { reduxForm } from "redux-form";
import { createFeield, Input, Textarea } from "../../FormsControls/FormsControls";
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <form onSubmit={handleSubmit} initialValues={profile}>
                <div className="">
                    <b>Full name : </b> {createFeield("Full name", "fullName", Input, [], )}
                </div>
                    <div className="">
                    <b>Looking for a job : </b>
                    {createFeield("", "lookingForAJob", Input, [], {type: "checkbox"})}
                </div>
                <div className="">
                    <b>My professional skills</b> {createFeield("My professional skills", "lookingForAJobDescription", Textarea, [])}
                </div>
                <div className="">
                    <b>About me :</b> 
                    {createFeield("About me", "aboutMe", Textarea, [])}
                </div>
                <div className="">
                    <b>Contacts :</b> {Object.keys(profile.contacts).map(
                        key => {
                            return <div className={s.contact}>
                                <b>{key}: {createFeield(key, "contacts." + key, Input, [])}</b>
                            </div>
                        }
                    )}
                </div>
                {error && <div className={s.formSummaryError}>{error}</div>}
                <div><button>Save</button></div>
            </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;