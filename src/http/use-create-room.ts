import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateRoomRequest } from './types/create-room-request';
import type { CreateRoomResponse } from './types/create-room-response';

export function UseCreateRoom() {
  const queryClient = useQueryClient();

  // Use mutation é usado para criação/remoção na API
  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: CreateRoomResponse = await response.json();

      return result;
    },

    onSuccess: () => {
      // Invalidate significa que se a mutation function obtiver sucesso, então deve-se rodar novamente as
      // requisições relativas a query key
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] });
    },
  });
}
