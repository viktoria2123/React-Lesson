import {Route, Routes} from 'react-router-dom';

import Header from './common/header/Header'
import Footer from './common/footer/Footer';

import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'

function App() {
  return (
    <div className='wrapper'>
      <Header/>

       <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
       </main>

       <Footer/>
      </div> 
  );
}

export default App;
