import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img width="20" src="/images/eng-lang.png" alt="" />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">Children</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/4">Accessories</Link>
                </div>
            </div>
            <div className="center">
                <Link className='link' to="/">AnnStore</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className='link' to="/">Home</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">About</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonIcon/>
                    <FavoriteBorderIcon/>
                    <div className="cart-icon">
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar