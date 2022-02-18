import './WorkSection.css';

import design from '../../img/portfolio-design-01-1.jpg';
import creative from '../../img/portfolio-design-01-1.jpg';
import creative2 from '../../img/portfolio-design-01-1.jpg';
import branding from '../../img/portfolio-design-01-1.jpg';
import branding2 from '../../img/portfolio-design-01-1.jpg';
import print from '../../img/portfolio-design-01-1.jpg';

const WorkSection = () => {
	return (
		<section className="work">
			<div className="work__card">
				<img src={design} alt="poster" />
			</div>
			<div class="work__card">
				<img src={creative} alt="paper-bag" />
			</div>
			<div class="work__card">
				<img src={creative2} alt="cloth-bag" />
			</div>
			<div class="work__card">
				<img src={branding} alt="branding" />
			</div>
			<div class="work__card">
				<img src={branding2} alt="cup" />
			</div>
			<div class="work__card">
				<img src={print} alt="book-cover" />
			</div>
		</section>
	);
};

export default WorkSection;
