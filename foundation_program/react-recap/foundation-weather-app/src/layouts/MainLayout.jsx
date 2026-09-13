import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
}
