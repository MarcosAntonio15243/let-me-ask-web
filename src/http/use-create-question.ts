import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateQuestionRequest } from './types/create-question-request';
import type { CreateQuestionResponse } from './types/create-question-response';

export function UseCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  // Use mutation é usado para criação/remoção na API
  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    onSuccess: () => {
      // Invalidate significa que se a mutation function obtiver sucesso, então deve-se rodar novamente as
      // requisições relativas a query key
      queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] });
    },
  });
}
