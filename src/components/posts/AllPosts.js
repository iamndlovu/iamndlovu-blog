import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";

import postsStyles from "./AllPosts.module.scss";

const AllPosts = () => {
	const [AllPostsData, setAllPosts] = useState(null);

	useEffect(() => {
		//IIFE to set all posts [state]
		(async () => {
			try {
				const data = await sanityClient.fetch(
					//GROQ
					`*[_type == "post"] {
					title,
					slug,
					mainImage {
						asset -> {
							_id,
							url
						}
					},
					body,
					publishedAt
				}`
				);
				setAllPosts(data);
			} catch (err) {
				console.error("el: " + err);
			}
		})(); //IIFE end
	}, []);

	return (
		<main className={postsStyles.AllPosts}>
			<div>
				{(AllPostsData &&
					AllPostsData.map((post, index) => (
						<article key={index}>
							<div>
								<img src={post.mainImage.asset.url} />
							</div>
							<section>
								<h3>{post.title}</h3>
								<p>{post.body[0].children[0].text.slice(0, 100) + "..."}</p>
								<p>
									{"Published: " +
										new Date(post.publishedAt).toLocaleDateString()}
								</p>
							</section>
						</article>
					))) || (
					<article>
						<section>
							<h3>Loading Posts ...</h3>
						</section>
					</article>
				)}
			</div>
		</main>
	);
};

export default AllPosts;
