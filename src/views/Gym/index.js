import React, {useEffect, useState}  from 'react'
import './styles.css'
import {InputSearchBar} from '../../components/common'
import {Body} from '../../components/common'
import { GymList } from '../../components/common'

export const Gym=() =>{
  const [nearestGym, setNearestGym] = useState('');
  const [search, setSearch] = useState(false);
 
  useEffect(() => {
    if (!nearestGym) {
      fetch('https://api.wtfup.me/gym/places')
      .then((res)=> res.json())
      .then((data) => {
        if (data.status) {
          setNearestGym(data.data)
        }
      });
    }
  }, []);
  
  useEffect(() => {
    if (search) {
      fetch('https://api.wtfup.me/gym/places')
      .then((res)=> res.json())
      .then((data) => {
        if (data.status) {
          setNearestGym(data.data)
        }
      });
    }
  }, [search])

  const handleSearch = (e) => {
    if (!e.target.value) {
    setSearch(true);
    } else {
      setSearch(false);
      const filterData = nearestGym.filter((element) => element.city.toLowerCase().includes( e.target.value))
      setNearestGym(filterData)
    }
  }
  return (
    <div>
    <Body />
    <InputSearchBar width={90}/>
    <div className='show-list'>
     <div className='left-for-location'>
        <div className='heading-filter'>
         Filters
        </div>
        <div className='heading-location'>
         Location
         <div>
           <input  className='location-search-bar' type='text' placeholder='Enter location' onChange={handleSearch}/>
         </div>
        </div>
        <div className='heading-location'>
         Price
         <div>
           <input  className='price-search-bar' type='text' placeholder='Min' />
           <input  className='price-search-bar' type='text' placeholder='Max' />
         </div>
        </div>
        <div className='heading-location'>
         Cities
         <div>
          <select className='select-search-bar' name="City" id="cars">
             {nearestGym && nearestGym.map((element) => (
               <option value={element.city}>{element.city}</option> 
             )) }
          </select>
         </div>
        </div>
      
     </div>
     <div className='right-for-list'>
        <GymList nearestGym={nearestGym}/>
     </div>
   </div></div>
  )
}
