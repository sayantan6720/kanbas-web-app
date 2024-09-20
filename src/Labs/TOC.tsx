import { Link } from "react-router-dom";
import React from "react";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link to="/Labs">Labs</Link>
      </li>
      <li>
        <Link to="/Labs/Lab1">Lab 1</Link>
      </li>
      <li>
        <Link to="/Labs/Lab2">Lab 2</Link>
      </li>
      <li>
        <Link to="/Labs/Lab3">Lab 3</Link>
      </li>
      <li>
        <Link to="/Kanbas">Kanbas</Link>
      </li>
      <li id="wd-github">
        <Link to="https://github.com/sayantan6720/kanbas-web-app">GitHub</Link>
      </li>
    </ul>
  );
}
