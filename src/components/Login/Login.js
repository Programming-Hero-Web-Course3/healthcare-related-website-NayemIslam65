import React, {useContext} from 'react';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth";
import {useState} from 'react';
import IntializeAssignmentApp from '../FireBase/FireBase.authentication';
import {AuthContext} from "../../context/AuthState";
import {Redirect} from "react-router-dom";
import {useQuery} from "../../hooks/Hooks";

IntializeAssignmentApp()
const provider = new GoogleAuthProvider()
const GithubProvider = new GithubAuthProvider()
const Login = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const {currentUser, loginUser} = useContext(AuthContext)
    const next = useQuery().get('next')

    const auth = getAuth()
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const {displayName, email, photoURL} = result.user
                const loggedUser = {
                    name: displayName,
                    email: email,
                    imgUrl: photoURL
                }
                setUser(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const [Gituser, setGitUser] = useState({})
    const handleGithubSignIn = () => {
        signInWithPopup(auth, GithubProvider)
            .then(result => {
                const {email, lastSignInTime, displayName} = result.user
                console.log(result.user)
                const loggedUser = {
                    email: email,
                    lastSeen: lastSignInTime,
                    name: displayName
                }
                setGitUser(loggedUser)
            })
    }

    const handleUserName = e => {
        setEmail(e.target.value)
        e.preventDefault()
    }
    const handlePassword = e => {
        setPassword(e.target.value)
        e.preventDefault()
    }
    const handleRegister = e => {
        e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
            setError('Password Must be Atleast 6 characters')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must have two uppercase')
            return;
        }
        isLogin ? LoginUser(email, password) : createNewUser(email, password)
    }
    const LoginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                loginUser(result.user.email)
                setError('')
                verifyEmail()
            }).catch(error => {
            setError(error.message)
        })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            });
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
            }).catch(error => {
            setError(error.message)
        })
    }
    const handleCheckRegistered = e => {
        console.log(e.target.checked)
        setIsLogin(e.target.checked)
    }

    if (currentUser.isAuthenticated) {
        return next ? <Redirect to={next}/> : <Redirect to='/'/>
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <form action="" onSubmit={handleRegister} className="login_form">
                            <h1 className="text-center mb-3">Please {isLogin ? 'Login' : 'Register'} </h1>
                            <div className="row mb-3 justify-content-center">
                                <div className="col-sm-10">
                                    <input type="email" placeholder="Email" onBlur={handleUserName} className="form-control"
                                           id="inputEmail3"/>
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center">
                                <div className="col-sm-10">
                                    <input type="password" placeholder="Password" onBlur={handlePassword}
                                           className="form-control" id="inputPassword3"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <p className="text-danger">{error}</p>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={handleCheckRegistered} type="checkbox"
                                               id="gridCheck1"/>
                                        <label className="form-check-label" for="gridCheck1">
                                            Already Registered?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="login_btn_div">
                                <button type="submit"
                                        className="btn btn-primary login_btn">Sign {isLogin ? 'in' : 'up'}</button>

                            </div>
                            <div className="login_btn_div">
                                <button className="btn login_btn mt-4" onClick={handleGoogleSignIn}>Google Sign In</button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
};

export default Login;