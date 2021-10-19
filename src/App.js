import './App.css'; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Notice from './components/Notice/Notice';
import Login from './components/Login/Login';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Footer/Footer';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
        
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/notice">
              <Notice></Notice>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/service_details">
              <ServiceDetails></ServiceDetails>
            </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      
     

    </div>
  );
}

export default App;
