import Header from "../../components/Header"
import "./about.css"

function About() {
  return (
    <>
    <Header title="About us" image="./assets/header_bg_1.jpg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, incidunt porro. 
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src="./assets/about1.jpg" alt="our story" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis reiciendis praesentium ad ea eaque consequuntur natus necessitatibus accusamus suscipit quis debitis assumenda, unde provident quos eum enim impedit vero?</p>
          <p>Lorem ipsumm natus dolorum voluptas fugit animi illum illo molestiae perferendis. Impedit, nemo quas. Sed, aut? Officiis modi voluptates reprehenderit deserunt harum! Eius voluptates odio quam odit aut?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga exbus harum expedita quae.</p>
        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis reiciendis praesentium ad ea eaque consequuntur natus necessitatibus accusamus suscipit quis debitis assumenda, unde provident quos eum enim impedit vero?</p>
          <p>Lorem ipsum dolor
          Architecto, libero! Ullam laudantium natus dolorum voluptas fugit animi illum illo molestiae perferendis. Impedit, nemo quas. Sed, aut? Officiis modi voluptates reprehenderit deserunt harum! Eius voluptates odio quam odit aut?</p>
        </div>
        <div className="about__section-image">
          <img src="./assets/about2.jpg" alt="our vision" />
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src="./assets/about3.jpg" alt="our story" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis reiciendis praesentium ad ea eaque consequuntur natus necessitatibus accusamus suscipit quis debitis assumenda, unde provident quos eum enim impedit vero?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga exercitationem inventore magnam rerum voluptatibus, quasi deserunt unde iure fugit esse voluptatum quis impedit, libero asperiores voluptas. Necessitatibus harum expedita quae.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About