import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container mt-10 mx-auto text-gray-200 flex flex-col justify-center items-center w-[1000px]">
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0">
          <img src="/avatar.png" alt="Avatar" className="rounded-full w-48 h-48 md:w-64 md:h-64" />
        </div>
        <div>
          <h1 className="text-xl">Hello, my name is</h1>
          <h1 className="text-5xl font-bold text-nodeGreen">Cao Ngọc Lâm</h1>
          <p className="text-xl mt-3">
            I'm a 3rd year student at{" "}
            <a href="https://hcmut.edu.vn/" className="text-blue-500 hover:underline">
              Ho Chi Minh University of Technology
            </a>
            . I'm passionate about web development, particularly focusing on back-end development. I am actively using
            the MERN stack (<span className="text-green-500">MongoDB</span>,{" "}
            <span className="text-gray-500">Express</span>, <span className="text-blue-400">React</span>,{" "}
            <span className="text-green-600">NodeJS</span>) to develop personal projects.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="bg-nodeGreen text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
