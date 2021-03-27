import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Customers from './pages/Customers';
import NotFound from './pages/errors/NotFound';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Navigation />
            <div className="mt-24 w-11/12 mx-auto">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/customers" component={Customers} />
                    <Route render={NotFound} />
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
