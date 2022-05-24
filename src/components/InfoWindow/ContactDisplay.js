import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import React from "react";
import { Link } from "react-router-dom";

const ContactDisplay = ({ display }) => {
  const { facebook, twitter, linkedin, github } = display.socialMedia;
  const { phone } = display.contact;

  return (
    <div className="infoWindow-wrapper">
      <img src={display.image} className="contact-image" alt={display.name} />
      <div className="contact-title">
        <div className="contact-title__t1">Interested</div>
        <div className="contact-title__t2">Working with me?</div>
      </div>
      <div className="contact-form">
        <form></form>
        <div className="contact-info">
          <div className="contact-info__phone">
            <PhoneIphoneIcon />
            {phone}
          </div>
          <div className="contact-info__social">
            <Link to={github}>
              <GitHubIcon />
            </Link>
            <Link to={linkedin}>
              <LinkedInIcon />
            </Link>
            <Link to={facebook}>
              <FacebookIcon />
            </Link>
            <Link to={twitter}>
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-reviews">
        <div className="contact-reviews__background">
          {/* <FormatQuoteIcon className="contact-reviews__left-svg" /> */}
          <div>{display.reviews[0].review}</div>
          <pre>{display.reviews[0].name}</pre>
          {/* <FormatQuoteIcon className="contact-reviews__right-svg" /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactDisplay;
