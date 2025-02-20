import Button from "../../atoms/button/button";
import Container from "../../atoms/container/container";

export default function Useful() {
  return (
    <Container>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "32px" }}>Useful articles</h2>
          <Button
            btnstyle={{
              backgroundColor: "transparent",
              color: "grey",
              border: "none",
            }}
          >
            View all articles{">"}
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "3vh",
            width: "100%",
            margin: "auto",
            padding: "2vh 0",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="article1">
            <Button>Discover Architecture</Button>
          </div>
          <div className="article2">
            <p style={{color:"lightgrey"}}>Jule 03, 2022</p>
            <h3 style={{fontSize:"28px"}}>Discover Architecture</h3>
            <p style={{color:"grey",fontSize:"20px"}}>
              Projects for many large domestic and foreign corporations,
              enterprises in many elds such
            </p>
            <Button btnstyle={{color:"#FCD54C"}}>Learn more {">"}</Button>
          </div>
          <div className="article3">
            <Button>Discover Architecture</Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
