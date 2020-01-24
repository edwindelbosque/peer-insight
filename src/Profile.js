import React from 'react';
import './Profile.scss';
import Fade from 'react-reveal/Fade';

const Profile = ({ title, body, image, date }) => {
	return (
		<article>
			<Fade bottom spy={title} appear={true} distance='50px'>
				<h6>{date.toUpperCase()}</h6>
				<h1>{title.toUpperCase()}</h1>
				<main>
					<p>
						<span>{body.slice(0, 1)}</span>
						{body.slice(1)}
					</p>
					<p>{body}</p>
					<img src={image} alt={title} />
				</main>
			</Fade>
		</article>
	);
};

export default Profile;
