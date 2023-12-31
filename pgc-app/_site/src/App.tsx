// go to this directory then npm run dev to launch it

// import ListGroup from "./components/ListGroup";
import StoreListing from "./components/StoreListing";
import './Shop.css'

import ImageSlider from "./ImageSlider";
import pic1 from "./assets/TOSTEST1.png"
import pic2 from "./assets/TOSTEST2.png"
import pic3 from "./assets/TOSTEST3.png"
import pic4 from "./assets/TOSTEST4.png"
import pic5 from "./assets/TOSTEST5.png"
const Images = [pic1, pic2, pic3, pic4, pic5]



import TOS1 from "./assets/TruthOrShotPGC1.png"
import TOS2 from "./assets/TruthOrShotPGC2.png"
import TOS3 from "./assets/TruthOrShot3PGC.png"
import TOS4 from "./assets/TruthOrShot4PGC.png"
import TOS5 from "./assets/TruthOrShotPGC5.png"

const TruthOrShotImages = [TOS1, TOS2, TOS3, TOS4, TOS5]

function App() { 

    return (

<>

<div className="shopHeader" >
      <h1>All products are digital downloads</h1>
      <h2>Print at home, play today!</h2>
</div>

        <div className="shopContainer">
        <div className="listingContainer">
            <ImageSlider imageUrls={TruthOrShotImages} />
            <StoreListing title="Truth or Shot" button="Buy on Etsy" price={1.99} XReviews={25} review="Great game to play with friends -Melissa" link='https://www.etsy.com/listing/1165642439/truth-or-shot-adult-drinking-game-to?etsrc=sdt' />
        </div>

            <div className="listingContainer">
                <ImageSlider imageUrls={TruthOrShotImages} />
                <StoreListing title="Truth or Shot" button="Buy on Etsy" price={1.99} XReviews={0} review="" link='https://www.etsy.com/listing/1165642439/truth-or-shot-adult-drinking-game-to?etsrc=sdt' />
            </div>



            <div className="listingContainer">
                <ImageSlider imageUrls={Images} />
                <StoreListing title="Truth or Shot" button="Buy on Etsy" price={1.99} XReviews={1} review="Exactly what I was looking for! -Mary J." link='https://www.etsy.com/listing/1165642439/truth-or-shot-adult-drinking-game-to?etsrc=sdt' />
            </div>
            


            <div className="listingContainer">
                <ImageSlider imageUrls={Images} />
                <StoreListing title="Truth or Shot" button="Buy on Etsy" price={1.99} XReviews={0} review="" link='https://www.etsy.com/listing/1165642439/truth-or-shot-adult-drinking-game-to?etsrc=sdt' />
            </div>


        </div>
        </>
    )
}


// This is for my shop
// function App() {
// return <div>
//   <StoreListing title="Truth or Shot" button="Buy on Etsy" price={1.99} XReviews={0} review="Exactly what I was looking for! -Mary J." link='https://www.etsy.com/listing/1165642439/truth-or-shot-adult-drinking-game-to?etsrc=sdt' />
// </div>
// }





export default App;









// oeiginal code that came with the project getting downloaded.
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React + TEST</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }



// export default App
