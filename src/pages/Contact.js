import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <Card>
       <div style={{textAlign:'center', fontWeight:'bold'}}>Contact</div>
        <form action="" style={formStyle}>
          <div className="input-group">
            <input type="text" placeholder='Name'/>
          </div>
      
          <div className="input-group">
            <input type="email" placeholder='Email' />
          </div>
  
          <div style={{display:'flex', flexDirection:'column'}} className='input-group'>
            <textarea name="" id="" cols="30" rows="10" placeholder='Comment'style={{outline:'none', border:"none"}}></textarea>
          </div>
          <button className='btn btn-secondary'>Submit</button>
        </form>
        <Link to='/about'>About</Link>
    </Card>
   
  )
}

const formStyle={
  display: "flex",
  flexDirection:'column',
  gap:'20px',
}

export default Contact