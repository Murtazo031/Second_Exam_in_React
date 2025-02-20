import downArrow from "../../../app/assets/img/downArrow.png";

export default function FAQ() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        width: "70%",
        margin: "5vh auto",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "52px" }}>FAQ</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2vh",
          marginBottom: "2vh",
          cursor: "pointer",
          fontSize:"22px",
          fontWeight:"bold",
        }}
      >
        <p >
          The largest and oldest Quotations Page on the Web with about 30
          categories
        </p>
        <img src={downArrow} alt="" />
      </div>
      <p style={{fontSize:"18px",marginLeft:"30px"}}>
        Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
        Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
        Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit
        amet pellentesque neque est id tortor. In egestas, erat a dapibus
        dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus.
        Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat
        placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec
        imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget
        auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan
        pretium tincidunt. Etiam viverra ultrices est vitae suscipit.
        Pellentesque elementum purus non nisl pharetra consequat. Nunc in
        venenatis orci.
      </p>
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2vh",
          marginBottom: "2vh",
          cursor: "pointer",
          fontSize:"22px",
          fontWeight:"bold",
        }}>
        <p>
          A huge collection of inspirational quotes, thoughts of greatest minds
          in history
        </p>
        <img style={{ rotate: "-90deg" }} src={downArrow} alt="" />
      </div>
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2vh",
          marginBottom: "2vh",
          cursor: "pointer",
          fontSize:"22px",
          fontWeight:"bold",
        }}>
        <p>
          A huge collection of inspirational quotes, thoughts of greatest minds
          in history
        </p>
        <img style={{ rotate: "-90deg" }} src={downArrow} alt="" />
      </div>
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2vh",
          marginBottom: "2vh",
          cursor: "pointer",
          fontSize:"22px",
          fontWeight:"bold",
        }}>
        <p>
          A huge collection of inspirational quotes, thoughts of greatest minds
          in history
        </p>
        <img style={{ rotate: "-90deg" }} src={downArrow} alt="" />
      </div>
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2vh",
          marginBottom: "2vh",
          cursor: "pointer",
          fontSize:"22px",
          fontWeight:"bold",
        }}>
        <p>
          A huge collection of inspirational quotes, thoughts of greatest minds
          in history
        </p>
        <img style={{ rotate: "-90deg" }} src={downArrow} alt="" />
      </div>
    </section>
  );
}
