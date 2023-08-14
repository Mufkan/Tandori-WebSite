import "./style.css"
export function News(params) {
    return(

        <div className="newsletter container-fulid">
        <div className="overlap-group-2">
          <div className="product-image-2">
            <img
              alt="Product image"
              src="public/images/left.png"
            />
          </div>
          <div className="product-image-3">
            <img
              alt="Product image"
              src="public/images/mid.png"
            />
          </div>
          <div className="product-image-4">
            <img
              alt="Product image"
              src="public/images/right.png"
            />
          </div>
          <img className="union" alt="Union" src="public/images/union.png" />
          <div className="SIGN-IN-TO-OUR">
            SIGN IN
            <br />
            TO OUR
            <br />
            NEWSLETTER
          </div>
        </div>
      </div>


    )
    
}