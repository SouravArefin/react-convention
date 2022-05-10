import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import googleLogo from '../../s1AjSxph_400x400.jpg'
import { ToastContainer, toast } from 'react-toastify';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword,useSignInWithGithub,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import 'react-toastify/dist/ReactToastify.css';
import githubLogo from '../../github-mark.png'
import fbLogo from '../../fbpng.png'
const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithGoogle, name] = useSignInWithGoogle(auth)
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth,{sendEmailVerification:true}
      );
    
      const [
        signInWithEmailAndPassword,
        user,
      loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);

    }
    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email,password);

    }

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    if (user || user1) {
        navigate(from,{replace:true})
    }
    let errorMsg;
    if (error || error1 || error2) {
    errorMsg = <p className='text-red-700'>Error : {error?.message} {error1?.message} {error2?.message}</p>;
    }


 // react-firebase-hooks
 const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then( () =>{
        navigate(from, {replace: true})
    })
    }
   
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            // alert("check your mail for reset password...")
             toast("check your mail for reset password...");
        }
        else {
            toast('please,give us your email..')
       }
    }

    const handleFacebookSignIn = () => {
    console.log("fb coming...");
}
    
    return (
        <div className='mt-32 mb-10 w-full md:w-1/2 mx-auto custom-shadow bg-[#e8eaec] pt-10 pb-10 px-10 rounded-lg'>
            <h1 className='text-2xl md:text-3xl font-medium text-slate-500 text-center mb-10'>Please Login to Continue</h1>
            <form onSubmit={handleUserSignIn}>
                <div className="relative z-0 mb-6 w-full group">
                    <input onBlur={handleEmailBlur} type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                    <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input onBlur={handlePasswordBlur} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                    <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                {errorMsg}
                    
                    {
                    
                        (loading || loading1)  && <p>Loading...</p>
                    
                    }
                    {
                        sending &&<p>sending...</p>
                    }
                <button type="submit" className="text-white bg-[#4ea227] hover:bg-[#2a680d] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>
            <p className="mt-5">

                New To Sp_ZONE ? <Link className='form-link' to='/signup'><span className='text-red-700'>Create an Account</span></Link>

            </p>
            <p >

                Forget Password ? <span style={{cursor:'pointer'}} onClick={resetPassword }className='form-link reset text-blue-900' >Reset Password</span>

            </p>

            <div className='or-style'>
                <div style={{ height: '1px',width:'50%',backgroundColor: 'black',marginRight: '20px'}} className='w-50 mt-2'></div>
                <p className='mt-2 px-2'> or </p>
                <div style={{ height: '1px',width:'50%',backgroundColor: 'black',marginLeft: '20px'}} className=' w-50 mt-2'></div>
                </div>


            <div className="text-center sign mt-5">
                <button onClick={handleGoogleSignIn} className='flex sign items-center mx-auto google-button rounded-lg google-sign'><img className='w-10 h-10 rounded-full mr-3 ' src={googleLogo} alt="" /><p className='ml-5 text-lg'>Signin with Google</p></button>
            </div>
            <div className="text-center ">
                <button onClick={()=> signInWithGithub()}className='flex sign w-100 bg-black mt-5 items-center mx-auto google-button rounded google-sign'><img className='w-15 h-10 rounded-full mr-3' src={githubLogo} alt="" /><p className='ml-2 text-white text-lg'>Signin with GitHub</p></button>
            </div>
            <div className="text-center ">
                <button onClick={handleFacebookSignIn}className='flex sign w-100 mt-5 bg-sky-900 items-center mx-auto google-button rounded google-sign'><img className='w-10 h-10  mr-3' src={fbLogo} alt="" /><p className='ml-2 text-white text-lg'>Signin with FaceBook</p></button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;