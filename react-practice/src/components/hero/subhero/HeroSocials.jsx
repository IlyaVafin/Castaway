import React from 'react'
import spotify from './../heroimg/spotify.svg'
import soundcloud from './../heroimg/soundcloud.svg'
import choeto from './../heroimg/cho.svg'
import sound from './../heroimg/sound.svg'
import iphoneapp from './../heroimg/iphoneapp.svg'

export default function HeroSocials({title}) {
  return (
    <>
     <section className="hero__text-socials">
            <span>{title}</span>
            <ul className='text__socials-list'>
              <li><a href="">
                <img src = {spotify} alt="" />
                </a></li>
              <li><a href="">
                <img src = {choeto} alt="" />
                </a></li>
              <li><a href="">
                <img src = {soundcloud} alt="" />
                </a></li>
              <li><a href="">
                <img src = {iphoneapp} alt="" />
                </a></li>
              <li><a href="">
                <img src = {sound} alt="" />
                </a></li>
            </ul>
          </section>
    </>
  )
}
