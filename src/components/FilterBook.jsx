import React, { useState } from "react";
import stylesApp from "./FilterBook.module.css";

export const FilterBook = ({ maxPage, genre, usePages, setUsePages }) => {
  const genreArr = Array.from(genre);
  return (
    <div className={stylesApp.container}>
      <div className={stylesApp.filter}>
        <label htmlFor="pages">Filtrar por páginas</label>
        <div className={stylesApp.range}>
          <input
            type="range"
            name="pages"
            id="pages"
            min={0}
            max={maxPage}
            value={usePages}
            onChange={(e) => setUsePages(e.target.value)}
          />
          <output className="pages-output" htmlFor="pages">
            {usePages}
          </output>
        </div>
      </div>
      <div className={stylesApp.filter}>
        <label>Filtrar por género</label>
        <select name="select">
          {genreArr.map((genre) => {
            return (
              <option key={genre} value={genre}>
                {genre}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
