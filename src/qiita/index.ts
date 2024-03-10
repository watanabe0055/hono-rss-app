import { Hono } from "hono";
import { QIITA } from "../constants/qiita";
import { createQiitaQuery } from "./lib";

const app = new Hono();

app.get("/", (c) => {
  const req = c.req;
  const { pageParam, prePage } = createQiitaQuery(req);

  const fetchData = fetch(
    `${QIITA.URL}/?page=${pageParam}&per_page=${prePage}`
  );
  return fetchData;
});

export default app;
