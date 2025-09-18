export const expertiseRef = { current: null };

function Expertise() {
  return (
    <>
      <section className="expertise">
        <h2 ref={expertiseRef}>My Expertise</h2>
        <div className="container-expertise"></div>
      </section>
    </>
  );
}

export default Expertise;
