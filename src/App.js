import React from "react";
import authors from "./data";
function App() {
  const auths = authors.map(auth => {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img className="card-img-top img-fluid" src={auth.imageUrl} />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{`${auth.first_name} ${auth.last_name}`}</span>
            </h5>
            <small className="card-text">{auth.books.length} books</small>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <div id="sidebar">
            <img src="theindex.svg" className="logo" alt="the index logo" />
            <section>
              <h4 className="menu-item active">
                <button>AUTHORS</button>
              </h4>
            </section>
          </div>
        </div>
        <div className="content col-10">
          <div className="authors">
            <h3>Authors</h3>
            <div className="row">{auths}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
