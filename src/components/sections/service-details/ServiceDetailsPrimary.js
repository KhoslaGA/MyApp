"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import getAllServices from "@/libs/getAllServices";
import serviceDetailsImage2 from "@/assets/img/service/service__details__3.png";

const ServiceDetailsPrimary = () => {
  const { id: currentId } = useParams();
  const services = getAllServices();

  // Find the service based on the dynamic ID
  const currentService = services?.find(
    ({ id }) => id.toString() === currentId
  );

  // If service is not found, show a "Not Found" message
  if (!currentService) {
    return <div>Service not found!</div>;
  }

  const {
    title,
    desc,
    detailsImg = serviceDetailsImage2, // Default fallback image
    lifecycleImage = serviceDetailsImage2, // Default fallback image
    planningText,
  } = currentService;

  return (
    <div className="service__details sp_top_140 sp_bottom_160">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="service__details__wraper">
              {/* Service Image */}
              <div
                className="service__details__img"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Image src={detailsImg} alt={title} style={{ width: "100%" }} />
              </div>

              {/* Service Title */}
              <div
                className="service__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>{title}</h4>
              </div>

              {/* Service Description */}
              <div
                className="service__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>{desc}</p>
              </div>

              {/* Planning Section */}
              <div
                className="service__details__planning"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div
                  className="service__details__planning__text"
                  dangerouslySetInnerHTML={{ __html: planningText }}
                />
              </div>

              {/* Lifecycle Image Section */}
              <div
                className="service__details__planning"
                data-aos="fade-up"
                data-aos-duration="1500"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  src={lifecycleImage}
                  alt="Lifecycle Image"
                  style={{ width: "100%", maxWidth: "500px" }}
                />
              </div>

              {/* Get a Free Quote Button */}
              <div
                className="service__details__button"
                data-aos="fade-up"
                data-aos-duration="1500"
                style={{
                  textAlign: "center", // Center the button
                  marginTop: "20px", // Add top margin
                }}
              >
                <Link className="default__button" href="/contact">
                  GET A FREE QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPrimary;
