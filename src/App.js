import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container} from 'react-bootstrap'
import Navbars from './Navbar/Navbars';
import Slider from './Slider/Slider';
import Offer from './Offer/Offer';
import About from './About/About';
import Footer from './Footer/Footer';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <div>
      <Navbars/>
      <Slider/>
      <About/>
     <Offer/>
     <Footer/>
    </div>
  );
}

export default App;
