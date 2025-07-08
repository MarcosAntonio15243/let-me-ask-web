import { Navigate, useParams } from "react-router-dom";

export const RoomDetails = () => {
  const params = useParams();

  if (!params.id) {
    return <Navigate replace to="/rooms" />;
  }

  return (
    <div>
      <h1>Room Details</h1>
    </div>
  );
};
