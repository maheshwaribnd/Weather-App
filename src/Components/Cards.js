import React from 'react';
import Card1 from './indivualCards/Card1';
import Card2 from './indivualCards/Card2';
import Card3 from './indivualCards/Card3';
import Card4 from './indivualCards/Card4';
import Card5 from './indivualCards/Card5';
import Card6 from './indivualCards/Card6';

function Cards() {
	return (
		<div className="flex flex-wrap justify-between gap-3 pb-1">
			<Card1
				name="Humidity"
				img="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-drop-graphic-design-icongeek26-outline-icongeek26.png"
			/>
			<Card2 name="Wind" img="https://img.icons8.com/ios/50/null/wind--v1.png" />
			<Card3
				name="Precipitation"
				img="https://img.icons8.com/fluency-systems-regular/48/null/partly-cloudy-rain--v1.png"
			/>
			<Card4 name="UV index" img="https://img.icons8.com/ios/50/null/sun--v1.png" />
			<Card5
				name="Feels like"
				img="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Temperature-basic-ui-elements-others-inmotus-design.png"
			/>
			<Card6 name="Chance of rain" img="https://img.icons8.com/fluency-systems-regular/48/null/light-rain.png" />
		</div>
	);
}

export default Cards;
