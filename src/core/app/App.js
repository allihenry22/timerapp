import Layout from '../../component/layout';
import './styles/App.css';

function App() {
  return (
    <Layout asideItems={ [
      'item 1',
      'item 2',
      'item 3',
    ] }
    >
      <p>I am the content</p>
    </Layout>
  );
}

export default App;
