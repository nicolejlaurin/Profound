import React from 'react';
import Img from '../images/CN-9.jpg';

import { FaQuoteLeft} from 'react-icons/fa'
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";


export default () => (

	<div className='aboutpage-CN'>
		<div className='abt-back'>
			<h4>
			ABOUT US
			</h4>
			<p>
			Pro-Found is dedicated to providing the highest quality representation that will plan, support, and guide our clients throughout their entire professional life. We excel with a different approach in the sports business world. We understand playing careers don’t last forever, but we create sports entrepreneurs.Our company is committed to creating an inclusive and diverse workspace, building long lasting relationships beyond its contractual.
	    </p>
		</div>
		<div className='abt-back2'>
			<h4> Our Values</h4>
			<hr className="underline"></hr>
			<div className='abt-p'>
				<div>
					<h5> Integrity </h5>
					<p> We model high character, strong morals, and positive core values at Pro-Found.</p>
				</div>
				<div>
					<h5> Respect </h5>
					<p>  Respect is a guiding value on how to treat people and our dignity at Pro-Found. </p>
				</div>
				<div>
					<h5> Inclusiveness </h5>
					<p>  We value every client. This is the culture we created at our boutique style agency.  </p>
				</div>
			</div>
		</div>

		<div className='animated reveal fade-bottom aboutpage-split'>
		<h4>Meet the Team</h4>

   		<div class="test-container">
      		<div class=" color-div test-div animated reveal fade-bottom">
				<div class="pic">
					<img class="testimony-pic" src={Img} alt=""></img>
				</div>
				<h2> Clinton Noel</h2>
				<h3>SPORTS MARKETING AGENT</h3>
				<p>
				Clinton Noel is a 2019 graduate of Huston Tillotson University undergrad (HBCU) and 2021 graduate of St. Thomas University with a MBA in Sports Administration, specialization in Marketing certification. Noel finished his collegiate basketball career at his alma mater Huston Tillotson. Shortly after graduation, Noel followed his desires and passion to help athletes optimize their careers. Noel's core values are integrity, dedication, transparency, and innovation.
				</p>
			  </div>
	
    </div>
  </div>
		
	</div>
);
