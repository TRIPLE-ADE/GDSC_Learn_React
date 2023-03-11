import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
   <Card>
     <div style={{textAlign:'center', fontWeight:'bold'}}>About Page</div>
      <h1>Abdulrasheed Abdulsalam</h1>
      <p>I'm a passionate frontend developer willing to learn, unlearn and relearn skills relevant to my field, and also problem solver. </p>
      <Link to="../">Home</Link>
      <Link to="/contact" style={{display:'block'}}>Contact</Link>
   </Card>
  )
}

export default About