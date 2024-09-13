export default function Layout() {
  return (
    <div className="container mt-10 mx-auto text-gray-200 flex flex-col justify-center">
      <div className="flex justify-center items-center mx-auto">
        <div>
          <h1 className="text-3xl font-bold">
            Hello, my name is <span className="text-nodeGreen">Cao Ngoc Lam</span>
          </h1>
          <h1 className="text-3xl font-bold mt-3">
            I'm a 3rd year student at <span className="text-blue-500">Ho Chi Minh University of Technology</span>
          </h1>
          <p>
            I'm aiming for becoming a back-end developer. I'm currently using{" "}
            <span className="text-nodeGreen">MERN</span> stacks for developing my personal projects
          </p>
        </div>
      </div>
    </div>
  );
}
