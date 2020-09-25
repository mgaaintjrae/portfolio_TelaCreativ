import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "accueil",
    url: "/",
  },
  {
    id: 2,
    text: "à propos",
    url: "/a-propos/",
  },
  {
    id: 3,
    text: "projets",
    url: "/projets/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
