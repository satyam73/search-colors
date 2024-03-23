import { Outlet } from 'react-router-dom';
import './App.css';
import Layout from './components/common/Layout/Layout';

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
