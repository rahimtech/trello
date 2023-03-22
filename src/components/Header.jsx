import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Appnav from './appNav'
import rahimistyle from '../img/rahimistyle.png'
import cssstyles from '../style.css'
import Snacker from './Snacker'
import { makeStyles } from '@mui/material'

const margint = {
  paddingTop: 100,
}

export const Header = () => {
  return (
    <div>
      <header>
        <Appnav />
      </header>
      <div className="bgheader" style={margint}>
        <div className=" flex justify-evenly flex-wrap">
          <div className="right">
            <img
              src={rahimistyle}
              className="rahimiimage"
              alt="alirezarahimi picture"
              width="200"
            />
          </div>
          <div className="left">
            <h3>Welcome to</h3>
            <h1 className="colororang">My(Alireza Rahimi)</h1>
            <h3>Personal Website</h3>
            <h5 className="fontsmall">
              Here will you more know about technical skills me
            </h5>
            <Snacker />
          </div>
        </div>
        <div className="scroll-present-mouse-box mt-5">
          <h5 className="text-under-mouse fontsmall text-center">scroll</h5>
        </div>
      </div>
    </div>
  )
}

export default Header
