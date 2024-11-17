import React from 'react'
import star from './../reviewsimg/star.svg'

export default function ReviewsCard({h1, desc}) {
  return (
    <>
    <div className="review__card">
      <div className="review__card-stars">
        <img src = {star} alt="" />
        <img src = {star} alt="" />
        <img src = {star} alt="" />
        <img src = {star} alt="" />
        <img src = {star} alt="" />
      </div>
      <section className = 'review__card-text'>
      <h1>{h1}</h1>
      <p>{desc}</p>
      </section>
    </div>
    </>
  )
}
