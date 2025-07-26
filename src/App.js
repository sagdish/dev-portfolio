import React, { lazy, Suspense} from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Default from './pages/Default';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import './App.css';

const Play = lazy(() => import("./pages/Play"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Route exact path='/' component={ Default } />
        <Route path='/about' component={ About } />
        <Route path='/projects' component={ Work } />
        <Route path='/blog' component={ Blog } />
        <Route path='/play' component={ Play } />
        <Route path='/contact' component={ Contact } />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
