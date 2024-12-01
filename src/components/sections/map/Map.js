import React from "react";

const Map = () => {
  return (
    <div
      className="contact__map sp_bottom_140"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3733625056313!2d-79.38393408458993!3d43.65348107912124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d7d4ab7df1%3A0xb09f7f259e7022d8!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1714748102465!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
