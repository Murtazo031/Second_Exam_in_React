import Button from "../../atoms/button/button";
import Container from "../../atoms/container/container";

export default function ContactUs() {
  return (
    <Container>
      {" "}
      <section className="contact_us">
        <p>Do you have any questions?</p>
        <h2>Contact us</h2>
        <form style={{ display: "flex" }}>
          <input type="email" name="email" />
          <Button>Send</Button>
        </form>
      </section>
    </Container>
  );
}
