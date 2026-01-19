function Header() {
  return (
    <div
      className="col-md-12 bg-dark text-light d-flex align-items-center justify-content-between px-5"
      style={{ height: "40px", fontSize: "20px" }}
    >
      <span className="fw-semibold">Jarvis</span>

      <button
        className="btn btn-sm btn-outline-light py-0 px-2"
        style={{ fontSize: "15px", lineHeight: "2" }}
        onClick={() => console.log("Logout")}
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
