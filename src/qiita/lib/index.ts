import { HonoRequest } from "hono";

/**
 * クエリを作成する
 * @param req
 * @returns
 */
export const createQiitaQuery = (req: HonoRequest<"/", undefined>) => {
  const { page } = req.query();
  const prePage = 24;

  const pageParam = page === undefined ? "1" : page;

  return {
    pageParam,
    prePage,
  };
};
