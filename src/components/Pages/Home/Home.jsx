import React, { useEffect, useRef } from "react";
import "./Home.style.scss";
import { ReactComponent as Github } from "./icons/github.svg";
import { ReactComponent as Linked } from "./icons/linkedin.svg";
import { TweenMax, TimelineLite, Power3 } from "gsap";

const Home = () => {
  //Animation Ref's
  let homeBox = useRef(null);
  let thumb = useRef(null);
  let description = useRef(null);
  let contact = useRef(null);

  let tl = new TimelineLite();

  //Animation Hook and GSAP 
  useEffect(() => {
    let descriptionP1 = description.children[0];
    let descriptionP2 = description.children[1];
    TweenMax.to(homeBox, 0, { css: { visibility: "visible" } });
    tl.from(thumb, 2.3, { y: -150, opacity: 0, ease: Power3.easeOut }, 'start');

    tl.staggerFrom(
      [descriptionP1, descriptionP2, contact],
      1,
      { x: 60, opacity: 0, ease: Power3.easeOut, delay: 0.8 },
      0.15, 'start'
    );
  });

  return (
    <div ref={el => (homeBox = el)} className="HomePage">
      <h1 className="HomePage__title">
        Piotr Kuźma<br></br>
        <span className="dev">Front-End Developer</span>
      </h1>
      <section className="HomePage__section">
        <div className="HomePage__section__about">
          <div
            ref={el => (thumb = el)}
            className="HomePage__section__about__img-container"
          ></div>
          <div
            ref={el => (description = el)}
            className="HomePage__section__about__desc"
          >
            <p className="HomePage__section__about__desc__text">
              Welcome to my portfolio. My name is Piotr and I am experienced{" "}
              <span className="strong">problem-solver</span> with accounting
              background, who started a new journey with code. I chose
              self-taught path and worked with other professionals to grow.
              Check my projects and skills, to learn more about my work.
            </p>
            <p className="HomePage__section__about__desc__text">
              With kind regards, <br></br>
              <span className="signature">Piotr</span>
            </p>
          </div>
        </div>
      </section>

      <section ref={el => (contact = el)} className="contact">
        <h3 className="contact__title">Contact</h3>
        <div className="contact__container">
          <a
            className="contact__container__link"
            href="https://github.com/PiotrKuzma"
            target="_blank"
            rel="noopener"
          >
            <Github className="contact__container__link__icon" />
          </a>
          <a
            className="contact__container__link"
            href="https://www.linkedin.com/in/piotr-ku%C5%BAma-a9861199/"
            target="_blank"
            rel="noopener"
          >
            <Linked className="contact__container__link__icon" />
          </a>
          <div className="contact__container__email">
            <p>kuzma.boh@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer__copy">Copyright &copy; 2019 Piotr Kuźma</p>
      </footer>
    </div>
  );
};

export default Home;
