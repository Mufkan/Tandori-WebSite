import React from "react";
import "./style.css";
import {Main} from "../../Main/Main"
import Footer from "../../Footer/Fotter";
import { News } from "../../News/News";
import { NavLink } from "react-router-dom";



export const TandoriHomepage = () => {
  return (
    <div className="tandori-homepage">
      <div className="div">
      
         <Footer/>
         <News/>
         <Main/>

         <div className="overlap">
              <div className="product-medium">
              <img
                  className="product-image"
                  alt="Product image"
                  src="public/images/bag.png"
              />
              <div className="frame">
                  <div className="text-wrapper">Tandorino Cups</div>
                  <div className="text-wrapper-2">€ 19.99</div>
              </div>
              </div>
          </div>
       
         <div className="overlap-4">
         <div className="frame-2">
                <div className="text-wrapper">Tandorino Cups</div>
                <div className="text-wrapper-2">€ 19.99</div>
                </div>
          <div className="product-medium">
            <img
              className="product-image-5"
              alt="Product image"
              src="public/images/cups.png"
            />
            <div className="frame">
              <div className="text-wrapper">Tandorino Cups</div>
              <div className="frame-3">
                <div className="text-wrapper-4">€ 12.99</div>
                <div className="text-wrapper-5">€ 19.99</div>
              </div>
            </div>
          </div>


          <div className="SALE-BADGE">
            <div className="div-wrapper">
             
              <div className="text-wrapper-6">SALE</div>
            </div>
          </div>
        </div>
        <div className="product-medium-2">
          <img
            className="product-image-5"
            alt="Product image"
            src="public/images/basket.png"
          />
          <div className="frame">
            <div className="text-wrapper">Tandorino Cups</div>
            <div className="text-wrapper-2">€ 19.99</div>
          </div>
        </div>
        <div className="product-medium-3">
          <img
            className="product-image-5"
            alt="Product image"
            src="public/images/table.png"
          />
          <div className="frame">
            <div className="text-wrapper">Tandorino Cups</div>
            <div className="text-wrapper-2">€ 19.99</div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="group">
            <div className="overlap-6">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <div className="rectangle-3" />
                  <img
                    className="product-image-6"
                    alt="Product image"
                    src="public/images/cups.png"
                  />
                  <img className="group-2" alt="Group" src="public/images/group-65.png" />
                </div>
              </div>
              <div className="text-wrapper-7">handmade <br/>selected<br/> oriental<br/> products</div>
            </div>
          </div>
          <div className="ellipse-wrapper">
            <div className="ellipse" />
          </div>
          <div className="group-3">
            <div className="ellipse" />
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-7">
              
              <div className="text-wrapper-8">Tandorino Cups</div>
              <div className="text-wrapper-9">€ 12.99</div>
            </div>
          </div>
          <div className="group-4">
            <div className="overlap-8">
              
              <div className="text-wrapper-8">Tandorino Cups</div>
              <div className="text-wrapper-9">€ 12.99</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-10">Most wanted</div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
            <div className="div-2">
            <div className="div-2">
              <div className="image">
               <div className="rectangle-4" />
             </div>
             </div>
            <div className="col-sm-6">
            <div className="overlap-9">
              <div className="visual">
                <div className="overlap-10">
                  <img className="visual-homepage" alt="Visual homepage" src="public/images/visual-homepage.svg" />
                  <div className="CTA-2">
                    <div className="overlap-group-4">
                      <div className="rectangle-5" />
                      
                      <div className="rectangle-6" />
                    
                      <div className="text-wrapper-11">Shop now</div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="text-wrapper-12">handmade <br/>selected<br/> oriental<br/> products</div>
            </div>
            
          </div>
          <div className="navigazione">
            <div className="navbar">
            <NavLink  to="/Explore">
              <a className="text-wrapper-13 nav-link" href="Explore">Explore</a>
            </NavLink>
            <NavLink  to="/Shop">  
              <a className="text-wrapper-14 nav-link" href="Shop">Shop</a>
            </NavLink>
            <NavLink  to="/Shipping">  
              <a className="text-wrapper-14 nav-link" href="Shipping">Shipping</a>
            </NavLink>
            <NavLink  to="/About">  
              <a className="text-wrapper-14 nav-link" href="About">About</a>
            </NavLink>
            </div>
            <img className="cart" alt="Cart" src="public/images/cart.svg" />
            <div className="search">
              <div className="group-5">
                <div className="overlap-11">
                  
                  <div className="group-6">
                    <div className="overlap-group-5">
                      <div className="subtract-wrapper">
                        <img className="subtract" alt="Subtract" src="public/images/search.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="navbar tandori-logo">
                <a className="navbar-brand" href="#">
                  <img img className="tandori" alt="Tandori" src="public/images/tandori-logo.svg"/>
                </a>
            </nav>
          </div>
          <img className="mark-header" alt="Mark header" src="public/images/mark-header.svg" />
        </div>
        </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};
