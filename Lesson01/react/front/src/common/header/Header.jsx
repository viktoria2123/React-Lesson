import Button from '../../component/Button/Button'

import './header.css'

function Header(){
    return (
       <header className="header">
         <div className="container">
            <nav>
                <ul>
                    <li>
                      <a href=""></a>
                    </li>
                    <li>
                        <a >post</a>
                    </li>
                    <li>
                        <a >from us</a>
                    </li>
                </ul>
            </nav>
         </div>
         <Button className='header__btn' name='Header button'/>
       </header> 
    )
}

export default Header