import React from "react";

import { Nav } from "./nav.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./card.jsx";
import { Footer } from "./footer.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		const cardsArray = [
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			},
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			},
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			},
			{
				title: "Card Tittle",
				bodyText:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
				imgLink: ""
			}
		];
		return (
			<div>
				<Nav />
				<Jumbotron />
				<Cards cardsArray={cardsArray} />
				<Footer />
			</div>
		);
	}
}
