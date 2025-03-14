import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import AdminLayout from "./components/adminLayout/AdminLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/adminLayout/ProtectedRoute";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

const routes = [
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Outlet />
        </AdminLayout>
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Home /> },  // Change "/" to "" for Home route
      { path: "blog", element: <Blog /> },
    ],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, idx) => (
              <Route key={idx} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
