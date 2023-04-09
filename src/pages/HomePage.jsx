import React from "react";
import { useNavigate } from "react-router-dom";
import homepageImg from "../assets/mindsketch-image.png";
const HomePage = () => {
  const navigate = useNavigate();
  const navigateToGeneratePage = () => {
    navigate("/generate");
  };
  return (
    <div>
      <section className="home-page-section">
        <div className="home-page-section-items">
          <p className="home-page-section-items-text">
            AI-Powered Image Generation
          </p>
          <p className="mindsketch-tagline">
            Unleash Your Imagination with{" "}
            <span className="tagline-brand-name">Mindsketch</span>: Where AI
            Meets Art to Create Stunning Images
          </p>
          <button
            onClick={navigateToGeneratePage}
            className="generate-image-button">
            Generate
          </button>
        </div>
        <div className="home-page-image">
          <img
            src={homepageImg}
            className="home-page-image-items"
            alt="homeimage"
          />
        </div>
      </section>
      <section className="products">
        <div className="products-items">
          <h1 className="products-items-text">
            Products Section----working....
          </h1>
        </div>
      </section>
      <section className="faq-section" id="faq">
        <div className="faq-section-items">
          <div className="faq-section-items-questions">
            <h1 className="faq-section-items-questions-heading">
              Frequently Asked Questions
            </h1>
            <dl className="description-list">
              <dt className="description-term">
                <h3 className="faq-1">What kind of images can I generate?</h3>
              </dt>
              <dd className="desciption-details">
                <p faq-1-answer>
                  Various categories, such as abstract, nature, and people.
                </p>
              </dd>
              <dt className="description-term">
                <h3 className="faq-2">
                  How long does it take to generate an image?
                </h3>
              </dt>
              <dd className="desciption-details">
                <p faq-2-answer>
                  Depends on image resolution and complexity, usually a few
                  seconds to a minute.
                </p>
              </dd>
              <dt className="description-term">
                <h3 className="faq-3">
                  How many images can I generate per day?
                </h3>
              </dt>
              <dd className="desciption-details">
                <p faq-3-answer>Depends on usage plan and server capacity.</p>
              </dd>
              <dt className="description-term">
                <h3 className="faq-4">
                  How does your website generate AI-powered images?
                </h3>
              </dt>
              <dd className="desciption-details">
                <p faq-4-answer>
                  Our website uses a sophisticated machine learning algorithm to
                  generate unique images based on the.
                </p>
              </dd>
              <dt className="description-term">
                <h3 className="faq-5">Can I customize the images?</h3>
              </dt>
              <dd className="desciption-details">
                <p faq-5-answer>
                  No, but you can generate multiple variations until you find
                  one that suits your needs.
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
