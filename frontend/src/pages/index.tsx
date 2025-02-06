import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from './dashboard';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <Dashboard />
            <Footer />
        </div>
    );
};

export default HomePage;
export default function Home() {
  return <h1>Welcome to JANGO Frontend</h1>;
}
