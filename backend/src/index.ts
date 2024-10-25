
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { userrouter } from "./routes/user";
import{ blogrouter} from "./routes/post"
import { cors } from "hono/cors";
// Create the main Hono app
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
app.use('/*', cors())
app.route("/api/v1/user",userrouter);
app.route("/api/v1/blog",blogrouter);
// app.use("/api/v1/blog/*", async (c, next) => {
//   const jwt = c.req.header("Authorization");
//   if (!jwt) {
//     c.status(401);
//     return c.json({ error: "unauthorized" });
//   }
//   const token = jwt.split(" ")[1];
//   const payload = await verify(token, c.env.JWT_SECRET);
//   if (!payload) {
//     c.status(401);
//     return c.json({ error: "unauthorized" });
//   }
//   c.set("userId", payload.id);
//   await next();
// });



export default app;
