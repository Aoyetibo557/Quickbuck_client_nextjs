import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import Radio from '../../components/Radio';
import MainLayout from "../../layouts/MainLayout";
import styles from "../../styles/Login.module.css";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';



function Login() {
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const { data: session, status } = useSession();


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUsernameError('');
    setPasswordError('');

    validateCredentials();

    const { username, password } = userCredentials;


    const result = await signIn('credentials', {
      username: username,
      password: password,
      redirect: false,  
    });
    

    
    
    if(status === 'authenticated'){
      router.push('/dashboard/overview');
    }else if(status === 'loading'){
      router.push('/authpage/login');
    }else if (status === 'unauthenticated') {
      setError('Invalid Credentials');
    }else if (status === 'error') {
      setError('Something went wrong');
    }else{
      setError('Something went wrong');
    }


  };

  // validate the user credentials, for when the value is empty and when the password is less than 6 characters and does not contain a number, a capital letter and a special character
  const validateCredentials = () => {
    const { username, password } = userCredentials;
    
    if (!username || !password) {
      setError('Please fill in all fields');
      return false;
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
     
      return false;
    } else if (!password.match(/\d/) || !password.match(/[A-Z]/) || !password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)) {
      setPasswordError('Password should contain a number, a capital letter and a special character');
      return false;
    }
    return true;
  };



  return (
    <div className={styles.login_container}>
      <div className={styles.login_banner}>
        <h3 className={styles.login_banner_h3}>Welcome</h3>
        <h4 className={styles.login_banner_h4}>Get back time for what you love without breaking the bank.</h4>
        <p className={styles.login_banner_p}>{`Discover the world's best community of Freelancers and business Owners.`}</p>
      </div>
      
      <div className={styles.login_form_container}>
        <div className={styles.login_form}>
          <h3 className={styles.login_form_h3}>Login</h3>

          <form className={styles.login_form_form} method="POST"  onSubmit={handleSubmit} >

            <h4 className={styles.login_form_form_radio_h4}>I am a</h4>
             {error && <p className={styles.login_form_error}>{error}</p>}
            <div className={styles.login_form_formradio}>
             
              <Radio 
                label="Freelancer"
                name="account"
                value="freelancer"
                disabled={true}
              />
              <Radio
                label="Poster"
                name="account"
                value="poster"
                disabled={true}
              />
            </div>


            <div className={styles.login_form_formdiv}>
              <label htmlFor="username" className={styles.login_form_formlabel}>Username</label>
              {usernameError && <p className={styles.login_form_error}>{usernameError}</p>}
              <input
                required
                className={styles.login_form_forminput} 
                name="username" type="text" 
                value={userCredentials.username} 
                placeholder="wesyabby" 
                onChange={(e) => setUserCredentials({ ...userCredentials, username: e.target.value })}
              />
            </div>
            <div className={styles.login_form_formdiv}>
              <label htmlFor="password" className={styles.login_form_formlabel}>Password</label>
              {passwordError && <p className={styles.login_form_error}>{passwordError}</p>}
              <input
                required
                className={styles.login_form_forminput} 
                name="password" type="password" 
                value={userCredentials.password} 
                placeholder="8 characters minimum, 1 uppercase, 1 lowercase, 1 number"
                onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
              />
            </div>
            <div className={styles.login_form_formdiv}>
              <button className={styles.login_form_formbtn}>Login</button>
              <Link href="/">forgot password?</Link>
            </div>

            <div className={styles.login_form_formdiv}>
              <p className={styles.login_form_formp}>{`Don't have an account?`} <Link href="/">Register</Link></p>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  )
}

export default Login;

Login.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}