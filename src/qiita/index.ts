import { Hono } from "hono";
import { QIITA } from "../constants/qiita";

const app = new Hono();

app.get("/", (c) => {
  const tags = c.req.query("page");

  const fetchData = fetch(QIITA.URL);
  return fetchData;
});

export default app;
