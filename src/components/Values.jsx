import React from 'react'
import SectionHead from './SectionHead'
import { GiCutDiamond }from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

function Values() {
  return (
   <section className="values">
    <div className="container values__container">
        <div className="values__left">
            <div className="values__image">
                <img src='../assets/values.jpg' alt='values' />
            </div>
        </div>
        <div className="values__right">
            <SectionHead icon={<GiCutDiamond />} title="Values"/>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt suscipit aperiam, ab expedita culpa consequuntur cumque, fugit rem velit saepe exercitationem! Aperiam nemo neque molestiae optio ad itaque id alias.
            </p>
            <div className="values__wrapper">
                {
                    values.map(({id, icon, title, desc}) => {
                        return (
                            <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </div>
   </section>
  )
}

export default Values