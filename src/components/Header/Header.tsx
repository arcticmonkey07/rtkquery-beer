import './Header.css';
import { useAppSelector } from '../../hooks/redux'
import { useAppDispatch } from './../../hooks/redux';
import { setDarkTheme } from '../../store/reducers/BeerSlice';

function Header() {
  const dispatch = useAppDispatch();
  const dark = useAppSelector(state => state.beerReducer.dark);

  return (
    <div className={`header ${dark ? "header-dark" : ""}`}>
      <nav className="menu">
        <ul>
          <li>Menu-link1</li>
          <li>Menu-link2</li>
          <li>Menu-link3</li>
        </ul>
      </nav>
      <div className="dark-theme">
        <input
          className="dark-theme__checkbox visually-hidden"
          type="checkbox"
          id="dark"
        />
        <label
          className="dark-theme__label"
          htmlFor="dark"
          onClick={() => dispatch(setDarkTheme())}
        ></label>
      </div>
    </div>
  )
}

export default Header