import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import { Helmet } from "react-helmet";
import sanityClient from "../../client.js";
import Layout from "./../Layout";
import Nav from "../header/Nav";
import PostCategories from "./PostCategories";

import postStyles from "./SinglePost.module.scss";

const SinglePost = () => {
	const [postData, setPostData] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		(async () => {
			try {
				const data = await sanityClient.fetch(
					`*[_type == "post" && slug.current == $slug] {
						title,
						publishedAt,
						categories,
						mainImage {
							asset -> {
								_id,
								url
							}
						},
						body,
						"name": author -> name,
						"authorImage": author -> image
					}`,
					{ slug }
				);
				setPostData(data[0]);
			} catch (err) {
				console.error("el2: " + err);
			}
		})();
	}, [slug]);

	return (
		<Layout>
			{(postData && (
				<Fragment>
					<Helmet>
						<title>{`${postData.title} - Code & Contracts`}</title>
					</Helmet>
					<header className={postStyles.postHeader}>
						<Nav />
						<section>
							<h2>{postData.title}</h2>
							<div>
								<span>By {postData.name}</span> |{" "}
								<span>{new Date(postData.publishedAt).toDateString()}</span>
								<PostCategories categoryRefs={postData.categories} />
							</div>
						</section>
					</header>
					<main className={postStyles.postBody}>
						<div>
							<img
								src={postData.mainImage.asset.url}
								alt={postData.title + " post image"}
							/>
						</div>
						<article>
							<BlockContent
								blocks={postData.body}
								projectId={sanityClient.config().projectId}
								dataset={sanityClient.config().dataset}
							/>
						</article>
					</main>
				</Fragment>
			)) || (
				<main className={postStyles.loading}>
					<div>Loading...</div>
				</main>
			)}
		</Layout>
	);
};

export default SinglePost;
