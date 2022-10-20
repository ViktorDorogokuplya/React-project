import React from "react";
import style from "./FormsControls.module.css";
import {Field} from 'redux-form'



const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
  

    const hasError = touched && error;
    
        return <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
                    <div>
                        {children}
                    </div>
                    <div>
                        {hasError && <span>{error}</span>}
                    </div>
                    
    
                </div>
    }


export const Textarea = (props) => {

const {input, meta, children, ...restProps} = props

    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props
    
        return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    }

export const createFeield = (placeholder, name, component, validate, props = {}, text = '') => {

   return (
    <div>
         <Field name={name} placeholder={placeholder} component={component} validate={validate} {...props}/>{text}
    </div>)
}    
