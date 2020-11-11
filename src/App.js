import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Index1 from './components/index/firstindex';
import Footer from './components/index/footer';
import About from './components/about/about';
import Offices from './components/offices/offices';
import Appointment from './components/appointment/appointment';
import FAQs from './components/FAQs/faqs';
import Contact from './components/contact/contact';
import Services from './components/services/services';


function App() {
  return (
      <div className='App'>
            <Navbar />
        <div>
          <Switch>
            <Route path='/' exact component={Index1} />
            <Route path='/About' component={About} />
            <Route path='/Offices' component={Offices} />
            <Route path='/Appointment' component={Appointment} />
            <Route path='/Contact' component={Contact} />
            <Route path='/FAQs' component={FAQs} />
            <Route path='/Services' component={Services} />
          </Switch>
        </div>
            <Footer/>      
      </div>
  );
}

export default App;
