import "./style.css";

export function Main() {
    return (
        <>
            <div className="container-fluid centered-container">
                <div className="overlap-group centered-container">
                    <div className="overlap-2">

                        <h1 className="h-1">TANDORIHOME</h1>


                        <div className="row deneme">
                            <div className="col-sm-3">
                                <div className="product-big">
                                    <img
                                        className="img"
                                        alt="Product image"
                                        src="public/images/bed.png"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4 col-text">
                                <div className="frame-2">
                                    <div className="text-wrapper">Tandorino Cups</div>
                                    <div className="text-wrapper-2">€ 19.99</div>
                                </div>
                                <p className="p">
                                    Complete your home decoration by adding a touch of elegance and sophistication with the Geleg ceramic vase,
                                    a decorative accessory whose unique design will catch all eyes.
                                </p>
                                <div className="CTA">
                                    <div className="overlap-3">
                                        <div className="rectangle" />
                                        <div className="rectangle-2" />
                                        <div className="text-wrapper-3">Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
