import './Sidebar.css'

import React from 'react'

//Icons/////////////////////////////////////////////////
import strenght from '../../../assets/strength.png'
import meditation from '../../../assets/meditation.png'
import swim from '../../../assets/swim.png'
import cycle from '../../../assets/cycle.png'


function Sidebar() { 
  return (
		<>
      <div className='sidebar'>
        <img alt='item-sidebar-nav' className='item-sidebar-nav' src={strenght} />
        <img alt='item-sidebar-nav' className='item-sidebar-nav' src={meditation} />
        <img alt='item-sidebar-nav' className='item-sidebar-nav' src={swim} />
        <img alt='item-sidebar-nav' className='item-sidebar-nav' src={cycle} />
      </div>
    </>
	)
}

export default Sidebar