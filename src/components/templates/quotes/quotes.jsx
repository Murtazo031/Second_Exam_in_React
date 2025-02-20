import place from "../../../app/assets/img/place.png";
import place1 from "../../../app/assets/img/place2.png";
import Container from "../../atoms/container/container";

export default function Quotes() {
  return (<Container>
    <section style={{
        display:"flex",
        flexDirection:"column",
        width:"60%",
        margin:"auto",
    }}>
      <div style={{
        color:"white",
        fontSize:"28px",
        padding:"5vh 3vh",
        margin:"5vh 0",
        border:"1px solid #FCD54C",
      }}>
        <p>
          “Don’t limit yourself. Many people limit themselves to what they think
          they can do. You can go as far as your mind lets you. What you
          believe, remember, you can achieve.” <span style={{color:"#FCD54C"}}> — Mary Kay Ash</span>
        </p>
      </div>
      <div>
      <div style={{display:"flex",
        justifyContent:"space-between",
        gap:"5vw"
      }}>
        <div>
          <img style={{width:"100%"}} src={place} alt="" />
        </div>
        <div>
          <img style={{width:"100%"}}  src={place1} alt="" />
        </div>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        gap:"5vw"
      }}>
        <div style={{
            display:"flex",
            color:"lightgray",
            fontSize:"20px",
            padding:"2vh 0"
  
        }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae quis porro laborum impedit unde enim nihil saepe officia
            et, eos, velit aut adipisci itaque, doloribus numquam sequi facere
            dignissimos! Nesciunt repudiandae, dolores ut delectus eos
            molestias. Ipsum, perferendis possimus. Est distinctio omnis ea fuga
            illo? Non quaerat reiciendis reprehenderit corrupti?
          </p>
        </div>
        <div style={{
            display:"flex",
            color:"lightgray",
            fontSize:"20px",
            padding:"2vh 0"
  
        }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            eius odit eum vero vitae consequatur ex ullam, in architecto alias
            minus, pariatur, temporibus dolore sit fugiat natus nostrum
            exercitationem. Quos sequi, sunt similique sint nisi vero laborum
            enim praesentium repellendus consequuntur corrupti fugit atque,
            molestias placeat debitis, cupiditate ducimus. Consequatur.
          </p>
        </div>
        </div>
        </div>
    </section>
    </Container>);
}
