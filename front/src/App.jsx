
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Button from './component/Button/Button';

import './style/main.css'
// import './component/Button/button.css'

function App() {
    return(
        <>
        <Header />
        <section>
            <h2>Test</h2>
            <Button />
            <Button text='Run' className='test'/>
        </section>
        <Footer />
        </>
    )
}

export default App