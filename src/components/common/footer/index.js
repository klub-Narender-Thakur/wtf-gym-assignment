import React from 'react'
import './styles.css'

export  function Footer() {
  return (
    <div className='footer'>
    <div className='left-div'>

    </div>
    <div className='mid-div1'>
      <div className='footer-heading'>Quick</div>
      <div className='footer-list'>About</div>
      <div className='footer-list'>FAQs</div>
      <div className='footer-list'>Privacy Policy</div>
      <div className='footer-list'>WTF in News</div>
      <div className='footer-list'>{`Term & condition`}</div>
      <div className='footer-list'>{`Refund & cancellation`}</div>
    </div>
    <div className='mid-div1'>
       <div className='footer-heading'>Explore</div>
        <div className='footer-list'>Arenas</div>
        <div className='footer-list'>Studios</div>
        <div className='footer-list'>Nutrition</div>
    </div>
    <div className='mid-div1'>
       <div className='footer-heading'>Contact</div>
      <div className='footer-list'>Address 1</div>
      <div className='footer-list'>Address 2</div>
      <div className='footer-list'>Mobile No.</div>
      <div className='footer-list'>Email</div>
    </div>

  </div>
  )
}
