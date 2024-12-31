import React from "react";

function Login() {
  return (
    <div className="bg-slate-900 py-2 text-neutral-content px-24">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <a className="link link-hover text-xs sm:text-sm" href="#">
            Sign in / Guest
          </a>
          <a className="link link-hover text-xs sm:text-sm" href="#">
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
