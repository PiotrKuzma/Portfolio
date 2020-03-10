import React from "react";
import "./Home.style.scss";
import { ReactComponent as Github } from "./icons/github.svg";
import { ReactComponent as Linked } from "./icons/linkedin.svg";

const Home = () => (
  <div className="HomePage">
    <h1 className="HomePage__title">
      Piotr Kuźma, <br></br>
      junior <span className="dev">Front-End Developer</span>
    </h1>
    <section className="HomePage__section">
      <div className="HomePage__section__about">
        <div className="HomePage__section__about__img-container"></div>
        <div className="HomePage__section__about__desc">
          <p className="HomePage__section__about__desc__text">
            Welcome to my portfolio. My name is Piotr and I am experienced{" "}
            <span className="strong">problem-solver</span> with accounting
            background, who started a new journey with code. I chose self-taught
            path and worked with other professionals to grow. Check my projects
            and skills, to learn more about my work.
          </p>
          <p className="HomePage__section__about__desc__text">
            With kind regards, <br></br>
            <span className="signature">Piotr</span>
          </p>
        </div>
      </div>
    </section>

    <section className="contact">
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

export default Home;
