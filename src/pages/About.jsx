import fotosaya from "../assets/selff.jpg";

export default function About() {
  return (
    <div className="page center">
      <h1>About Me</h1>
      <img src={fotosaya} alt="Foto Elvina" className="profile-pic" />

      <p>
        Halo 👋, saya <b>Elvina Putri Olivia</b>, seorang pelajar SMKN 8 Malang jurusan 
        Rekayasa Perangkat Lunak. Saya memiliki minat dalam <b>Web Development</b> 
         dan sedang belajar <b>React</b>, serta pengembangan 
        aplikasi Android.
      </p>
      <p>
        Saya bercita-cita menjadi <b>Software Engineer</b> dan ingin membangun aplikasi 
        yang bermanfaat untuk banyak orang.
      </p>
    </div>
  );
}
