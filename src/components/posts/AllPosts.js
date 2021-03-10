import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";

import postsStyles from "./AllPosts.module.scss";
import PostCategories from "./PostCategories.js";

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
					publishedAt,
					categories
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
				{/*display posts if any are presesnt or show loading text*/}
				{(AllPostsData &&
					AllPostsData.map((post, index) => (
						<Link
							className={postsStyles.postink}
							to={"/" + post.slug.current}
							key={post.slug.current}
						>
							<article key={index}>
								<div>
									<img
										src={post.mainImage.asset.url}
										alt={post.title + "image"}
									/>
								</div>
								<section>
									<h3>{post.title}</h3>
									<p>{post.body[0].children[0].text.slice(0, 100) + "..."}</p>
									<PostCategories categoryRefs={post.categories} />
									<p>
										{"Published: " +
											new Date(post.publishedAt).toLocaleDateString()}
									</p>
								</section>
							</article>
						</Link>
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
