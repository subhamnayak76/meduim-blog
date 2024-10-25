import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import {signupInput ,signinInput} from "@subham96/meduim-common";
export const userrouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    };
    
  }>()

userrouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const {success} = signupInput.safeParse(body);
  if (!success) {
      c.status(411);
      return c.json({
          message: "Inputs not correct",
          
      })
  }
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
   try {
    const user = await prisma.user.create({
      data: {
        name : body.name,
        email: body.email,
        password: body.password,
      },
    });
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.text( jwt );
   }
   catch(e) {
    console.log(e);
    c.status(411);
    return c.text('Invalid')
  }
})
userrouter.get('/details', async (c) => {
  return c.json({
    name : "Subham",
    email : "subham@gmail",
  })
})

  
userrouter.post('/signin', async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
      c.status(411);
      return c.json({
          message: "Inputs not correct"
      })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      }
    })
    if (!user) {
      c.status(403);
      return c.json({
        message: "Incorrect creds"
      })
    }
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET);

    return c.text(jwt)
  } catch(e) {
    console.log(e);
    c.status(411);
    return c.text('Invalid')
  }
})
  