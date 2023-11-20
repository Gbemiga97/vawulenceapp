import { FaLinkedin, FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/">
                <img src="./assets/logo.png" alt="logo" />
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque assumenda, rerum laboriosam in ea harum, similique illum doloremque, minima magni iste obcaecati at minus vel impedit! Asperiores ipsam corrupti modi!</p>
                 <div className="footer__socials">
                    <a href="https://linkdin.com" target='blank' rel='noreferrer noopener'><FaLinkedin /></a>
                    <a href="https://facebook.com" target='blank' rel='noreferrer noopener' ><FaFacebookF /></a>
                    <a href="https://twitter.com" target='blank' rel='noreferrer noopener'><AiOutlineTwitter /></a>
                    <a href="https://instagram.com" target='blank' rel='noreferrer noopener'><AiFillInstagram /></a>
                 </div>
            </article>
            <article>
                <h4>Parmalinks</h4>
                <Link to="/about" >About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers" >Trainers</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s" >Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s" >Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">Faqs</Link>
            </article>
            <article>
                <h4>Parmalinks</h4>
                <Link to="/contact" >Contact us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copywright">
            <small>2023 @wesome Tutorials &copy; All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer