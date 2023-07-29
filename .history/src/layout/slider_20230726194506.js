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
                <div className="slick1" style={{width: '100%'}}>
                    <div>
                        <SimpleImageSlider
                                  className="card_img"
                            width={800}
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