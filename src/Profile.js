import React from 'react';
import './Profile.scss';
import FadeIn from 'react-fade-in';

const Profile = ({ title, body, image, date }) => {
	return (
		<article>
			<FadeIn>
				<h6>{date}</h6>
				<h1>{title.toUpperCase()}</h1>
				<img src={image} alt={title} />
				<p>{body}</p>
				<p>{body}</p>
				<p>{body}</p>
			</FadeIn>
		</article>
	);
};

export default Profile;
