import React from "react";
import PostCategory from "./PostCategory";

const PostCategories = ({ categoryRefs }) => {
	return (
		<ul>
			{categoryRefs.map((ref) => (
				<PostCategory key={ref._key} id={ref._ref} />
			))}
		</ul>
	);
};

export default PostCategories;
