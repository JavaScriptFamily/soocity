import SimpleImageSlider from "react-simple-image-slider";
function Slider() {
    const sliderImages = [
        {
            url: "images/slider/5.jpg",
        },
        {
            url: "images/slider/2.jpg",
        },
        {
            url: "images/slider/3.jpg",
        },
        {
            url: "images/slider/4.jpg",
        }
    ];
    return (
        <section className="section-slide">
            <div>
                <SimpleImageSlider
                    width='100%'
                    height={700}
                    images={sliderImages}
                    showNavs={true}
                    showBullets={true}
                    autoPlay={true}
                />
            </div>
        </section>
    );
}

export default Slider;