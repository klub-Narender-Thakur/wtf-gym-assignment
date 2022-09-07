import React from 'react'
import './styles.css'
export  function GymList({ nearestGym }) {
  return (
    <div>
        {nearestGym ? (nearestGym.map((city) => (
                city.addressComponent.map((gym) => (
                    <div key={gym.address1}className='gym-list-div'>
                        <div className='innner-div'>
                            <div className='heading'>{gym.address1}</div>
                            <div>{gym.country}</div>
                            <div>{gym.pin}</div>
                        </div>
                        <div className='button-div'>
                            <button className='submit-button'>Book Now</button>
                        </div>
                    </div>
                )) 
        ))) : (
            <div>No Data found</div>
        )}
    </div>
  
  )
}
