import React, { useState, useEffect  } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { Button } from '../ButtonElement';
import { SignUpButton } from '../SignUpButtonElement';
import './Form.css';




function FormTwo() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {

        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS >>>', authUser);

            if (authUser) {
                //the user just logged in/the user was logged in

                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                //the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    

    }, [])


    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/shop')
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //Successfully creates a new user with email and password

                if (auth) {
                    history.push('/shop')
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="form-container">
            <div className="form-content-right">
                <form className="form" >
                    <div className="form-inputs">
                        <input 
                            type="text" 
                            name="username" className="form-input"
                            placeholder="Your child's name"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-inputs">
                        <input 
                            type="email" 
                            name="email" className="form-input"
                            placeholder="Your best email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        
                    </div>

                    <div className="form-inputs">
                        <input 
                            type="password" 
                            name="password" className="form-input"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                        />
                        
                    </div>

                    <Button type="submit" onClick={signIn}>
                        Sign In
                    </Button>

                    <p className="class__p"> 
                        Don't have an account yet, fill the form and click below to sign up
                    </p>

                    <SignUpButton type="submit" onClick={register}>
                        Sign Up
                    </SignUpButton>
                    
                </form>
            </div>
        
        </div>
    )
}

export default FormTwo
