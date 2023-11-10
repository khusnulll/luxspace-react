import React from "react";
import { ReactPropTypes } from "react";
import { useNavigate } from "react-router-dom";

const Breadcrumb = ({ List }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {List?.Map?.((item, index) => {
            const arias = index === List?.length ? { "aria-label": "current page" } : {};
            return (
              <li key={item.url}>
                <a href="index.html">Home</a>
              </li>
            );
          })}
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">Office Room</a>
          </li>
          <li>
            <a href="#" aria-label="current-page">
              Details
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
Breadcrumb.ReactPropTypes = {
  list: ReactPropTypes.array.isRequired,
};
