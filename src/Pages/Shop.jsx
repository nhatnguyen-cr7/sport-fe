import Hero from "../Components/Hero/Hero"
import NewCollections from "../Components/NewCollections/NewCollections"
import Newletter from "../Components/Newletter/Newletter"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/Popular/Popular"

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newletter/>
    </div>
  )
}

export default Shop
