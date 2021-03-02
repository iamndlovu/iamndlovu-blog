import { Helmet } from 'react-helmet';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Helmet>
          <title>Blog - Pardon Ndlovu | Front-End Developer</title>
          <meta name="description" content="Pardon Ndlovu's blog documenting web development journey" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
      <Layout>
        <h1>Blog</h1>
      </Layout>
    </div>
  );
}

export default App;
