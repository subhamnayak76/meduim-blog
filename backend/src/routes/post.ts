import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import z from "zod";
const signup = z.object({
  username: z.string().email(),
  password : z.string().min(6),
  name:z.string().optional()
})
export const blogrouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables : {
      userId : string;
    }
  }>()


  blogrouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                message: "You are not logged in"
            })
        }
    } catch(e) {
        c.status(403);
        console.log(e);
        return c.json({
            message: "You are not logged in"
        })
    }
});

blogrouter.post("/", async(c) => {
  const body = await c.req.json();
  const authorid = c.get("userId")
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const blog = await prisma.post.create({
    data : {
        title: body.title,
        content: body.content,
        authorId: authorid
    }
  })
  return c.json({
    id : blog.id
  })
   
  });
  blogrouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.post.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    return c.json({
        blogs
    })
})
blogrouter.get('/:id', async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
      const blog = await prisma.post.findFirst({
          where: {
              id
          },
          select: {
              id: true,
              title: true,
              content: true,
              author: {
                  select: {
                      name: true
                  }
              }
          }
      })
  
      return c.json({
          blog
      });
  } catch(e) {
      c.status(411); // 4
      return c.json({
          message: "Error while fetching blog post"
      });
  }
})
  
  blogrouter.put("/", async(c) => {
    const body = await c.req.json();
    const authorid = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const blog = await prisma.post.update({
      where : {
        id : body.id
      },
      data : {
          title: body.title,
          content: body.content,
          
      }
    })
    return c.text("blog upadate");
  });
  
  