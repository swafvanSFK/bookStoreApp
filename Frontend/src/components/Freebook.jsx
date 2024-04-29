import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import freebook from "../../public/freebook.json";
import Cards from "./Cards";

const Freebook = () => {
  const freeBooks = freebook.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4">
        <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
        <p>
          Unlock the world of literature on my website, where you can access a
          treasure trove of free books. From classics to contemporary reads,
          theres something for every reader to enjoy without spending a dime.
        </p>
        </div>
      
      <div>
        <Slider {...settings}>
        {freeBooks.map((item)=>(
            <Cards key={item.id} item={item}/>
        ))}
        </Slider>
      </div>
      </div>
    </>
  );
};

export default Freebook;
