import React from 'react'
import { Link } from 'react-router-dom'


function HomeHeader() {
  return (
    <header className='main__header'>
        <div className="container main__header-container">
            <div className="main__header-left">
                <h4>#100DaysOfWorkOut</h4>
                <h1>Join The Legends of the Fitness World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere modi obcaecati ut rem, eum sapiente iure, et quibusdam quaerat amet, praesentium accusamus? Aliquam non, soluta aperiam tempore voluptates excepturi fugiat.
                </p>
                <Link className='btn lg'>
                Get Started
                </Link>
            </div>
            <div className="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-image">
                <img src='./assets/main_header.png'  alt='Main Header logo'/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default HomeHeader