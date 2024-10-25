import z from "zod";

export const signinput = z.object({
    username:z.string().email(),
    password : z.string().min(6),
    name: z.string().optional()
})

export type signinput = z.infer<typeof signinput>