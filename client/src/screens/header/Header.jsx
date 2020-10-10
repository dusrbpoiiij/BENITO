import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/main_logo.png'

const Header = () => {
  return (
    <nav className="header">
      <div className="header__user">
        <span className="header__optionLineOne">Family site. 르바인</span>
        <div className="header__right">
          <ul className="header__userMenuList">
            <li className="header__userMenu"><Link to="/login" className="header__link"><span className="header__optionLineTwo">LOGIN</span></Link></li>  
            <li className="header__userMenu"><Link to="/join" className="header__link"><span className="header__optionLineTwo">JOIN</span></Link></li>  
            <li className="header__userMenu"><Link to="/cart" className="header__link"><span className="header__optionLineTwo">CART</span></Link></li>  
            <li className="header__userMenu"><Link to="/mypage" className="header__link"><span className="header__optionLineTwo">MYPAGE</span></Link></li>  
            <li className="header__userMenu"><Link to="/notice" className="header__link"><span className="header__optionLineTwo">NOTICE</span></Link></li>  
            <li className="header__userMenu"><Link to="/event" className="header__link"><span className="header__optionLineTwo">EVENT</span></Link></li>  
            <li className="header__userMenu"><Link to="/review" className="header__link"><span className="header__optionLineTwo">REVIEW</span></Link></li>  
            <li className="header__userMenu"><Link to="/qna" className="header__link"><span className="header__optionLineTwo">Q & A</span></Link></li>  
            <li className="header__userMenu"><Link to="/vip" className="header__link"><span className="header__optionLineTwo">VIP게시판</span></Link></li>  
          </ul>

          <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon" />
          </div>
        </div>
        
      </div>


      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logoImage"/>
        </Link>
      </div>


    {/* 3rd line : items */}
      <div className="header__item">
        <ul className="header__itemMenuList">
          <div className="header__menuIconContainer">
          <MenuIcon className="header__menuIcon" />
          </div>
          
          <li className="header__itemMenu"><Link to="/login" className="header__link"><span className="header__optionLineThree">BEST50</span></Link></li>  
          <li className="header__itemMenu"><Link to="/join" className="header__link"><span className="header__optionLineThree">NEW <span className='header__optionLineFour'>5%</span></span></Link></li>  
          <li className="header__itemMenu"><Link to="/cart" className="header__link"><span className="header__optionLineThree">MAED</span></Link></li>  
          <li className="header__itemMenu"><Link to="/mypage" className="header__link"><span className="header__optionLineThree">OUTER</span></Link></li>  
          <li className="header__itemMenu"><Link to="/notice" className="header__link"><span className="header__optionLineThree">DRESS</span></Link></li>  
          <li className="header__itemMenu"><Link to="/event" className="header__link"><span className="header__optionLineThree">BLOUSE</span></Link></li>  
          <li className="header__itemMenu"><Link to="/review" className="header__link"><span className="header__optionLineThree">KNIT/TEE</span></Link></li>  
          <li className="header__itemMenu"><Link to="/qna" className="header__link"><span className="header__optionLineThree">PANTS</span></Link></li>  
          <li className="header__itemMenu"><Link to="/vip" className="header__link"><span className="header__optionLineThree">SKIRTS</span></Link></li>
          <li className="header__itemMenu"><Link to="/vip" className="header__link"><span className="header__optionLineThree">SHOES</span></Link></li>  
          <li className="header__itemMenu"><Link to="/vip" className="header__link"><span className="header__optionLineThree">ACC</span></Link></li>  
          <li className="header__itemMenu"><Link to="/vip" className="header__link"><span className="header__optionLineThree">UNDERWARE</span></Link></li>  
          <li className="header__itemMenu"><Link to="/vip" className="header__link"><span className="header__optionLineThree">당일발송</span></Link></li>  
          <li className="header__itemMenu"><Link to="/vip" className="header__link"><span className="header__optionLineThree">77SIZE</span></Link></li>  
          <li className="header__itemMenu"><Link to="/vip" className="header__link"><span className="header__optionLineThree">휴양지룩</span></Link></li>    
        </ul>
      </div>
    </nav>
  )
}

export default Header
