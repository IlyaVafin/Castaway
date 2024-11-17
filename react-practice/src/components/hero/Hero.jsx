import React from 'react'
import './hero.css'
import HeroImg from './heroimg/heroimg.png'
import Next from './heroimg/next.png'
import HeroSocials from './subhero/HeroSocials'


export default function Hero() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
      <section className="hero__content">
        <section className="hero__img">
          <img src = {HeroImg} alt="" />
        </section>
        <section className="hero__text">
          <article className='hero__text-h1'>
          Take your podcast to the
          </article>
          <article className="hero__text-next">
            <img src = {Next} alt="" />
            <span>level</span>
          </article>
         <HeroSocials title = 'Listen on'/>
        </section>
      </section>
      </div>
    </div>
    </>
  )
}
