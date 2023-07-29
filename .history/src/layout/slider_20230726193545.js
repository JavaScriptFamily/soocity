import SimpleImageSlider from "react-simple-image-slider";
function Slider() {
    const sliderImages = [
        {
            url: "images/slide-01.jpg",
        },
        {
            url: "images/slide-02.jpg",
        },
        {
            url: "images/slide-03.jpg",
        },
        {
            url: "images/slide-04.jpg",
        }
    ];
    return (
        <section className="section-slide">
            <div className="wrap-slick1">
                <div className="slick1">
                    <div>
                        <SimpleImageSlider
                            height={600}
                            images={sliderImages}
                            showNavs={true}
                            showBullets={true}
            autoPlay={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;