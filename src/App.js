
import './app.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Moviedetail from './components/moviedetail/moviedetail';
import PageNotFound from './components/pageNotFound/pageNotFound';

function App() {
  
  return (
    <div className="App">
     <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movie/:movieId" component={Moviedetail}/>
        <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
     </Router>
    </div>
  );
}

export default App;


