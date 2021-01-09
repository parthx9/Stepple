import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="">
      <Header />
      <Router>
        <Switch>
          {/* <Route path='/'>
            <Redirect to='/signin/' />
          </Route> */}
          <Route path='/signin/'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
