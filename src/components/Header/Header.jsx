import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
    <img src='https://image.shutterstock.com/image-vector/dv-initial-monogram-logo-260nw-341746877.jpg'alt='#' ></img>
    <div className={s.loginBlock}>
      {props.isAuth ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>  : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}

export default Header;