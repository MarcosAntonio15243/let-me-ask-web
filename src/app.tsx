import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoomDetails } from "./pages/room-details";
import { Rooms } from "./pages/rooms";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Rooms />} index />
        <Route element={<RoomDetails />} path="/room" />
      </Routes>
    </BrowserRouter>
  );
}
