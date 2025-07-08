import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Rooms } from "./pages/rooms";
import { RoomDetails } from "./pages/room-details";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Rooms /> } index />
        <Route element={ <RoomDetails /> } path="/room" />
      </Routes>
    </BrowserRouter>
  )
}