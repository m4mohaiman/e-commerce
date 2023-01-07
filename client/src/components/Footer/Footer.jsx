import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h2>Categories</h2>
                <span>Men</span>
                <span>Women</span>
                <span>Children</span>
                <span>New Arrival</span>
            </div>
            <div className="item">
                <h2>Links</h2>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stories</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dicta laborum delectus? Nisi in tempore, corrupti reiciendis, exercitationem ipsa doloribus obcaecati optio fugit, asperiores facilis dolorem natus sunt velit rerum.</p>
            </div>
            <div className="item">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores magni, accusantium voluptatum iusto eaque ex molestias, asperiores ratione inventore optio vero nobis suscipit modi, consectetur sapiente eius praesentium animi quaerat.</p>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">AnnStore</span>
                <span> &copy; 2023 All Right Receive</span>
            </div>
            <div className="right">
                <img width="300" src="/images/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer