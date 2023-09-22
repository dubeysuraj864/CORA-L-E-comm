import { Link } from "react-router-dom";
import { RiUser6Fill, RiLockPasswordFill } from "react-icons/ri";

function Profile() {
  return (
    <>
      <div className="profile m-10 flex justify-center items-start ">
        <div className="w-[800px] md:bg-white  h-[400px] flex justify-center rounded-2xl shadow-xl relative">
          <div className="left">
            <img
              src="https://images.unsplash.com/photo-1641695329829-300a1df58849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              className="w-[400px] h-[400px] object-cover rounded-l-2xl z-0 absolute md:static md:brightness-100 brightness-50"
              alt=""
            />
          </div>
          <div className="right w-[400px] h-[400px] bg-transparent md:bg-white flex justify-center items-start rounded-r-2xl backdrop-blur-md">
            <form className=" flex flex-col justify-center items-center text-black z-10 ">
              <h1 className="text-3xl font-bold md:text-[#349ad5] text-white my-6">
                Good to see you again
              </h1>
              <h1 className="text-2xl font-bold text-white md:text-black">
                Login
              </h1>
              <div className="my-4 text-sm rounded-md bg-[#1B4B66] pl-2  flex items-center">
                <RiUser6Fill className="text-white" />
                <input
                  type="text"
                  className=" ml-2 p-2 bg-[#F1F1F1]  outline-none min-w-[220px] rounded-r-md"
                  placeholder="Username..."
                />
              </div>
              <div className="my-4 text-sm rounded-md bg-[#1B4B66] pl-2  flex items-center">
                <RiLockPasswordFill className="text-white" />
                <input
                  type="password"
                  className=" ml-2 p-2 bg-[#F1F1F1] outline-none min-w-[220px] rounded-r-md"
                  placeholder="Password..."
                />
              </div>

              <button className="bg-[#1B4B66] border flex justify-center p-1.5 w-[200px] hover:bg-white hover:border hover:text-black transition-all text-white rounded-md my-6">
                Sign In
              </button>
              <div className="text-white md:text-black text-sm">
                <Link className="px-2 underline">Don't have an account?</Link>
                <Link className="px-2">Forget Password</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
