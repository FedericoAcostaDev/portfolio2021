import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  const Pdf = '../assets/data/resume.pdf';

  const handleOpenPdf = () => {
    window.open(Pdf, '_blank', 'noreferrer').catch(() => {
      alert('Failed to open PDF. Please check your pop-up blocker settings.');
    });
  };
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Federico Acosta</span>
            </p>
            <h2 className="about__heading">A Remote Full-Stack developer</h2>
            <div className="about__info">
              <PText>
                I am from Cordoba, Argentina. A place of good food and nature.
                Since my childhood, i love art and design. I always try to
                design stuff with my unique point of view. I also love to create
                things that can be usefull to others.
                <br /> <br />
                I started coding since I was in the university. Coding is also
                an art for me. I love it and now I have the opportunity to
                design along with the coding. I find it really interesting and I
                enjoyed the process a lot.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
            <Button btnText="SEE CV" onClick={handleOpenPdf} />
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>

            <AboutInfoItem
              title="BootCamp"
              items={['Udemy | Javascript Mastery ']}
            />
            <AboutInfoItem
              title="BootCamp"
              items={['Udemy | Full-Stack Mastery']}
            />
            <AboutInfoItem
              title="University"
              items={['Architect & Urbanist | University Of Mendoza']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={[
                'JavaScript',
                'React',
                'Next',
                'Redux',
                'Unit and integration testing',
                'HTML',
                'CSS',
                'CSS Frameworks',
              ]}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'Express']} />
            <AboutInfoItem title="Database" items={['Nodemon', 'SQL']} />
            <AboutInfoItem
              title="Design"
              items={['Photoshop', 'After Effects', 'Figma']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>

            <AboutInfoItem
              title="2021-"
              items={['Front end developer at ModdPro']}
            />
            <AboutInfoItem
              title="2020-2021"
              items={['Front end developer at Kisafix ']}
            />
            <AboutInfoItem
              title="2019-2020"
              items={['Front-End developer at LV16 News']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
