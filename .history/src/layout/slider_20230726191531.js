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
           url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTDnfOIY9gjVyoT4ulMp55roiV5KefqaDByUc0HdD8p3tdpXuwxTaXjhLdyUFeQzZ2ZwE&usqp=CAU",
        },
        {
           url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
        },
        {
           url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
        },
        {
           url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
        },
     ];
     return (
        <section class="section-slide">
		<div class="wrap-slick1">
        <div class="slick1">
        <div>
        <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
        </div>
        </div>
        </div>
        </section>
     );
}

export default Slider;