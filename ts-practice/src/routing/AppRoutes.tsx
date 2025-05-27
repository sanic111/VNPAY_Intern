import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../app/pages/Dashboard";
import About from "../app/pages/About";
import NotFound from "../app/pages/NotFound";
import MainLayout from "../app/modules/MainLayout";
import { useAuth } from "../app/context/AuthContext";

const AppRoutes = () => {
  // const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return (
  //     <Routes>
  //       <Route path="*" element={<LoginRedirect />} />
  //     </Routes>
  //   );
  // }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

// const LoginRedirect = () => {
//   const { login } = useAuth();
//   return (
//     <div className="p-10 text-center">
//       <p className="mb-4">Bạn chưa đăng nhập.</p>
//       <button
//         onClick={login}
//         className="rounded bg-blue-500 px-4 py-2 text-white"
//       >
//         Login
//       </button>
//     </div>
//   );
// };

export { AppRoutes };
