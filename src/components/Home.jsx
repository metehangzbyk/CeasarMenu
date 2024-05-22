import React from 'react'
import tatli from "../images/tatli.jpg"
import sicak from "../images/sicak.jpg"
import soguk from "../images/soguk.jpg"
import { Link } from 'react-router-dom';
import '../styles/home.css'


export const Home = () => {
  return (
    <div className='container'>
    <div className='frame'>
      <div className='image'>
        <div className='hot-drink'>
          <div className='image-container'>
           <Link to="/hotdrinks">
           <img src={sicak} alt="Sıcak içecekler" />
            <div className='overlay'>
              <button className='button'>Sıcak İçecekler</button>
            </div>
           </Link>
         </div>
        </div>
        <div className='cold-drink'>
          <div className='image-container'>
          <Link to="/colddrinks">  
            <img src={soguk} alt="Soğuk içecekler" />
            <div className='overlay'>
              <button className='button' >Soğuk İçecekler</button>
            </div>
            </Link>
          </div>
        </div>
        <div className='dessert'>
          <div className='image-container'>
          <Link to="/dessert">  
            <img src={tatli} alt="tatlılar" />
            <div className='overlay'>
              <button className='button' >Tatlılar</button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
