import Image from "next/image";
import brandImage4 from "@/assets/img/brand/brand__4.png";

const HeaderAnimate = () => {
  const items = [
    { name: "WEBHUB 4U", img: brandImage4 },
    { name: "Technology of Tomorrow", img: brandImage4 },
    { name: "Empowering Digital Futures", img: brandImage4 },
    { name: "Innovative Web Solutions", img: brandImage4 },
    { name: "Your Digital Partner", img: brandImage4 },
    { name: "Creativity Meets Technology", img: brandImage4 },
    { name: "Transforming Ideas Online", img: brandImage4 },
    { name: "Building Web Excellence", img: brandImage4 },
    { name: "Pioneering Digital Success", img: brandImage4 },
    { name: "Engineering Future Experiences", img: brandImage4 },
  ];

  return (
    <div className="header__animate">
      <div className="container-fluid">
        <div className="header__animate__wraper">
          {items?.map(({ name, img }, idx) => (
            <div key={idx} className="header__animate__item">
              <Image src={img} alt="" />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderAnimate;
