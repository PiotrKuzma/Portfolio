import React from 'react'
import "./Home.style.scss"



const Home = () => (
    <div className="HomePage">
        <h1 className="HomePage__title">Piotr Kuźma, <br></br>
        junior <span className="dev">Front-End Developer</span>
        </h1>
        <section className="HomePage__section">
            <div className="HomePage__section__about">
                <div className="HomePage__section__about__img-container">
                    {/* <img className="HomePage__section__about__img-container__img"
                        src="https://avatars2.githubusercontent.com/u/50806122?s=460&v=4"
                    /> */}
                </div>
                <div className="HomePage__section__about__desc">
                    <p className="HomePage__section__about__desc__text">
                        Welcome to my portfolio. My name is Piotr and I am experienced <span className="strong">problem-solver</span> with accounting background,
                        who started a new journey with code. I chose self-taught path and worked with other professionals to grow.
                        Check my projects and skills, to learn more about my work.

                    </p>
                    <p className="HomePage__section__about__desc__text">
                        With kind regards, <br></br>
                        <span className="signature">Piotr</span>
                    </p>


                </div>

            </div>

        </section>
        <footer className="footer">
            <p className="footer__copy">Copyright &copy; 2019 Piotr Kuźma</p>
        </footer>            
    </div>
)

export default Home