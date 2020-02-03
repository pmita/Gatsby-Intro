import React from "react"
import {Link, graphql} from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/Home/Info"

//We need to import the Background section component from the Globals folder
import BackgroundSection from "../components/Globals/BackgroundSection";


//We are passing the graphql query data as a prop into our function in order for us to utilize its functionality as 
//a function arguement
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="About us" styleClass="about-background" />
    <Info />
    <div className="row">
      <div className="col text-center">
        <Link to="/about">
          <button className="btn text-uppercase btn-yellow">About us</button>
        </Link>
      </div>
    </div>

  </Layout>
);
/*Remeber the BackgroundSection is a component and we can pass data to that component (regardless of being a function or a class)
that will be props. Here in particular we are passing the img itselt (look graphql query below) but also a few attributes that will
help us style this component with css*/


//We have to export the data with a graphql query. We are basically passing the fluid object and then we are passing in the 
//image fragment. Take note of the ... spread operator in order to override what we don't have
export const query = graphql`
{
  img: file(relativePath: {eq: "about-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`;

export default AboutPage;
