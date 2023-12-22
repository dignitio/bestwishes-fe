import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "layout/DashboardLayout/Layout";
import AuthRequired from 'layout/AuthLayout/AuthRequired';
import Dashboard from 'layout/Pages/Dashboard';
import Tribute from 'layout/Pages/Tribute';
import NotFound from 'layout/Pages/NotFound';
import "./App.css";
import Home from 'layout/Pages/Home';
import MainLayout from 'layout/Pages/MainLayout';
import CreateCard from 'layout/Pages/CreateCard';
import Settings from 'layout/Pages/Settings';
import Support from 'layout/Pages/Support';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="register" element={<div>Register</div>}/>
                <Route path="login" element={<div>Login</div>}/>

                <Route element={<AuthRequired />}>
                    <Route path="user" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="tribute" element={<Tribute />} />
                        <Route path="createCard" element={<CreateCard />} />
                        <Route path="setting" element={<Settings />} />
                        <Route path="support" element={<Support />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
