import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import { MainLayout } from "./layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { History } from "./pages/History";
import { SensorData } from "./pages/SensorData";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<MainLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.HISTORY} element={<History />} />
          <Route path={ROUTES.SENSOR_DATA} element={<SensorData />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
