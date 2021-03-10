import React, { Fragment, useEffect, useState } from "react";
import sanityClient from "./../../client.js";

const PostCategory = ({ id }) => {
	const [category, setCategory] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const categoryObj = await sanityClient.fetch(
					`*[_type == "category" && _id == $id] {
          title
        }`,
					{ id }
				);
				setCategory(categoryObj);
			} catch (err) {
				console.error("el: category fetch failure: " + err);
			}
		})();
	}, [id]);

	return category ? (
		<li style={categoryStyle}>{category[0].title}</li>
	) : (
		<Fragment></Fragment>
	);
};

const categoryStyle = {
	marginRight: "9px",
	background: "#777",
	borderRadius: "5px",
	padding: "6px 10px",
};

export default PostCategory;
