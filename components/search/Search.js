import React from "react";

const Search = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <form role="search">
            <div className="input-group">
              <div className="input-group-btn">
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span id="srch-category">Category</span>{" "}
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" id="mnu-category">
                  <li>
                    <a href="#Apps">Apps</a>
                  </li>
                  <li>
                    <a href="#eBooks">eBooks</a>
                  </li>
                  <li>
                    <a href="#Games">Games</a>
                  </li>
                  <li>
                    <a href="#Music">Music</a>
                  </li>
                  <li>
                    <a href="#Videos">Videos</a>
                  </li>
                </ul>
              </div>
              <input type="hidden" id="txt-category" />
              <input
                type="text"
                id="txt-search"
                className="form-control"
                placeholder="Search for..."
              />
              <span className="input-group-btn">
                <button
                  id="btn-search"
                  type="submit"
                  className="btn btn-default"
                ></button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
