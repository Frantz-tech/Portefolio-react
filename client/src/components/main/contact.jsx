import '../../styles/contact.css';
export const contactRef = { current: null };

function ContactMe() {
  return (
    <>
      <section className="contact-me">
        <h2 ref={contactRef}>Contact Me</h2>
        <div className="container-contact-me">
          <form className="formContact" action="" method="post">
            <label htmlFor="name">First Name : </label>
            <input type="text" name="name" id="name" />
            <label htmlFor="last-name"> Last Name : </label>
            <input type="text" name="last-name" id="last-name" />
            <label htmlFor="message"> Message : </label>
            <textarea type="text" name="message" id="message" />
            <button className="sendbtn">Envoyer </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
