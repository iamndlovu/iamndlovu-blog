import React from "react";
import PostCategory from "./PostCategory";

const PostCategories = ({ categoryRefs }) => {
	return (
		<ul style={categoriesStyle}>
			{categoryRefs.map((ref) => (
				<PostCategory key={ref._key} id={ref._ref} />
			))}
		</ul>
	);
};

const categoriesStyle = {
	listStyle: "none",
	display: "flex",
	flexWrap: "wrap",
	padding: "10px 0 0 0",
};

export default PostCategories;
