import Resume from "../assets/FakeResume.png";

function BasicExample() {
  return (
    <div
      style={{ height: "80vh", width: "98vw" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div>
        <a href={Resume} download="FakeResume">
          <img src={Resume} alt="Resume" style={{ width: "300px" }} />
        </a>
        <h3>Click for Resume</h3>
      </div>
    </div>
  );
}

export default BasicExample;
