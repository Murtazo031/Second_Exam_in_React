import Container from "../../atoms/container/container";
import logo from "../../../app/assets/img/logoHero.png"
import Button from "../../atoms/button/button";

export default function HeroSection() {
  return (<Container>
    <main
      className="heroSection"
    ><div style={{
      position:"relative",
      textAlign:"start",
      width:"81%",
      maxWidth:"1200px",
   }}>
       <img style={{position:"absolute",left:"-15px"}} src={logo} alt="" />
       <p>Lorem, IPSUM.</p>
   <h1 style={{
      fontSize:"68px",

   }}>
     Welcome home <br /> <span style={{color:"#FCD54C"}}>To</span> luxury
   </h1>
   <Button btnstyle={{backgroundColor:"transparent", color:"white",fontSize:"24px",border:"none",fontWeight:"700"}}>Book a consultation </Button>
   </div>
   <div
     style={{
       display: "flex",
       alignItems: "center",
       justifyContent: "space-between",
       backgroundColor: "#272727",
       padding: "0vh 5vh",
       width:"60%",
       fontSize:"24px"
     }}
   >
     <div style={{ display: "flex",alignItems:"center", gap: "1vh" }}>
       <h1 style={{fontSize:"58px"}}>01</h1>{" "}
       <p>
         Lorem, <br />
         ipsum dolor.
       </p>{" "}
     </div>
     <div style={{ display: "flex",alignItems:"center", gap: "1vh" }}>
       <h2 style={{fontSize:"58px"}}>02</h2>{" "}
       <p>
         Lorem, <br /> ipsum dolor.
       </p>{" "}
     </div>
     <div style={{ display: "flex",alignItems:"center", gap: "1vh" }}>
       <h2 style={{fontSize:"58px"}}>03</h2>{" "}
       <p>
         Lorem, <br /> ipsum dolor.
       </p>{" "}
     </div>
   </div>
    </main>
    </Container>);
}
