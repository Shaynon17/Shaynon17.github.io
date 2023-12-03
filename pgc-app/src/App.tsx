// go to this directory then npm run dev to launch it

// import ListGroup from "./components/ListGroup";
import StoreListing from "./components/StoreListing";
import './Shop.css'

import ImageSlider from "./ImageSlider";
import pic1 from "./assets/TestImageReact1.png"
import pic2 from "./assets/TestImageReact2.png"
import pic3 from "./assets/TestImageReact3.png"
import pic4 from "./assets/TestImageReact4.png"
import pic5 from "./assets/TestImageReact5.png"

const Images = [pic1, pic2, pic3, pic4, pic5]

function App() { 

    return (
        <div className="ListingContainer">
            {/* goal  */}
            {/* <ImageSlider pic1="./assets/TestImageReact1.png" />  */}
            <ImageSlider imageUrls={Images} />
            <StoreListing title="Truth or Shot" button="Buy on Etsy" price={1.99} XReviews={0} review="Exactly what I was looking for! -Mary J." link='https://www.etsy.com/listing/1165642439/truth-or-shot-adult-drinking-game-to?etsrc=sdt' />
        </div>
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
