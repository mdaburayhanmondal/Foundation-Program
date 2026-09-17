import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import AppFooter from '../components/AppFooter';

export default function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen flex justify-center items-center">
        <Outlet />
      </main>

      <AppFooter />
    </>
  );
}
