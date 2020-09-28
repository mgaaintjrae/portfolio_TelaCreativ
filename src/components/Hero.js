import React from "react"
import DarkTheme from 'react-dark-theme'
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const lightTheme = {
    background: 'white',
    text: 'black',
  }
  
  const darkTheme = {
    background: 'black',
    text: 'white',
  }
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="toggle-dark-theme">
        <DarkTheme light={lightTheme} dark={darkTheme} />        
      </div>
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Priscilla Roy </h1>
            <h4>freelance web & mobile UI/UX designer</h4>
            <Link to="/contact" className="btn">
              Contacte-moi
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
