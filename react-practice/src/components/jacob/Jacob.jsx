import React from 'react'
import arrow from './jacobimg/arrowright.png'
import jacob from './jacobimg/Jacob.png'
import './jacob.css'
export default function Jacob() {
  return (
    <>
      <div className="wrapper__jacob">
        <div className="container">
          <section className="jacob__content">
          <section className="jacob__text">
            <img src={arrow} alt="" />
            <p>Meet your host</p>
            <h1>Jacob Paulaner</h1>
            <h3>
              Jacob has a background in audio engineering, and has been
              podcasting since the early days.
            </h3>
            <h3>
              He’s here to help you level up your game by sharing everything
              he’s learned along the way.
            </h3>
          </section>
          <section className='jacob__img'>
            <img src = {jacob} alt="" />
          </section>
          </section>
        </div>
      </div>
    </>
  );
}
