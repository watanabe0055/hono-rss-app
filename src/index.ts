import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import v1 from "./version/v1";

const app = new Hono();

app.use("*", prettyJSON());

app.route("/v1", v1);

export default app;
