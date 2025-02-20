import paul from "../../../app/assets/img/paul.png";
import robert from "../../../app/assets/img/rober.png";
import quote from "../../../app/assets/img/”.png";
import Container from "../../atoms/container/container";
export default function Carusel() {
  return (<Container>
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"70%",
        margin:"25vh auto",
        gap:"20px",
        
        }}>
      <div style={{
        width:"55%",
        border: "1px solid #FCD54C",
        padding: "3vh 10vh",
        position:"relative",
        color:"lightgray"
      }}>
        <img style={{position:"absolute", top:"-80px",left:"55px"}} src={paul} alt="" />
        <img style={{position:"absolute", left:"80%"}} src={quote} alt="" />
        <h3 style={{fontSize:"28px"}}>Paul</h3>
        <h5 style={{fontSize:"20px"}}>Owner in <span style={{color:"#FCD54C"}}> Paul.com</span></h5>
        <p style={{fontSize:"18px"}}>
          Projects for many large domestic and foreign corporations, enterprises
          in many elds such as nance, banking, F&B, education, communication.А
        </p>
      </div>
      <div style={{
        width:"55%",
        border: "1px solid #FCD54C",
        padding: "3vh 10vh",
        position:"relative",
        color:"lightgray"
      }}>
        <img style={{position:"absolute", top:"-80px",left:"55px"}} src={robert} alt="" />
        <img style={{position:"absolute", left:"80%"}} src={quote} alt="" />
        <h3 style={{fontSize:"28px"}}>Robert</h3>
        <h5 style={{fontSize:"20px"}}>Founder in <span style={{color:"#FCD54C"}}> Apple inc.</span></h5>
        <p style={{fontSize:"18px"}}>
          Founded in 2007, Sparch is specializing in providing innovative
          services such as website design, brand identity and marketing
        </p>
      </div>
    </div>
      <div style={{display:"flex",alignItems:"center", justifyContent:"center", margin:"auto",gap:"10px",width:"30%"}}>
        <div style={{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#FCD54C"}}></div>
        <div style={{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"grey"}}></div>
        <div style={{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"grey"}}></div>
      </div>
    </Container>);
}
