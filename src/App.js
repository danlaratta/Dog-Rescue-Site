import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Adopt from './pages/Adopt.js'
import Events from './pages/Events.js'
import Volunteer from './pages/Volunteer.js'
import Donate from './pages/Donate.js'
import Contact from './pages/Contact.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about-us' component={About} />
          <Route exact path='/adopt' component={Adopt} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/volunteer' component={Volunteer} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/contact-us' component={Contact} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
