import React, { useState, useEffect} from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import styles from "../../styles/Signup.module.css";
import MainLayout from "../../layouts/MainLayout";
import SignupImage from "../../images/signup.svg";
import GoogleSvg from "../../images/googlesvg.png";
import Image from 'next/image';
import { registerHelper } from '../../utils/userauth';



export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState({nameerr: "", emailerr: "", usernameerr: "", passworderr: "", confirmpassworderr: ""})
    const [genError, setGenError] = useState("")
    const [successMsg, setSuccessMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const {data: session, status} = useSession()
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGenError("")
        setError({nameerr: "", emailerr: "", usernameerr: "", passworderr: "", confirmpassworderr: ""})
        setSuccessMsg("")
        setIsLoading(false);
        validateCredentials();

        try{
            await registerHelper({name, email, username, password})
            .then((res) => {
                if(res.message === "Account Created Successfully!. Signup Authentication Sucessfull"){
                    setSuccessMsg(res.message)
                    setIsLoading(true);
                    try {
                        const result = signIn('credentials', {
                            username: username,
                            password: password,
                            redirect: false,  
                        });
                        result.then((respo) => {
                            setIsLoading(true);
                            if(respo.status === 200){
                                router.push('/dashboard/overview');
                            }else{
                                router.push('/authpage/login');
                            }
                        })

                    }catch(err){
                        setGenError(err.message ||"Something went wrong Logging you in")
                        console.log(err)
                    }
                }else{
                    setIsLoading(false);
                    setGenError(res.message)
                }
            })
            .catch((err) => {
                setIsLoading(false);
                setGenError(err.message)
                console.log(err)
            })
           
        }catch(err){
            setIsLoading(false);
            console.log(err)
        }
        
    }

    // validate the user credentials, for when the values name, email, username, and password is empty and when the password is less than 6 characters and does not contain a number, a capital letter and a special character
    const validateCredentials = () => {
        if (name === '') {
            /* Setting the error state to the string 'Name is required'. */
            setError["nameerr"] = 'Name is required';
        } else if (email === '') {
            setError["emailerr"] = 'Email is required';
        } else if (username === '') {
            setError["usernameerr"] = 'Username is required';
        } else if (password === '') {
            setError["passworderr"] = 'Password is required';
        } else if (password.length < 6) {
            setError["passworderr"] = 'Password must be at least 6 characters';
        } else if (!password.match(/[A-Z]/)) {
            setError["passworderr"] = 'Password must contain a capital letter';
        } else if (!password.match(/[0-9]/)) {
            setError["passworderr"] = 'Password must contain a number';
        } else if (!password.match(/[!@#$%^&*]/)) {
            setError["passworderr"] = 'Password must contain a special character';
        } else {
            setError["nameerr"] = '';
            setError["emailerr"] = '';
            setError["usernameerr"] = '';
            setError["passworderr"] = '';
            setError["confirmpassworderr"] = '';
        }

    }

    // if(status === 'authenticated'){
    //     router.push('/dashboard/overview');
    // }else if(status === 'loading'){
    //     router.push('/authpage/login');
    // }else if (status === 'unauthenticated') {
    //     setError('Invalid Credentials');
    // }else if (status === 'error') {
    //     setError('Something went wrong');
    // }else{
    //     setError('Something went wrong');
    // }
            
  return (
    <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.signup_form}>
                <h3 className={styles.signup_form_h3} >Create An Account</h3>

                <div>
                    {/* Google Authentication */}
                    <button className={styles.signup_google}>
                        <Image src={GoogleSvg} alt="google icon" className={styles.google_img} />
                        <div className={styles.signup_google_text}>
                            <p>Sign up with Google</p>
                        </div>
                    </button>

                    <div className={styles.span_div}>
                        <span className={styles.line}></span>
                        <span className={styles.signup_or}>or</span>
                        <span className={styles.line}></span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} method='POST' className={styles.signup_form}>
                    <div className={styles.signup_form_formdiv}>
                        <p className={styles.signup_form_p}>{genError || successMsg}</p>
                    </div>
                    
                    <div className={styles.signup_form_formdiv}>
                        <label className={styles.signup_label} htmlFor="name">Name</label>
                        <input required className={styles.signup_input} value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="John Freddy" />
                    </div>

                    <div className={styles.signup_form_formdiv}>
                        <label className={styles.signup_label} htmlFor="email">Email</label>
                        <input required className={styles.signup_input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="jondoe@mail.com" />
                    </div>


                    <div className={styles.signup_form_formdiv}>
                        <label className={styles.signup_label} htmlFor ="username">Username</label>
                        <input required className={styles.signup_input} value={username} onChange={(e) => setUserName(e.target.value)} type="text" name="username" id="username" placeholder="JohnyDoe97" />
                    </div>

                    <div className={styles.signup_form_formdiv}>
                        <label className={styles.signup_label} htmlFor="password">Password</label>
                        <input required className={styles.signup_input} value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="*************" />
                    </div>

                    <div className={styles.signup_form_formdiv}>
                        <label className={styles.signup_label} htmlFor="confirm_password">Confirm Password</label>
                        <input required className={styles.signup_input} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirm_password" id="" placeholder="**************" />
                    </div>

                    <div className={styles.signup_btn_container}>
                        <button className={styles.signup_btn} >
                            {isLoading ? "Loading..." : 'Sign Up' }
                        </button>
                    </div>
                </form>

                <div>
                    <p className={styles.signup_form_p}>Already have an account? <a href="/authpage/login">Login</a></p>

                </div>
            </div>
        </div>

        <div className={styles.signup_banner}>
            <h3 className={styles.signup_banner_h3}>Take control of your earnings while joining a community of Talented and enthusiatic Individuals</h3>
            <p className={styles.signup_banner_p}>Put your skills to good use</p>

            <Image
                src={SignupImage}
                alt="Signup Image"
                className={styles.signup_banner_image}
            />

            <p
                className={styles.signup_banner_p_span}
            >
                <span>carpenter</span>
                <span>plumber</span>
                <span>electrician</span>
                <span>painter</span>
                <span>carpenter</span>
                <span>plumber</span>
            </p>
        </div>
    </div>
  )
}


SignUp.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}