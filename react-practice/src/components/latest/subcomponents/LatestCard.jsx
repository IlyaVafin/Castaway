import React from 'react'
import LatestButton from './LatestButton'
export default function LatestCard({img, ep, title, desc, caption}) {
  const cardClass = caption === 'Tips & Tricks' ? 'card__text-caption card__text-caption--tip' : 'card__text-caption';

  return (
    <>
    <section className = 'card'>
      <article className="card__img">
        <img src = {img} alt="" />
      </article>
      <section className="card__text">
        <article className= {cardClass}>
          <span>{caption}</span>
          <p>{ep}</p>
          <h1>{title}</h1>
          <h3>{desc}</h3>
          <LatestButton/>
        </article>
      </section>
    </section>
    </>
  )
}
