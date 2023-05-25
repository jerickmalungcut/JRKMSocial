import React, { useState } from "react";
import Axios from "axios";

const SignUp = () => {
  //Update the value of username, password and email
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //Submit form sent to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // We dont need to set this because it is defined in the App.js "http://localhost:8080/register"
      await Axios.post("/register", {
        username: username,
        email: email,
        password: password,
      });
      console.log("User was successfully created.");
    } catch (e) {
      console.log("There was an error.", e);
    }
  };

  return (
    <div className="lg:flex-1 md:flex justify-center md:justify-end">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-[80vw] md:max-w-lg lg:w-full"
      >
        <label htmlFor="newUsername">Username</label>
        <input
          type="text"
          name="newUsername"
          id="newUsername"
          placeholder="Create Username"
          required
          className="py-2 px-3 rounded-md border border-gray-400 outline-none w-full mb-2"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="newEmail">Email</label>
        <input
          type="email"
          name="newEmail"
          id="newEmail"
          placeholder="YourEmail@example.com"
          required
          className="py-2 px-3 rounded-md border border-gray-400 outline-none w-full mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="newPassword">Password</label>
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="Create password"
          required
          className="py-2 px-3 rounded-md border border-gray-400 outline-none w-full mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-8 rounded-md text-lg transition-all duration-300"
        >
          Sign up for JRKM
        </button>
      </form>
    </div>
  );
};

export default SignUp;
