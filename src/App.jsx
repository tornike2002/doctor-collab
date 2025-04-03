import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AdminLayout from "./components/adminLayout/AdminLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/adminLayout/ProtectedRoute";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogInformation from "./components/Blog/BlogInformation/BlogInformation";
import CardInformation from "./components/home/serviciesCardInformation/CardInformation";
import AboutMe from "./pages/AboutMe";
import Settings from "./pages/Settings";
import Patients from "./components/patients/Patients";
import Booking from "./pages/Booking";
import SingleBookingPage from "./components/Booking/BookingServiceContent/SingleBookingPage";
import { elements } from "chart.js";
import Trend from "./pages/Trend";
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
      { path: "", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <BlogInformation /> },
      { path: "servicies/:id", element: <CardInformation /> },
      { path: "About", element: <AboutMe /> },
      { path: "Settings", element: <Settings /> },
      { path: "Patients", element: <Patients /> },
      { path: "Booking", element: <Booking /> },
      { path: "Booking/:id", element: <SingleBookingPage /> },
      { path: "Trend", element: <Trend /> },
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
