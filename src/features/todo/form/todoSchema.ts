import { z } from "zod";

const TodoFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const CreateTodo: any = TodoFormSchema.omit({
  name: true,
  description: true,
});
