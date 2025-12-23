import mentorImg from '../assets/MovieApp.png';
import menImg from '../assets/VitaminModule.png';
export default function Projects() {
return (
<section className="projects">
<h1>Projects</h1>
<div className="project-grid">
<div className="card">
<img src={mentorImg} alt="Web app to find a mentor" />
<h3>Movie App</h3>
<p>React Js, JavaScript, CSS, Html</p>
</div>
<div className="card">
<img src={menImg} alt="Web app to find a mentor" />
<h3>Vitamin Module</h3>
<p>React JS, JavaScript, UI/UX</p>
</div>
</div>
</section>
);
}