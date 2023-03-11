import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
import Contact from './pages/Contact'

function App () {
const [feedback,setFeedback] = useState(FeedbackData)

const deleteFeedback = (id) =>{
  setFeedback(feedback.filter(e => e.id !== id))
}
  return (
    <Router>
    <Header />
      <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                  <FeedbackForm/>
                  <FeedbackList feedback= {feedback} onDelete={deleteFeedback}/>
                  <AboutIconLink/>
              </>
            }></Route>

            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
      </div>
    </Router>
  )
}

export default App
