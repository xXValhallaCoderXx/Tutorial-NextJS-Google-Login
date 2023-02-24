import { Routes, Route, Outlet, Link } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { ProfilePage } from "./pages/profile";
import RouteGuard from "./components/Layout";
import NoMatchPage from "./components/NoMatchPage";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RouteGuard />}>
        <Route index element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
};

export default RootRoutes;
