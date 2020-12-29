import React, { lazy, Suspense} from 'react';
import Fade from 'react-reveal/Fade';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Default from './pages/Default';
import About from './pages/About';
// import Work from './pages/Work';
import Blog from './pages/Blog';
// import Play from './pages/Play';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

const Play = lazy(() => import("./pages/Play"));
const Work = lazy(() => import("./pages/Work"))

function App(prop) {
  return (
    <div className='main-container'>
      <Navbar />
      <Fade delay={1000} duration={3000}>
        <Suspense fallback={<h1> Loading ...</h1>}>

          <Route exact path='/' component={ Default } />
          <Route path='/about' component={ About } />
          <Route path='/projects' component={ Work } />
          <Route path='/blog' component={ Blog } />
          <Route path='/play' component={ Play } />
          <Route path='/contact' component={ Contact } />
        </Suspense>
      </Fade>
      <Footer />
    </div>
  );
}

export default App;



// replace Router
{/* <Suspense fallback={<h1>loading route …</h1>}>
  <Router>
    <SearchParams path="/" />
    <Details path="/details/:id" />
  </Router>
</Suspense>; */}