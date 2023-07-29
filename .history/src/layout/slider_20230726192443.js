import SimpleImageSlider from "react-simple-image-slider";
function Slider () {
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
        <section class="section-slide">
		<div class="wrap-slick1">
        <div class="slick1">
        <div>
           <SimpleImageSlider
              width={100%}
              height={600}
              images={sliderImages}
              showNavs={true}
           />
        </div>
        </div>
        </div>
        </section>
     );
}

export default Slider;