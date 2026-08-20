import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import Categories from "../components/Categories/Categories";
import FeaturedParts from "../components/FeaturedParts/FeaturedParts";
import PopularCategories from "../components/PopularCategories/PopularCategories";
import Footer from "../components/Footer/Footer";

function Home() {
  

  return (
    <>
      <NavBar />
      <Hero />
      <Categories />
      <FeaturedParts />
      <PopularCategories />
      <Footer />
    </>
  )
} 

export default Home