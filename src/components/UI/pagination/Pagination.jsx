import React from "react";
import { getPagesArray } from "../../../utils/pages";
import cl from "./Pagination.module.css";

export default ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={cl.page__wrapper}>
      {pagesArray.map((p) => (
        <span
          key={p}
          onClick={() => changePage(p)}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};
