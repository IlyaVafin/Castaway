import React from 'react'
import EmailInput from './subemail/EmailInput'
import './email.css'
export default function EmailForm() {
  return (
    <>
    <div className="email__wrapper">
      <div className="container">
        <section className="email__card">
          <article className="email__card-text">
            <p>Email Newsletter</p>
            <h1>Subscribe for updates</h1>
          </article>
          <article className="email__card-form">
            <form action="">
              <EmailInput/>
              <button type='button'>Submit</button>
            </form>
          </article>
        </section>
      </div>
    </div>
    </>
  )
}
