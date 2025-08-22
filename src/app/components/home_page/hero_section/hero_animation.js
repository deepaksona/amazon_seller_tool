"use client";
import styles from "../../../page.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/earth4.glb");
  return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />;
}
useGLTF.preload("/earth4.glb");

export default function HeroAnimation() {
  return (
     <div className={styles.heroAnimation}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Basic lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Model */}
        <Model />

        {/* Controls */}
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />

        {/* 🌅 HDRI environment for proper colors */}
        <Environment preset="sunset" background={false} />
      </Canvas>
     </div>
  );
}


// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import styles from "../../../page.module.css";
// import Image from "next/image";


// export default function HeroAnimation() {
//   const lottieRef = useRef(null);

//   useEffect(() => {
//     import("@lottiefiles/lottie-player");
 
//     if (lottieRef.current) {
//       gsap.from(lottieRef.current, { opacity: 0, x: 50, duration: 1, delay: 0.5 });
//     }
//   }, []);

//   return (


//     <Image
//     ref={lottieRef}
//     src="/images/laptoprmbg.png" alt="laptop" className={styles.heroAnimation} width={410} height={410} ></Image>
//     // <lottie-player
//     //   ref={lottieRef}
//     //   src="/lotties/growth.json"
//     //   background="transparent"
//     //   speed="1"
//     //   className={styles.heroAnimation}
//     //   loop
//     //   autoplay
//     // ></lottie-player>
//   );
// }
