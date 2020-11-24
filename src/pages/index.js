import React, { useRef, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import styled from 'styled-components';
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Div = styled.div`
	//position:fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	//overflow-y: scroll;
	display: flex;
	justify-content: center;
`;

const Section = styled.section`
	flex-direction: column;
	flex-basis: 1500px;
`

const HomePage = () => {
	useEffect(() => {
	})
	return (
		<Div>
			<SEO title="Ultimate content checklist" />
			<Section>
				<Section1 />
				<Section2 />
				<Section3 />
			</Section>
		</Div>
	);
};

export default HomePage;
