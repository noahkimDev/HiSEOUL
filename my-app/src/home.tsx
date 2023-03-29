import React from "react";
import Culture2 from "./culture/culture2";
import SeoulPics from "./seoul-pics/seoul-pics";
import Navbar2 from "./navbar/navbar2";
import Hospital from "./hospital/hospital";
import Icon from "./icon/icon";

function Home(props: any) {
  console.log("제발제발", props.userCheck);
  return (
    <>
      <Navbar2 user={props.userCheck}></Navbar2>
      <SeoulPics></SeoulPics>
      <div style={{ clear: "both" }}></div>

      <Icon></Icon>
      <Culture2></Culture2>
      <Hospital></Hospital>
    </>
  );
}

export default Home;
