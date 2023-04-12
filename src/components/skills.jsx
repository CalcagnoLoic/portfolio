import Slider from "react-slick";
import { Component } from "react";
import { dataSlider } from "../data/dataSlider";

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo_slider: [...dataSlider],
        };
    }

    render() {
        const settings = {
            arrows: false,
            centerMode: true,
            centerPadding: "50px",
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 1500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        speed: 1200,
                        autoplaySpeed: 1200,
                    },
                },
            ],
        };

        return (
            <section className="px-5 sm:px-5 md:px-8 lg:px-28 py-10">
                <h2
                    id="skills"
                    className="text-center text-dark-blue text-3xl lg:text-4xl font-bold pb-10 font-[sofia] underline"
                >
                    My skills
                </h2>
                <Slider {...settings}>
                    {this.state.logo_slider.map((id) => {
                        return (
                            <div key={id}>
                                <img
                                    src={id.logo}
                                    alt={id.title}
                                    className="w-24 md:w-28"
                                    title={id.title}
                                />
                            </div>
                        );
                    })}
                </Slider>
            </section>
        );
    }
}

export default Skills;
