import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PreviewSlider(){

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      }

    return(
        <div className="slider-container p-4">
            <Slider {...settings}>
                <div className="p-2 bg-green-100">
                    <div className="bg-red-100 aspect-square">
                        <h3>1</h3>
                    </div>
                </div>
                <div className="p-2 bg-green-100">
                    <div className="bg-red-100 aspect-square">
                        <h3>1</h3>
                    </div>
                </div>
                <div className="p-2 bg-green-100">
                    <div className="bg-red-100 aspect-square">
                        <h3>1</h3>
                    </div>
                </div>
                <div className="p-2 bg-green-100">
                    <div className="bg-red-100 aspect-square">
                        <h3>1</h3>
                    </div>
                </div>
                <div className="p-2 bg-green-100">
                    <div className="bg-red-100 aspect-square">
                        <h3>1</h3>
                    </div>
                </div>
                <div className="p-2 bg-green-100">
                    <div className="bg-red-100 aspect-square">
                        <h3>1</h3>
                    </div>
                </div>
            </Slider>
        </div>
    )
}