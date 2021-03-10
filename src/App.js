import { Helmet } from "react-helmet";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import AllPosts from "./components/posts/AllPosts";
import SinglePost from "./components/posts/SinglePost";

const headerData = {
	paragraph1: "welcome to my",
	subheading: { yellow: "Code & Contracts", white: "Blog" },
	paragraph2: `This is where I document my life as a programmer, and journey in the world  of business.`,
};

function App() {
	return (
		<div className="App">
			<Helmet>
				<title>
					Code &amp; Contracts - Pardon Ndlovu | Front-End Developer
				</title>
				<meta
					name="description"
					content="Pardon Ndlovu's blog documenting web development and business journey"
				/>
				<meta name="theme-color" content="#008f68" />
			</Helmet>
			<BrowserRouter>
				<Route path="/" exact>
					<Layout headerData={headerData}>
						<AllPosts />
					</Layout>
				</Route>
				<Route component={SinglePost} path="/:slug" />
			</BrowserRouter>
		</div>
	);
}

export default App;
