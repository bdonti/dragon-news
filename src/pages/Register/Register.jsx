import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    // const name = form.get("name");
    // const photo = form.get("photo");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <p className="mx-2 mb-2 text-center">
                Already have an account? Please
                <Link className="ml-1 mr-1" to="/login">
                  Login
                </Link>
                Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
