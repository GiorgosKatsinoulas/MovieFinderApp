import React,{ useState} from 'react';
import {  Container } from 'react-bootstrap';
import { useHistory } from 'react-router';


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Url = "https://localhost:5001/api/authmanagement/register";
    const [ token,setToken] = useState();
    const history = useHistory();
    const [show, setShow]= useState(false);

    async function registerUser(credentials){
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
                setToken(result);
                if(result.success === true){
                    sessionStorage.setItem('user', JSON.stringify(result))
                    setShow(true)
                    setTimeout(() =>{
                        history.push('/login')
                    }, 2000);
                }
            }
        )
    }
    const handleSubmit = async e => {
        e.preventDefault();
        await registerUser({
            username,
            email,
            password
        });
        
    }


    return (
        <Container>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label for="exampleInputUsername1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" onChange={e => setUsername(e.target.value)} required autofocus />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} required  />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Must contain at least one uppercase letter, one lowercase letter, one number and one special character, and at least 8 or more characters" required />
                </div>
                <div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
               {show && 
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Successfull Registration</strong>
                </div>}
            </form>
        </Container>
    )
}

export default Register