import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Federico Acosta</h1>
          <PText>
            A Remote developer from Argentina. I always make websites that have
            unique designs and also has a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+543584387574',
                path: 'tel:+5493584387574',
              },
              {
                title: 'fedeacos045@gmail.com',
                path: 'mailto:fedeacos045@gmail.com',
              },
              {
                title: 'Argentina',
                path:
                  'https://www.google.com/maps/place/R%C3%ADo+Cuarto,+C%C3%B3rdoba/@-33.1242434,-64.4122289,12z/data=!3m1!4b1!4m5!3m4!1s0x95d2000fbdd02247:0xc58d0a705d7cc0e3!8m2!3d-33.1226007!4d-64.3496704',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/fede-acosta-b11a22211/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/FedericoAcostaDev',
              },
              {
                title: 'FreeCodeCamp',
                path: 'https://www.freecodecamp.org/fedexx45',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>2021 - Designed By Shaif Arfan & Federico Acosta </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
