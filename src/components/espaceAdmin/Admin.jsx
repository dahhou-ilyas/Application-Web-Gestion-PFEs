import React from 'react'
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Header from '../Header'
import SideBareAdmin from './SideBareAdmin'


const Admin = () => {
  return (
    <div className='flex'>
        <SideBareAdmin/>
    <div className='h-full w-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}




    </div>
    </div>
  )
}

export default Admin