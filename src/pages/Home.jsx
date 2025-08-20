import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page center">
      <h1>Hi, I'm <span className="highlight">Elvina</span></h1>
      <p>
        Saya pelajar SMKN 8 Malang jurusan RPL.  
        Portofolio ini dibuat menggunakan <b>React SPA</b>.
      </p>

      <div className="buttons">
        <Link to="/about" className="btn">About Me</Link>
        <Link to="/info" className="btn secondary">My Skills</Link>
      </div>
    </div>
  );
}
