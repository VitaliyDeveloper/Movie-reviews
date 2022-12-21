import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
// import ParticlesSnow from 'components/ParticlesSnow/ParticlesSnow';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <footer>
        {/* <ParticlesSnow /> */}
        <Footer />
      </footer>
      {/* </ParticlesSnow> */}
    </>
  );
};

export default Layout;
