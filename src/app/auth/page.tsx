import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center">
      <div className="border-1 rounded-xl p-4 scale-130 bg-gray-100"> 
      <h2 className="text-3xl font-bold mb-5">Login</h2>
      <form className=" flex flex-col gap-1">
        <label htmlFor="username">username</label>
        <input type="text" id="username" className=" rounded bg-white shadow" />
        <label htmlFor="">password</label>
        <input type="text" id="password" className="rounded bg-white shadow" />
        <button type="submit" className="bg-blue-500 rounded text-white py-1 cursor-pointer mt-4">login</button>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
