import Button from '../../component/Button/Button'

import './header.scss'

function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <nav>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Button className='header__btn' name='Open'/>
        </header>
    )
}

export default Header