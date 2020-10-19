import React from "react"
// https://github.com/karl-run/react-dark-theme
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
    clrPrimary5: '#7510f7',
    clrPrimary9: '#e6ecf8',
    clrPrimary10:'#e6ecf8',
    clrGrey1:'hsl(209, 61%, 16%)',
    clrGrey2:'#343434',
    clrGrey3: 'hsl(209, 34%, 30%)',
    clrGrey5: 'hsl(210, 22%, 49%)',
    clrGrey9: '#e6ecf8',
    clrGrey10:'hsl(210, 36%, 96%)',
    clrRedDark: '#141c3a',
    background: '#e6ecf8',
    clrWhite: 'white',
    text: '#141c3a',
  }
  
  const darkTheme = {  
    clrPrimary5:'#5b005c',
    clrPrimary9: '#be8dbe',
    clrPrimary10:'#06062B',
    clrGrey1:'#f0f0f0',
    clrGrey2:'#000119',
    clrGrey3: '#e6e6e6',
    clrGrey5: '#be8dbe',
    clrGrey9: '#7510f7',
    clrGrey10:'#000119',
    clrRedDark: '#7510f7',
    background: '#06062B',
    clrWhite: '#06062B',
    text: '#e6ecf8',
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
            <h1>Développeuse Web Freelance</h1>
            <h2 className="name">Priscilla Roy</h2>
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
