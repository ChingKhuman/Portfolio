import React, {
  Component,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vivo from "../assets/planet.svg";
import vivo1 from "../assets/earth4.svg";

import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Header from "./Intro/Header";
import Services from "./Services/Services";
import Experience from "./Experience/Experience";
import Works from "./Works/Works";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";
import axios from "axios";
import Test from "./test";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const Home = () => {
  // const [getdata, setGetdata] = useState();
  // //http get
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       console.log(response);
  //       setGetdata(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <UserContext.Provider value={"Ching"}>
        <Test />
      </UserContext.Provider>
    </>
  );

  /* {getdata &
        getdata.map((data) => (
          <div>
            <h2>{data.title}</h2>
          </div>
        ))} */

  // return (
  //   <div className="section">
  //     <div className="container">
  //       <div className="column-left">
  //         {getdata.map((index) => {
  //           <div key={(index = id)}>{index.title}</div>;
  //         })}

  //         {/* {get.map((index) => {
  //           <div key={index.id}>
  //             <h3>{index.title}</h3>
  //           </div>;
  //         })} */}
  //         <motion.h1
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 1 }}
  //         >
  //           {" "}
  //           Welcome to my portfolio
  //         </motion.h1>

  //         {/* <p>{count}</p>
  //         <button onClick={() => setCount((c) => c + 1)}></button>
  //         <p>{caluculation}</p> */}
  //         <motion.p
  //           variants={fadeLeft}
  //           initial="hidden"
  //           animate="visible"
  //           transition={{ duration: 1 }}
  //         >
  //           Journey of my
  //           <br />
  //           Portfolio
  //         </motion.p>
  //         <Link to="/port">
  //           <motion.button
  //             className="button"
  //             whileHover={{ scale: 1.31 }}
  //             whileTap={{
  //               scale: 0.8,
  //               backgroundColor: "#67F6E7",
  //               border: "none",
  //               color: "#000",
  //             }}
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1, transition: { duration: 1 } }}
  //           >
  //             Get Started
  //           </motion.button>
  //         </Link>
  //       </div>
  //       <div className="column-right">
  //         <motion.img
  //           src={vivo}
  //           alt="planet"
  //           whileTap={{ scale: 0.9 }}
  //           drag={true}
  //           dragConstraints={{ left: 0, right: 258, top: 0, bottom: 50 }}
  //           initial={{ opacity: 0, y: -100 }}
  //           animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
  //         />
  //         <motion.img
  //           src={vivo1}
  //           alt=""
  //           whileTap={{ scale: 0.6 }}
  //           drag={true}
  //           dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
  //           initial={{ opacity: 0, x: 100 }}
  //           animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
  //         />
  //         <motion.img
  //           src={vivo}
  //           alt=""
  //           whileTap={{ scale: 0.8 }}
  //           drag={true}
  //           dragConstraints={{ left: 0, right: 258, top: 0, bottom: 50 }}
  //           initial={{ opacity: 0, x: -100 }}
  //           animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
  //         />
  //         <motion.img
  //           src={vivo1}
  //           alt=""
  //           whileTap={{ scale: 0.9 }}
  //           drag={true}
  //           dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
  //           initial={{ opacity: 0, y: 100 }}
  //           animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
  //         />
  //         {/* <img src={vivo1} alt="" />
  //             <img src={vivo} alt="" /> */}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Home;
// import Test from "./test";
// import Test1 from "./Test1";

// const Home = () => {
//   return (
//     <>
//       {/* <Test name="Test props" heroName="Flas" /> */}
//       {/* <Test name="Test1 props" heroName="Traveller" /> */}
//       <Test1 />
//     </>
//   );
// };
// export default Home;
