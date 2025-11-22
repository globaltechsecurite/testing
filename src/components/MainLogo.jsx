import Image from "next/image";
import React from "react";
/* 
    width="238"
      height="52"
*/
const MainLogo = () => {
  return (
    <Image
      src="/logo.png"
      width={320}
      height={60}
      alt="mirasaka logo"
      title="mirasaka logo"
    />
  );
};

export default MainLogo;
