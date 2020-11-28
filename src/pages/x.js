import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import Section1 from '.';
import Section2 from './what-can-you-learn-from-ebook';
import Section3 from './all-in-one-content-checklist';
import device from '../utils/device';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Dots from '../components/Dots';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Div = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  @media ${device.mobile} {
    scroll-snap-type: none;
  }
`;

const Section = styled.section`
  flex-direction: column;
  @media ${device.mobile} {
    flex-basis: auto;
    align-items: stretch;
    justify-content: stretch;
  }
`;

const HomePage = () => {
  useEffect(() => {
    const heroTitle = document.getElementById('heroTitle');
    const heroTextParagraph = document.getElementById('heroTextParagraph');
    const email = document.getElementById('email');
    const ebookCover = document.getElementById('ebookCover');
    // const dots = document.getElementById('dots');
    // const [dot1, dot2, dot3] = dots.children;
    const [input, button] = email.children;

    const whatSectionTitle = document.getElementById('whatSectionTitle');
    const section2 = document.getElementById('section2');

    const t1 = gsap.timeline({ defaults: {} });
    const t2 = gsap.timeline({ defaults: {} });
    const t3 = gsap.timeline({ defaults: {} });
    const t4 = gsap.timeline({ defaults: {} });
    const t5 = gsap.timeline({
      defaults: {},
      scrollTrigger: {
        trigger: section2,
        start: 'top 20%',
      },
    });

    gsap.set(
      [
        heroTitle,
        heroTextParagraph,
        ebookCover,
        // dot1,
        // dot2,
        // dot3,
        input,
        button,
        whatSectionTitle,
      ],
      { autoAlpha: 0 },
    );

    t1.delay(1.1)
      .fromTo(
        heroTitle,
        { x: '-=120' },
        { duration: 0.6, x: '+=120', autoAlpha: 1 },
      )
      .fromTo(
        heroTextParagraph,
        { x: '-=120' },
        { duration: 0.6, x: '+=120', autoAlpha: 1 },
        '-=0.3',
      );
    t2.delay(1.5).fromTo(ebookCover, {}, { duration: 3, autoAlpha: 1 });
    // t3.delay(1.1)
    //   .fromTo(dot1, { x: '+=20' }, { duration: 0.4, x: '-=20', autoAlpha: 1 })
    //   .fromTo(
    //     dot2,
    //     { x: '+=20' },
    //     { duration: 0.4, x: '-=20', autoAlpha: 1 },
    //     '-=0.2',
    //   )
    //   .fromTo(
    //     dot3,
    //     { x: '+=20' },
    //     { duration: 0.4, x: '-=20', autoAlpha: 1 },
    //     '-=0.2',
    //   );
    t4.delay(1.5)
      .fromTo(input, { y: '+=20' }, { duration: 1, y: '-=20', autoAlpha: 1 })
      .fromTo(
        button,
        { y: '+=20' },
        { duration: 1, y: '-=20', autoAlpha: 1 },
        '-=0.7',
      );

    t5.delay(1.5).fromTo(
      whatSectionTitle,
      { y: '-=80' },
      {
        y: '+=80',
        autoAlpha: 1,
        duration: 3,
      },
    );
  });

  return (
    <div>
      <Div>
        <SEO title="Ultimate content checklist" />
        <Section id="fooo">
          <Section1 />
          <Section2 />
          <Section3 />
        </Section>
      </Div>
    </div>
  );
};

export default HomePage;
