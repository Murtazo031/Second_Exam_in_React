import logo from "../../../app/assets/img/Logo (1).png";
import Button from "../../atoms/button/button";
import Container from "../../atoms/container/container";
import socials from "../../../app/assets/img/socials.png"

export default function Footer() {
  return (<Container>
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <img src={logo} alt="" />
      <div style={{
        display:'flex',
        justifyContent:"space-between",
        alignItems:"start",
        color: "lightgrey",
        width: "100%",
        margin:"10vh 0",
        lineHeight:"2"
      }}>
        <div
          style={{
            width: "17%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: "5px",
          }}
        >
            <h3>Buy</h3>
            <p>Apartment in Dubai <br />
            House in Dubai <br />
            Apartments in Dubai <br />
            Loft in Dubai <br />
            Penthouse in Dubai <br />
            Villa in Dubai</p>
        </div>
        <div
          style={{
            width: "17%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: "5px",
          }}
        >
            <h3>Services</h3>
            <p>Property management in Dubai, UAE <br />
            Sell property in Dubai, UAE <br />
            Rent property in Dubai, UAE <br />
            Investments in Dubai, UAE <br />
            Real estate for cryptocurrency in Dubai <br />
            Moving to Dubai, UAE</p>
        </div>
        <div
          style={{
            width: "17%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: "5px",
          }}
        >
            <h3>Information</h3>
            <p>Video <br />
            Podcasts <br />
            Laws <br />
            Questions and answers <br />
            Books <br />
            Articles</p>
        </div>
        <div
          style={{
            width: "17%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: "5px",
          }}
        >
            <h3>About company</h3>
            <p>Jobs <br />
            Story <br />
            Licenses <br />
            Why are we <br />
            Real estate agency</p>
        </div>
        <div
          style={{
            width: "17%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
            <h3>Contact</h3>
            <p>964 Worthington Drive
            Dubai, UAE</p>
            <p>dubairealty@mail.com</p>
            <Button btnstyle={{
                backgroundColor: "#FCD54C",
                border:"none",
                padding :"3vh 2vh",
                fontSize:"16px",
                borderRadius :"5px",
                fontWeight:"bold",
            }}>Book a consultation</Button>
        </div>
      </div>
        <div style={{
            color:"lightgrey",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            width:"100%",
            padding:"10px 0",
            gap:"10px"
        }}>
            <p>Copyright © 2022 Dubai Realty</p>
            <img src={socials} alt="" />
        </div>
    </footer>
    </Container>);
}
