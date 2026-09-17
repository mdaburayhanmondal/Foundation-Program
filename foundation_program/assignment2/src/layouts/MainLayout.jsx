import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import AppFooter from '../components/AppFooter';

export default function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="min-h-[80vh] flex flex-col m-2 items-center justify-center">
        <Outlet />
      </main>

      <AppFooter />
    </>
  );
}
