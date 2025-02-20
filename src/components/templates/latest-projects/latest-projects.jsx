import Button from "../../atoms/button/button";
import Container from "../../atoms/container/container";

export default function LatestProjects() {
  return (
    <Container>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            width: "70%",
            margin: "auto",
            padding: "3vh 0vh",
          }}
        >
          <h2>Latest projects</h2>
          <div style={{ display: "flex", gap: "5vh" }}>
            <div style={{color:"#FCD54C"}}>All</div>
            <div>Building</div>
            <div>Interior</div>
            <div>View all projects</div>
          </div>
        </header>
        <main style={{ padding: "3vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              className="villas"
              style={{
                width: "18%",
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                justifyContent: "end",
                padding: "5vh",
                height: "350px",
                backgroundColor: "red",
              }}
            >
              <Button
                btnstyle={{
                  border: "none",
                  color: "white",
                  backgroundColor: "transparent",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Villas
              </Button>
            </div>
            <div
              style={{
                width: "18%",
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "5vh",
                height: "350px",
                backgroundColor: "#FCD54C",
              }}
            >
              {" "}
              <h2>Dubai</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos exercitationem vitae nostrum beatae odit provident
                corporis maxime officiis numquam quo.
              </p>
              <Button
                btnstyle={{
                  border: "none",
                  color: "black",
                  backgroundColor: "transparent",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                See projects {">"}
              </Button>
            </div>
            <div
              className="houses"
              style={{
                width: "18%",
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                justifyContent: "end",
                padding: "5vh",
                height: "350px",
              }}
            >
              <Button
                btnstyle={{
                  border: "none",
                  color: "white",
                  backgroundColor: "transparent",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Houses
              </Button>
            </div>
            <div
              className="villas1"
              style={{
                width: "18%",
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                justifyContent: "end",
                padding: "5vh",
                height: "350px",
              }}
            >
              <Button
                btnstyle={{
                  border: "none",
                  color: "white",
                  backgroundColor: "transparent",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Villas
              </Button>
            </div>
          </div>
        </main>
        <div style={{display:"flex",justifyContent:"center",width:"100%",gap:"15px",marginTop:"5vh"}}>
          <div style={{width:"10px", height:"10px",borderRadius:"50%",backgroundColor:"#FCD54C"}}></div>
          <div style={{width:"10px", height:"10px",borderRadius:"50%",backgroundColor:"grey"}}></div>
          <div style={{width:"10px", height:"10px",borderRadius:"50%",backgroundColor:"grey"}}></div>
        </div>
      </section>
    </Container>
  );
}
