import Button from "../../atoms/button/button";

export default function ContactUs(){
    return <section className="contact_us">
           <p>Do you have any questions?</p>
           <h2>Contact us</h2>
           <form style={{display:"flex"}}>
            <input type="email" name="email" />
            <Button>Send</Button>
           </form>
    </section>
}