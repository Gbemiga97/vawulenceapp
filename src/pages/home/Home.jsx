import FAQs from "../../components/FAQs"
import Programs from "../../components/Programs"
import Testimonials from "../../components/Testimonials"
import Values from "../../components/Values"
import HomeHeader from "./HomeHeader"
import "./home.css"

function Home() {
  return (
    <>
      <HomeHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      </>
   
  )
}

export default Home