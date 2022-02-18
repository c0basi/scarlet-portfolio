import { IconContext } from 'react-icons';
import { BiPaint } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';
import { BsFillPhoneFill } from 'react-icons/bs';
import { AiFillFormatPainter } from 'react-icons/ai';
import { FaPenSquare } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';

import './Services.css';
const Services = () => {
	return (
		<IconContext.Provider value={{ className: 'services-icons' }}>
			<section className="services">
				<div className="service services__service-1">
					<BiPaint />
					<h3 className="services--title services__servide-1--title">
						UI Design
					</h3>
					<p className="services__service-1--para services--para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
						quasi optio dignissimos ipsam eos veritatis aut! Corporis hic
						temporibus quae quos..
					</p>
				</div>
				<div className="service services__service-2">
					<BsCardChecklist />
					<h3 className="services--title services__servide-2--title">
						Web Development
					</h3>
					<p className="services__service-3--para services--para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
						quasi optio dignissimos ipsam eos veritatis aut! Corporis hic
						temporibus quae quos..
					</p>
				</div>
				<div className="service services__service-3">
					<BsFillPhoneFill />
					<h3 className="services--title services__servide-3--title">
						App Development
					</h3>
					<p className="services__service-3--para services--para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
						quasi optio dignissimos ipsam eos veritatis aut! Corporis hic
						temporibus quae quos..
					</p>
				</div>
				<div className="service services__service-4">
					<AiFillFormatPainter />
					<h3 className="services--title services__servide-4--title">
						Type Design
					</h3>
					<p className="services__service-4--para services--para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
						quasi optio dignissimos ipsam eos veritatis aut! Corporis hic
						temporibus quae quos..
					</p>
				</div>
				<div className="service services__service-5">
					<FaPenSquare />
					<h3 className="services--title services__servide-5--title">
						Blog Writer
					</h3>
					<p className="services__service-5--para services--para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
						quasi optio dignissimos ipsam eos veritatis aut! Corporis hic
						temporibus quae quos..
					</p>
				</div>
				<div className="service services__service-6">
					<FaProjectDiagram />
					<h3 className="services--title services__servide-6--title">
						Project Managment
					</h3>
					<p className="services__service-6--para services--para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
						quasi optio dignissimos ipsam eos veritatis aut! Corporis hic
						temporibus quae quos..
					</p>
				</div>
			</section>
		</IconContext.Provider>
	);
};

export default Services;
