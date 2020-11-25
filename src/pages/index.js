import React, { useRef, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import styled from 'styled-components';
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import device from '../utils/device'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Div = styled.div`
	position:fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	margin: 0;
	overflow-y: scroll;
	overflow-x: hidden;
	display: flex;
	justify-content: center;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  transition: background-color  0.5s;
	@media ${device.mobile} {
		scroll-snap-type: none;
	}
`;

const Section = styled.section`
	flex-direction: column;
	flex-basis: 1350px;
	@media ${device.mobile} {
		flex-basis: auto;
		align-items: stretch;
		justify-content: stretch;
	}
`;

const HomePage = () => {
	let isBackgroundWhite = false;
	useEffect(() => {
		window.addEventListener('wheel', event => {

			const move = event.deltaY;
			//	console.log(move)
			if (move > 0) {
				isBackgroundWhite = true;
				//gsap.to(window, { duration: 1, scrollTo: { y: "#section2", offsetY: 0 } })
			} else if (move < 0) {
				//gsap.to(window, { duration: 1, scrollTo: { y: "#section1", offsetY: 10 } })
				isBackgroundWhite = false;
			}
		})
	})
	return (
		<div >
			<Div>
				<SEO title="Ultimate content checklist" />
				<Section>
					<Section1 />
					<Section2 />
					<Section3 />
				</Section>
			</Div>
		</div>
	);
};

export default HomePage;
