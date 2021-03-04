import { Helmet } from 'react-helmet';
import Layout from './components/Layout';

const headerData = {
  paragraph1: 'welcome to my',
  subheading: {yellow: '100 Days Of Code', white: 'Blog'},
  paragraph2: `This is where I document my coding journey as I complete the #100DayOfCode challenge. The goal is to write code every single day until the challenge is complete.`
}

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Blog - Pardon Ndlovu | Front-End Developer</title>
        <meta name="description" content="Pardon Ndlovu's blog documenting web development journey" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Layout headerData={headerData}>
        <h1>Blog</h1>
      </Layout>
    </div>
  );
}

export default App;
