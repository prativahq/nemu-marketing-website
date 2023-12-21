// import React, { useRef, useState } from "react";
// import {
//   ScrollSlider,
//   ScrollSliderSensitivity,
// } from "@nikolajs/react-scroll-slider";

// export const Parallax = () => {
//   const ref = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   return (
//     <ScrollSlider
//       ref={ref}
//       withProgress={true}
//       onSlideChange={setActiveIndex}
//       onProgress={setProgress}
//       sensitivity={ScrollSliderSensitivity.HIGH}
//       animationOptions={{
//         easing: "linear",
//       }}
//       slides={[
//         {
//           children: <h1> Slide 1 </h1>,
//         },
//         {
//           children: <h1> Slide 2 </h1>,
//         },
//         {
//           children: <h1> Slide 3 </h1>,
//         },
//       ]}
//     ></ScrollSlider>
//   );
// };
