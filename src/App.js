import React, { Component } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import data from './data/data';
import Profile from './Profile';
import Footer from './Footer';
import './App.scss';

class App extends Component {
	constructor() {
		super();
		this.state = {
			value: 0,
			previous: 0,
			dates: null,
			information: data
		};
	}

	componentDidMount = () => {
		const dates = data.map(info => info.date);
		this.setState({
			dates
		});
	};

	render() {
		const selectedInfo = this.state.information.find(
			info => info.id - 1 === this.state.value
		);
		const { date, title, body, image } = selectedInfo;
		return (
			<>
				<nav>
					<h2>peer insight</h2>
					<h3>Project Timeline</h3>
					<div className='space'></div>
				</nav>
				<div className='top'></div>
				<div className='App'>
					<div style={{ width: '80%', height: '100px', margin: '0 auto' }}>
						<HorizontalTimeline
							index={this.state.value}
							indexClick={index => {
								this.setState({ value: index, previous: this.state.value });
							}}
							values={this.state.dates}
							getLabel={function(date) {
								return `${date.split(' ')[0].slice(0, 3)} ${
									date.split(' ')[1]
								}`;
							}}
							styles={{
								background: '#F4C900',
								foreground: 'white',
								outline: 'black'
							}}
						/>
					</div>
					<div className='text-center'></div>
				</div>
				<div className='bottom'></div>
				<Profile date={date} title={title} body={body} image={image} />
				<Footer />
			</>
		);
	}
}

export default App;
