import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
function ProductSlider() {
    return (
        <Carousel>
            <div>
                <img src="images/slider/1.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="images/slider/2.jpg" />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="images/slider/3.jpg" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
            <div>
                <img src="images/slider/4.jpg" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );
}

export default ProductSlider;