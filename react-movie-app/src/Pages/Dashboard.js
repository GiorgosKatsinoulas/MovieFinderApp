import React, { useContext, useState } from 'react';
import { Container,Modal,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { isLoggedContext } from '../Components/isLoggedContext';
import { UserContext } from '../Components/UserContext';

function Dashboard() {
    const { isLogged, setIsLogged } = useContext(isLoggedContext);
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const [show, setShow] = useState(false);
    const Url = 'https://localhost:5001/api/authmanagement/delete';
    
    const [showResult,setShowResult] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [password, setPassword] = useState('');
    


    function logOut() {
        setIsLogged(false)
        setUser({
            username: '',
            email: ''
        });
        sessionStorage.clear();
        history.push("/")
    }
    async function Delete(credentials) {
        return fetch(Url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.user.email,
                password: credentials.password
            })
        })
        .then(res =>res.json())
        .then(
            (result) =>{
                if (result) {
                    setShow(false);
                    setShowResult(true);
                    setTimeout(() =>{
                        logOut();
                    }, 2000);
                }

            }
        )
    }
    const handleSubmit = async e => {
        e.preventDefault();
        await Delete({
            user,
            password
        });
        
    }
    return (
        <Container>
            <div>
                <h3>Profile Name:{user.username}</h3>
                <h3>Email:{user.email}</h3>
            </div>
            <div>
                <Button variant="danger" onClick={handleShow}>
                   Delete
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are u sure delete your account?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Verify password</Modal.Body>
                    <Modal.Body><input type="password" onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"  required /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={handleSubmit}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
                <button className="btn btn-primary" onClick={logOut}>Log out</button>
            </div>
            {showResult && 
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Successfull Delete of {user.email}</strong>
                </div>}
        </Container>
    )
}

export default Dashboard