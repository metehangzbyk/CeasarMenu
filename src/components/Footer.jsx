import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
    <div className='socialMedia'>
       <InstagramIcon/>
       <FacebookIcon/>
       <TwitterIcon/>
    </div>
    <p>Tüm Hakları Saklıdır | Ceasar</p>
    </div>
  )
}
