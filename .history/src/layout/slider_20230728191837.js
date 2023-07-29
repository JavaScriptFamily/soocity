import SimpleImageSlider from "react-simple-image-slider";
function Slider() {
    const sliderImages = [
        {
            url: "images/slider/3.jpg",
        },
        {
            url: "images/slider/8.jpg",
        },
        {
            url: "images/slider/9.jpg",
        },
        {
            url: "images/slider/10.jpg",
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