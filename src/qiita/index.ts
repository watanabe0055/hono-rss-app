import { Hono } from "hono";
import { QIITA } from "../constants/qiita";

const app = new Hono();

app.get("/", (c) => {
  const page = c.req.query("page");
  const pageParam = page === undefined ? "1" : page;

  const fetchData = fetch(`${QIITA.URL}/?page=${pageParam}`);
  return fetchData;
});

export default app;
