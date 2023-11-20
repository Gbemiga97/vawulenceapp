import "./trainers.css"
import { FaLinkedin, FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from "react-icons/bs"
import Header from "../../components/Header"
import { trainers } from "../../data"
import Trainer from "../../components/Trainer"

function Trainers() {
  return (
    <>
    <Header image='./assets/header_bg_5.jpg' title="Our Trainers">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure quae, tempore placeat minima sint ullam deserunt optio corrupti facere pariatur, voluptatibus dolorum assumenda et ex libero debitis. Accusamus, quidem?
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials }) =>{
            return (
              <Trainer key={id} image={image} job={job} name={name} socials={
                [
                  {icon: <BsInstagram />, link: socials[0]},
                  {icon: <AiOutlineTwitter />, link: socials[1]},
                  {icon: <FaFacebookF />, link: socials[2]},
                  {icon: <FaLinkedin />, link: socials[3]},
                ]
              } />
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers