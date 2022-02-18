import './AboutMe.css';
import img from '../../img/content-img-02.jpg';
const AboutMe = () => {
	return (
		<section className="about-me">
			<div className="about-me__img">
				<img src={img} alt="ME" />
			</div>
			<div className="about-me__content">
				<h2 className="about-me__content--title">About Me</h2>
				<p className="about-me__content--para">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla
					distinctio, eum harum nemo, repellat culpa alias quod possimus aliquid
					recusandae dolorum velit officiis aliquam sint. Excepturi delectus
					iure natus?
				</p>
				<a href="#" className="about-me__content--link">
					Read More
				</a>
			</div>
		</section>
	);
};

export default AboutMe;
