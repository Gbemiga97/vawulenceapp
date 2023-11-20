import "./contact.css"
import { MdEmail } from "react-icons/md"
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from "react-icons/io"
import Header from "../../components/Header"

function Contact() {
  return (
    <>
    <Header title="Get In Touch" image="./assets/header_bg_2.jpg" >
      Lorem ipsum dolor sit, amet consectetur adipisic
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:holuwagnbemiga@gmail.com" target="blank" rel="noreferrer noopener"><MdEmail /></a>
          <a href="http://m.me/" target="blank" rel="noreferrer noopener"><BsMessenger /></a>
          <a href="https://wa.me/+2348161435613" target="blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact