import { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/sidebar/Layout";
import Login from "../features/login/Login";

const Dashboard = lazy(
  () => import("../features/dashboard/presentation/Dashboard")
);

const User = lazy(() => import("../features/users/presentation/User"));
const Groups = lazy(() => import("../features/groups/presentation/Groups"));
const Phones = lazy(() => import("../features/phones/presentation/Phones"));

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const isAuthenticated = (): boolean => {
  return localStorage.getItem("userLoggedIn") === "true";
};

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function RootRoute() {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <AppContainer>
              <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route
                      path="/dashboard"
                      element={
                        <ProtectedRoute>
                          <Dashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/users"
                      element={
                        <ProtectedRoute>
                          <User />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/groups"
                      element={
                        <ProtectedRoute>
                          <Groups />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/phones"
                      element={
                        <ProtectedRoute>
                          <Phones />
                        </ProtectedRoute>
                      }
                    />

                    <Route path="/" element={<Navigate to="/login" />} />
                  </Routes>
                </Suspense>
              </Layout>
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  );
}

export default RootRoute;
