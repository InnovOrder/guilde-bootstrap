import React from "react";
function App() {
  return (
    <div className="container mt-3">
      <h2 class="text-center">Register</h2>
      <div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div class="mb-3">
          <label for="bio" class="form-label">
            Tell us about you
          </label>
          <textarea class="form-control" id="bio" rows="3"></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="http://" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
