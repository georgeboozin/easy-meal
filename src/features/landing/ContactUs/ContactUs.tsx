import React from "react";

import s from "./ContactUs.module.css";

interface Props {}

export const ContactUs = ({}: Props) => {
  return (
    <div className="mx-auto lg:max-w-7xl">
      <p id="contact-us" className="text-5xl pt-8 px-4 lg:px-8">
        Contact Us
      </p>
      <div className="lg:px-8 my-8 px-4">
        <div className={s.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d724.9953385786658!2d44.78949026114809!3d41.72506252180428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044732e7a00f93b%3A0xb8a128a948819c5a!2sEasy%20Meal!5e0!3m2!1sru!2sge!4v1673879700508!5m2!1sru!2sge"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
