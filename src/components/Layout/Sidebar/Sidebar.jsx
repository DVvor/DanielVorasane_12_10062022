import './Sidebar.css'

import React from 'react'

//Icons/////////////////////////////////////////////////
import strenght from '../../../Assets/strength.png'
import meditation from '../../../Assets/meditation.png'
import swim from '../../../Assets/swim.png'
import cycle from '../../../Assets/cycle.png'


function Sidebar() { 
  return (
		<>
      <div className='sidebar'>
        <div className='sidebar-nav'>
          <img alt='item-sidebar-nav' className='item-sidebar-nav' src={strenght} />
          <img alt='item-sidebar-nav' className='item-sidebar-nav' src={meditation} />
          <img alt='item-sidebar-nav' className='item-sidebar-nav' src={swim} />
          <img alt='item-sidebar-nav' className='item-sidebar-nav' src={cycle} />
        </div>
        <p className='copyright'>Copiryght, SportSee 2020</p>
      </div>
    </>
	)
}

export default Sidebar