import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/common/Layout/Layout';
import HomeSection from './components/HomeSection/HomeSection';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <HomeSection />
      </Layout>
    </BrowserRouter>
  );
}
