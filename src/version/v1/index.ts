import { Hono } from "hono";

import qiita from "../../qiita";

const app = new Hono();

app.route("/qiita", qiita);

export default app;
