import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
