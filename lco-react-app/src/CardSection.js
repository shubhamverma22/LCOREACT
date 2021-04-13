import React from "react";
import Cards from "./Cards";

const CardSection = () => {
	return (
		<section className="contact bg-success ">
			<div className="container ">
				<h2 className="text-white">We provide best Service</h2>
				<div className="row">
					<div className="col-4">
						<Cards title="Malaysia" buttonText="Book a Trip" cardText="Know which countries are open to travel and plan your holiday accordingly. Learn about the latest visa guidelines and quarantine mandates for a hassle-free experience."/>
					</div>
					<div className="col-4">
						<Cards title="Singapore" buttonText="Book A Trip" cardText="Know which countries are open to travel and plan your holiday accordingly. Learn about the latest visa guidelines and quarantine mandates for a hassle-free experience."/>
					</div>
					<div className="col-4">
						<Cards title="Thiland" buttonText="Book A Trip" cardText="Know which countries are open to travel and plan your holiday accordingly. Learn about the latest visa guidelines and quarantine mandates for a hassle-free experience."/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardSection;
