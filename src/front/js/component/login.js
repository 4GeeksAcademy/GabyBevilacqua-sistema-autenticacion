import React, { useContext } from "react";
import { Link } from "react-router-dom";


export const Login = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <Link to="/profileView">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};