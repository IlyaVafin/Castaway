import React from 'react'
import ReviewsCard from './subreviews/ReviewsCard'
import ReviewsList from './subreviews/ReviewsList'
import './review.css'
export default function Reviews() {
  return (
    <>
    <div className="wrapper__card">
      <div className="container">
        <div className="card__grid">
         {ReviewsList.map(el => {
          return <ReviewsCard key = {el.h1} h1 = {el.h1} desc = {el.desc} />
         })}
        </div>
      </div>
    </div>
    </>
  )
}
