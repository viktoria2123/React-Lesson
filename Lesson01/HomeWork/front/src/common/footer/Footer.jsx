import Button from "../../component/Button/Button"

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <p className="footer__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quo velit explicabo maiores illo tempore hic ducimus nisi. Nemo, nulla.
                </p>
                <Button className='footer__btn' name='More' />
            </div>
        </footer>
    )
}

export default Footer