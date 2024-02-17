// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// //import bag from "./next.svg";
// import { CreateCheckOutSession } from "../../api/create-checkout-session";
// //  import axios from "axios";

// export const simpleItem = (item) => {
//   return {
//     name: item.name,
//     description: item.description,
//     quantity: item.quantity,
//     image: item.image,
//     price: item.price,
//   };
// };

// function Shop() {
//   // const [item, setItem] = useState({
//   //   name: "Apple AirPods",
//   //   description: "Latest Apple AirPods.",
//   //   image: bag,
//   //   quantity: 0,
//   //   price: 999,
//   // });
//   const [item, setItem] = useState({
//     name: "Apple AirPods",
//     description: "Latest Apple AirPods.",
//     image: "/path/to/bag.png",
//     quantity: 0,
//     image: bag,
//     price: 999,
//   });
//   // const [item, setItem] = useState();

//   // const fetchProducts = async () => {
//   //   const response = await axios.get("/api/getproducts");

//   //   setItem(response.data);
//   // };

//   // useEffect(() => {
//   //   fetchProducts();
//   // }, []);
//   // const simpleItem = {
//   //   name: item.name,
//   //   description: item.description,
//   //   quantity: item.quantity,
//   //   image: item.image,
//   //   price: item.price,
//   // };
//   const changeQuantity = (value, number) => {
//     setItem({ ...item, quantity: Math.max(0, value) });
//   };

//   const onQuantityPlus = () => {
//     changeQuantity(item.quantity + 1);
//   };

//   const onQuantityMinus = () => {
//     changeQuantity(item.quantity - 1);
//   };
//   const onInputChange = (e) => {
//     changeQuantity(parseInt(e.target.value));
//   };
//   return (
//     <div className="body-shop">
//       <nav>
//         <div className="arrow">
//           <Link href="/">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className="bi bi-arrow-left-square"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
//               />
//             </svg>
//           </Link>
//         </div>
//         <div className="group">
//           <Link href="/">Home</Link>
//           <Link href="./About">About</Link>

//           <Link href="./blog">Blog</Link>

//           <Link href="./shop">Shop</Link>

//           <Link href="./services">Personal styled Services</Link>
//         </div>
//       </nav>
//       <h1>Shop</h1>

//       <main>
//         <div className="shadow-lg border rounded p-2 ">
//           <Image alt="product" src={item.image} width={300} height={150} />
//           <h2 className="text-2xl">$ {item.price}</h2>
//           <h3 className="text-xl">{item.name}</h3>
//           <p className="text-gray-500">{item.description}</p>
//           <p className="text-sm text-gray-600 mt-1">Quantity:</p>
//           <div className="border rounded">
//             <button
//               onClick={onQuantityMinus}
//               className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600"
//             >
//               -
//             </button>
//             <input
//               type="number"
//               className="p-2"
//               onChange={onInputChange}
//               value={item.quantity}
//             />
//             <button
//               onClick={onQuantityPlus}
//               className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600"
//             >
//               +
//             </button>
//           </div>
//           <p>Total: ${item.quantity * item.price}</p>
//           <button
//             disabled={item.quantity === 0}
//             onClick={CreateCheckOutSession}
//             className="bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100"
//           >
//             Buy
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }
// export default Shop;

// // function Shop() {
// //   const [products, setProducts] = useState([]);

// //   const fetchProducts = async () => {
// //     console.log("We are calling fetchProducts");
// //     const response = await axios.get("/api/getproducts");
// //     console.log(response);
// //   };

// //   fetchProducts();

// //   return <div>Hello</div>;
// // }

// // export default Shop;
