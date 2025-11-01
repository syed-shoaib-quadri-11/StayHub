import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyBooking from "./pages/MyBooking";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/:speciality" element={<Rooms />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="my-bookings" element={<MyBooking />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="/appointment/:PGID" element={<Appointment />} />

      </Route>
    </Routes>
  );
}

export default App;
