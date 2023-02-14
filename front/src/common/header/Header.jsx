import Button from '../../component/Button/Button'
import './header.css'


function Header() {
    return (
        <header className="header">
            <div className="container">
                <Button text='Header button' className='header__btn'/>
                <nav>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Post</a>
                        </li>
                        <li>
                            <a href="">From us</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header