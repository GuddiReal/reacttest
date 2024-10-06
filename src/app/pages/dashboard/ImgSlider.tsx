import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent",position: "absolute",right: "34px",top: "-10px",left:"auto" }}
            onClick={onClick}
        />
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", position: "absolute",right: "10px",top: "-10px",left:"auto"}}
            onClick={onClick}
        />
    )
}

const settings = {
    className: "",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:7,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    autoplay: true,
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
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const ImagesArray =[
    {
        "url":"https://preview.keenthemes.com/html/metronic/docs/assets/media/stock/600x400/img-1.jpg",
        "name":"Black jack ",
        "id":"1",
    }
]

 const ImgSlider   = ( ) => {
    return (
        <>
            <Slider {...settings} >
                {/*<div>*/}
                {/*    <h3>*/}
                {/*        <ul className="grid grid-three--cols">*/}
                {/*            {ImagesArray.map((curElem) => (*/}
                {/*                <img className={"slider-cust-css"} key={curElem.id} src={curElem.url} height={250}*/}
                {/*                     width={200} alt=""/>*/}
                {/*                <p>Black jack </p>*/}

                {/*                ))}*/}
                {/*        </ul>*/}


                {/*    </h3>*/}

                {/*</div>*/}

                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 39.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 40.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 41.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 42.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 43.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>

                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 40.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>
                <div>
                    <img className={"slider-cust-css"}
                         src="media/custom/live-casino/casino 44.png"
                         height={250} width={200} alt=""/>
                    <h3 className={"p-5"}>Dragon Games</h3>

                </div>

            </Slider>
        </>

    )
}

export {ImgSlider}