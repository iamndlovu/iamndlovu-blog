import { Helmet } from 'react-helmet';
import Layout from './components/Layout';

const headerData = {
  paragraph1: 'welcome to my',
  subheading: {yellow: 'Code & Contracts', white: 'Blog'},
  paragraph2: `This is where I document my life as a programmer, and journey in the world  of business.`
}

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Code &amp; Contracts - Pardon Ndlovu | Front-End Developer</title>
        <meta name="description" content="Pardon Ndlovu's blog documenting web development and business journey" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Layout headerData={headerData}>
        <h1>Blog</h1>
      </Layout>
    </div>
  );
}

export default App;
