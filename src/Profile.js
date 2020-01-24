import React from 'react';
import './Profile.scss';
import Fade from 'react-reveal/Fade';

const Profile = ({ title, body, image, date }) => {
	return (
		<article>
			<Fade bottom spy={title} appear={true} distance='50px'>
				<h6>{date}</h6>
				<h1>{title.toUpperCase()}</h1>
				<img src={image} alt={title} />
				<main>
					<p>
						<span>{body.slice(0, 1)}</span>
						{body.slice(1)}
					</p>
					<p>{body}</p>
				</main>
			</Fade>
		</article>
	);
};

export default Profile;
