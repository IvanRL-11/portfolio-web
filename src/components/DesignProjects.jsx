import CarouselDes from "../carousels/CarouselDes";
import CarouselPhoto from "../carousels/CarouselPhoto";
import CarouselIllustration from "../carousels/CarouselIllustration";
import CarouselEditorial from "../carousels/CarouselEditorial";
import CarouselAnimation from "../carousels/CarouselAnimation";
import CarouselVideo from "../carousels/CarouselVideo";

const DesignProjects = () => {
  return (
    <>
      <h3 className="sub-title-sec">Diseño Gráfico</h3>
      <section className="design-p">
        <CarouselDes
          baseWidth={330}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
        <CarouselPhoto
          baseWidth={330}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />

        <CarouselIllustration
          baseWidth={330}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
        <CarouselEditorial
          baseWidth={330}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
        <CarouselAnimation
          baseWidth={330}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
        <CarouselVideo
          baseWidth={330}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </section>
    </>
  );
};

export default DesignProjects;
