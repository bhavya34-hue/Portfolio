import profileImg from '../assets/BhavyaImage.jpg';

export default function Hero() {
return (
<section className="hero">
<div className="hero-text">
<h1>Portfolio</h1>
<h2>Hello, my name is Bhavya Bhat.<br/>I’m a <span>front-end developer</span></h2>
<p>
I am a beginning front-end developer. My primary focus is on creating
dynamic and interactive user interfaces. I enjoy building visually
appealing and user-friendly web experiences.
</p>
<a href="https://github.com/bhavya34-hue/Movie-App.git" target="_blank">
<button>Check projects →</button>
</a>
</div>
<img src={profileImg} alt="Profile" className="hero-image"/>
</section>
);
}