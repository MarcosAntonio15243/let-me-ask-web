import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export const Rooms = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();

      return result;
    },
  });

  return (
    <div>
      <h1>Rooms</h1>

      {isLoading && <p>Carregando..</p>}
      {data?.map((d) => {
        return (
          <Link key={d.id} to={`/rooms/${d.id}`}>
            {d.name}
          </Link>
        );
      })}

      <Link to="/room">Go to details</Link>
    </div>
  );
};
