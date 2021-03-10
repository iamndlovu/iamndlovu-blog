import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../client.js";
import Layout from "./../Layout";

const SinglePost = () => {
	const [postData, setPostData] = useState(null);
	const { slug } = useParams();

	return (
		<Layout>
			<div>{slug}</div>
		</Layout>
	);
};

export default SinglePost;
