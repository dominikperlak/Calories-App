import React from 'react'

const  AppModal =({setOpenModal})=> {
  return (
    <div className='app__modal'>
        <h3>calories Must Be Bigger Than 0 And Meal Name Cannot Be Blank</h3>
        <button className='btn__close__modal' onClick={()=> setOpenModal(false)}>Close</button>
        </div>
  )
}

export default AppModal