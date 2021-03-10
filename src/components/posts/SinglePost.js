import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../client.js";
import Layout from "./../Layout";
import Nav from "../header/Nav";
import { Helmet } from "react-helmet";

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
					<header>
						<Nav />
						<h2>{postData.title}</h2>
						<section>
							<div>By {postData.name}</div>
							<div>{new Date(postData.publishedAt).toDateString()}</div>
						</section>
					</header>
					<main>
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
			)) || <di>Loading...</di>}
		</Layout>
	);
};

export default SinglePost;
