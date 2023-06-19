import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import Storysnapi from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'



const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      The company itself is a very successful company. And the bigger pains, choosing to fall into the way of things due to the consequences of the troubles?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={Storysnapi} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          It is very important for the customer to pay attention to the adipiscing process. He flees greater to nor to which, which of his but there are that in and nothing less, for at the time he will be pursued to be the option of some pleasures no one! The opening of the truth is the choice of convenience. The pleasures of the little times were born.          </p>
          <p>

          The customer himself, the customer will be able to pursue the adipiscing of the company. The labor of these corrupt persons, who with pleasure, by enduring the pardon of the truth, is the consequence of this distinction;          </p>
          <p>
          By enduring the forgiveness of the truth, does this distinction result from the most deserving others?
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          It is very important for the customer to pay attention to the adipiscing process. He flees greater to nor to which, which of his but there are that in and nothing less, for at the time he will be pursued to be the option of some pleasures no one! The opening of the truth is the choice of convenience. The pleasures of the little times were born.
          </p>
          <p>
          The customer himself, the customer will be able to pursue the adipiscing of the company. The labor of these corrupt persons, who with pleasure, by enduring the pardon of the truth, is the consequence of this distinction;
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          It is very important for the customer to pay attention to the adipiscing process. He flees greater to nor to which, which of his but there are that in and nothing less, for at the time he will be pursued to be the option of some pleasures no one! The opening of the truth is the choice of convenience. The pleasures of the little times were born.
          </p>
          <p>
          The customer himself, the customer will be able to pursue the adipiscing of the company. The labor of these corrupt persons, who with pleasure, by enduring the pardon of the truth, is the consequence of this distinction;
          </p>
          <p>
          By enduring the forgiveness of the truth, does this distinction result from the most deserving others?
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About