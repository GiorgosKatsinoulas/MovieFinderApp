import React, {useContext, useState} from 'react';
import {  useHistory, withRouter } from 'react-router-dom';
import {isLoggedContext} from '../Components/isLoggedContext';
import { UserContext } from '../Components/UserContext';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Url = 'https://localhost:5001/api/authmanagement/login';
    const [token, setToken] = useState();
    const {isLogged, setIsLogged} = useContext(isLoggedContext);
    const history = useHistory();
    const {user,setUser} = useContext(UserContext);


    async function loginUser(credentials){
        return fetch(Url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(res =>res.json())
        .then(
            (result) =>{
                setToken(result.jwtToken);
                if(result.jwtToken.success === true){
                    setIsLogged(true);
                   
                    setUser({
                        username: result.username,
                        email: result.email,
                        userid: result.id
                    })
                    sessionStorage.setItem('user', JSON.stringify(result.jwtToken))
                 history.push('/dashboard')
                }
            }
        )
    }
     const handleSubmit = async e =>{
         e.preventDefault();
        await loginUser({
             email,
             password
         });
     }
    return (
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} required autofocus/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} required />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    )
}

export default withRouter(Login)