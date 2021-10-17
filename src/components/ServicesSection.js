import React from 'react';
import { MdDesktopMac, MdCode, MdCloudQueue } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Front-End"
            desc="Design for the website that helps to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Back-End"
            desc="High performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdCloudQueue />}
            title="Databases"
            desc="Databases from API's, and SQL unique databases"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
