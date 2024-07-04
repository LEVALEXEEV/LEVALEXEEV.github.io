import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburher-menu';

type HeaderProps = {
  backLink?: string
}

function Header({backLink}: HeaderProps): JSX.Element {
  return (
    <section className="header__wrap">
      <div className='header__wrap__div'>
        <header className="header">
          <div className='backlink__div'>
            <Link to="/">
              <img src="img/icon.jpg" width={80}/>
            </Link>
            {
              (backLink) 
              ?
                <Link to={backLink}>
                  {'< Back'}
                </Link>
              : undefined
            }
          </div>
          <HamburgerMenu/>
        </header>
      </div>
    </section>
  );
}
export default Header;
