import React, {useState, useMemo} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Details from './Pages/Details';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Search from './Pages/Search';
import Watched from './Pages/Watched';
import Loved from './Pages/Loved';
import Watchlist from './Pages/Watchlist';
import {MovieContext} from './Components/MovieContext';
import { Container } from 'react-bootstrap';
import {SearchContext} from './Components/SearchContext';
import {isLoggedContext} from './Components/isLoggedContext';
import {UserContext} from './Components/UserContext';

function App() {
  const [data, setData] = useState([]);

  const value = useMemo(() => ({data, setData}), [data, setData]);

  const [search, setSearch] = useState('');
  
  const searchValue = useMemo(() => ({search, setSearch}),[search,setSearch]);

  const [isLogged, setIsLogged] = useState(false);

  const [user, setUser] = useState({
    username:'',
    email:'',
    userid: ''
  });

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Movie Finder</h1>
      </header>
      <Container className="themed-container" fluid={false}>
      <Switch>
        <UserContext.Provider value ={{user,setUser}}>
        <MovieContext.Provider value={value} >
        <isLoggedContext.Provider value={{isLogged, setIsLogged}}>
        <NavBar />
        <Route path="/" exact component={Home} />
        <SearchContext.Provider value={searchValue}>
        <Route path="/search" exact component={Search} />
        <Route path="/details/:id" exact component={Details} />
        </SearchContext.Provider>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/watched" component={Watched} />
        <Route path="/loved" component={Loved} />
        <Route path="/watchlist" component={Watchlist} />
        </isLoggedContext.Provider>
        </MovieContext.Provider>
        </UserContext.Provider>
      </Switch>
      </Container>
    </div>
    </Router>
  );
}

export default App;
