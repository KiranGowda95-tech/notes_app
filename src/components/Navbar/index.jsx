import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <header className="flex p-3 gap-3 border-b-3 border-grey-100">
      <div className="w-12 h-12">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
        <h1 className="text-indigo-800  text-4xl font-bold">Notes App</h1>
    </header>
  );
};
