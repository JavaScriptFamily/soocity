import SimpleImageSlider from "react-simple-image-slider";
function Slider() {
    const sliderImages = [
        {
            url: "images/slider/1.jpg",
        },
        {
            url: "images/slider/2.jpg",
        },
        {
            url: "images/slider/3.jpg",
        }
    ];
    return (
        <section className="">
            <div>
                <SimpleImageSlider
                    className='slider-image'
                    width='100%'
                    height='100%'
                    images={sliderImages}
                    // showNavs={true}
                    // showBullets={true}
                    // autoPlay={true}
                />
            </div>
        </section>
    );
}

export default Slider;