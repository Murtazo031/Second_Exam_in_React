// import { useState } from "react"
import logo from "../../../app/assets/img/lg.png"
import Button from "../../atoms/button/button"
import Container from "../../atoms/container/container"
import PagesNavbar from "../../molecules/pages-nav/pages-navbar"


export default function Header (){
    return <Container   >
    <header style={{
        backgroundColor: "#272727",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth:"auto",
    }}>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
        }}>
            <img src={logo} alt="" />            
            <PagesNavbar nav_style={{
                display: "flex",
                listStyle: "none",
                alignItems: "center",
                justifyContent:"start",
                gap:"4vh",
                width:"50%",
                fontSize:"16px",    
            }}
            select_style={{
                border:"none",
                outline:"none",
                backgroundColor:"transparent",
                color:"white",
                appearance:"none",
                width:"45px",
                
            }}/>

            <div style={{
                display:"flex",
                alignItems:"center",
                width:"40%",
                justifyContent:"space-between",
            }}>
            <Button btnstyle={{
                with:"primary",
                backgroundColor:"#FCD54C",
                color: "#000",
                fontSize:"18px",
                padding:"2vh",
                borderRadius:"5px",
                border:"none",
                fontWeight:"bold",
            }}>Book a consultation</Button>
            <div>
                <button style={{border:"none", backgroundColor:"transparent", color:"white",borderRight:"1px solid lighgrey"}}>RU</button>
                <button style={{border:"none", backgroundColor:"transparent", color:"white"}}>EN</button>
            </div>
            <h3>+992988070031</h3>
            </div>
        </div>
    </header>
    </Container>
}