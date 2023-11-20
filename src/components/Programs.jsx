import SectionHead from './SectionHead'
import {FaCrown} from 'react-icons/fa'
import { programs } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import {AiFillCaretRight } from 'react-icons/ai'

function Programs() {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead
            className="programs__head"
            icon={<FaCrown />}
            title="Programs"
            />
        <div className="programs__wrapper">
            {
                programs.map(({id, icon, title, info, path}) => {
                    return (
                        <Card key={id} className="programs__program" >
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path}
                            className='btn sm'
                            >
                                Learn more
                                <AiFillCaretRight />
                            </Link>
                        </Card>
                    )
                })
            }
             </div>
        </div>
    </section>
  )
}

export default Programs