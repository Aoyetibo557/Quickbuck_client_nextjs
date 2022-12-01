import React, {useState, useEffect} from 'react'
import styles from "../styles/Login.module.css";

function Radio({label, name, value, checked, disabled}) {
    const [isChecked, setIsChecked] = useState(checked);
    const [isDisabled, setIsDisabled] = useState(disabled);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    };



  return (
    <div className={styles.login_form_form_radiodiv}>
        <input type="radio" id={value} name={name} value={value} checked={isChecked} onChange={ handleChange } 
        disabled={isDisabled} />
        <label htmlFor={value}>{label}</label>
    </div>
  )
}

export default Radio