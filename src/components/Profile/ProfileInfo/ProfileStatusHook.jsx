import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditeMode = () => {
        setEditMode(true)
    }

    const deActivateEditeMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    } 
   
        return (
            <div>
                
                {
                    !editMode &&
                     <div>
                        <span onDoubleClick={activateEditeMode}>{props.status || "No status"}</span>
                    </div>
                }    
                    
                {  
                    editMode &&  
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditeMode} value={status}></input>
                    </div>
                }
            </div>
        )
    }


export default ProfileStatus;