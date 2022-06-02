import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/NavbarComponent';
import ContentComponent from './components/ContentComponent';
import FeatureComponent from './components/FeatureComponents';
import TestimonialComponent from './components/TestimonialComponent';
import ComponentComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';


function App() {

  return (
    <div className="App">
      <NavBarComponent/>
      <ContentComponent/>
      <FeatureComponent/>
      <TestimonialComponent/> 
      <ComponentComponent/>
      <FooterComponent />
    </div>
  );
}

export default App;
