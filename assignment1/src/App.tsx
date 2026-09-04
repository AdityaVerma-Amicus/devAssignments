// import ProductCard from "./components/ProductCard";
// import { products } from "./data/products";
// import Button from "./components/Button";
// import Card from "./components/Card" ;  
// import { buttonVariants } from "./data/buttonVariants";
// import { cardVariants } from "./data/cardVariants";
// import ProductQuantitySelector from "./components/ProductQuantitySelector";
import ProductListPage from "./pages/ProductListPage";
function App() {
  return <ProductListPage />; }
  // const handleShopNow = () => {
  //   console.log("Navigating to products..")
  // }
//   return(
//   <> 
//     <h1 style = {{ color : "#FF6600" }}> Online Express </h1>
//     <p style = {{color : "#333333" }}> Welcome to our e-commerce store, your one-stop destination for high-quality products at competitive prices. We offer a carefully curated selection across categories such as electronics, fashion, home essentials, beauty, and lifestyle products to meet your everyday needs. Our goal is to provide a seamless shopping experience with an easy-to-use website, secure payment options, fast shipping, and reliable customer support. Whether you're looking for the latest trends or everyday essentials, we're committed to delivering exceptional value, quality, and convenience with every purchase. </p>
//     <button onClick={handleShopNow}>Shop Now </button>

//     <div
//       style={{
//         display: "flex",
//         justifyContent: "left",
//         alignItems: "flex-start",
//         gap: "30px",
//         flexWrap: "wrap",
//       }}>
//         {products.map((product) => (
//           <ProductCard
//             key={product.sku}
//             {...product}
//           />
//         ))}
//     </div>

    
//     <div
//       className="button-demo"
//       style={{
//         display: "flex",
//         gap: "12px",
//         alignItems: "center",
//         flexWrap: "wrap",
//         margin: "15px 0 30px",
//       }}
//     >
//       {buttonVariants.map((button) => (
//         <div
//           key={`${button.variant}-${button.size}`}
//           title={`This is a ${button.size} ${button.variant} button`}
//         >
//           <Button
//             text={button.text}
//             onClick={handleShopNow}
//             variant={button.variant}
//             size={button.size}
//           />
//         </div>
//       ))}
//     </div>

//     <div className="card-demo" 
//       style={{
//         display: "flex",
//         gap: "25px",
//         alignItems: "flex-start",
//         flexWrap: "wrap",
//         marginBottom: "30px",
//   }}>
//       {cardVariants.map((card) => (
//         <Card
//           key={card.variant}
//           title={card.title}
//           variant={card.variant}
//         >
//           <p>This is the {card.variant} card.</p>
//         </Card>
//       ))}
//     </div>

//     <h2>Interactive Product</h2>

//     <ProductQuantitySelector
//       productName="Wireless Mouse"
//       price={799}
//       description="A high-quality wireless mouse suitable for everyday use."
//     />
//   </>
//   )
// }


export default App
