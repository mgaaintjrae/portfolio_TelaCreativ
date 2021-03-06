import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>contactez-moi</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="nom" className="form-control" />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              envoyer
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
