import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="container-fluid footer background">
      <div className="row">
        <div className="col-sm-3">
          <div className="footer-logo">tandori</div>
        </div>
        <div className="col-sm-4">
          <img className="footer-union" src="public/images/footer.png" alt="" />
        </div>
      </div>

      <div className="row footer-bottom mb-4">
        <div className="col-sm-6 col-lg-3 mb-5 ">
          <div className="footer-botside ">Shipping & Returns</div>
        </div>
        <div className="col-sm-6  col-lg-3 mb-5  ">
          <div className="footer-botside">Terms & Conditions</div>
        </div>
        <div className="col-sm-6  col-lg-3 mb-4  ">
          <div className="footer-botside">Contact Us</div>
        </div>
        <div className="col-sm-6  col-lg-3 mb-4  ">
          <div className="footer-botside">Refunds Policy</div>
        </div>
      </div>


      <div className="row" >
      
        <div className="col-sm-12 mb-4">
          <img src="public/images/payment-method-google-pay.svg" alt=""  />
        </div>
        <div className="col-sm-2 mb-4">
          <img src="public/images/payment-method-apple-pay.svg" alt="" />
        </div>
        <div className="col-sm-2 mb-4">
          <img src="public/images/payment-method-visa.svg" alt="" />
        </div>
        <div className="col-sm-2 mb-4">
          <img src="public/images/payment-method-mastercard.svg" alt="" />
        </div>
        <div className="col-sm-2 mb-4">
          <img src="public/images/payment-method-stripe.svg" alt="" />
        </div>
        <div className="col-sm-2 mb-4">
          <img src="public/images/payment-method-pay-pal.svg" alt=""  />
        </div>
 

        <div className="col-sm-13  icons">
          <img src="public/images/facebook.svg" alt="" style={{ backgroundColor: '#000' }} />
        </div>
        <div className="col-sm-2 ">
          <img src="public/images/mail.svg" alt="" style={{ backgroundColor: '#000' }} />
        </div>
        <div className="col-sm-2 ">
          <img src="public/images/instagram.svg" alt="" style={{ backgroundColor: '#000' }} />
        </div>
    
      </div>    
    </div>
  );
}

export default Footer;
