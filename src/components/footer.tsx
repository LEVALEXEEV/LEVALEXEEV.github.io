import { Link } from 'react-router-dom';

function Footer(): JSX.Element {
    return (
    <section className="footer__wrap">
      <div className='footer__line'>
        <footer className="footer">
          <div className="footer__text">© 2024 SwimmingStuff</div>
          <ul className="footer__links">
            <li><Link to="tg://resolve?domain=swimming_stuff"><img src="img/tg-icon.svg" width={"40px"}/></Link></li>
            <li><Link to="https://vk.com/swimming_stuff"><img src="img/vk-icon.svg" width={"40px"}/></Link></li>
            <li><Link to="https://instagram.com/swimm1ng_stuff"><img src="img/inst-icon.svg" width={"40px"}/></Link></li>
          </ul>
        </footer>
      </div>
    </section>
    );
  }
  export default Footer;