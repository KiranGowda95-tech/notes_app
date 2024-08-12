import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const getStyles = ({ isActive }) => {
    const styles='flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full'
    return isActive
      ? ` text-slate-50 bg-indigo-500 ${styles}`
      : `hover:bg-indigo-500 hover:text-slate-50 ${styles}`;
  };

  return (
    <aside className="flex flex-col gap-3 border-r-2 border-grey-100 w-[150px] h-screen p-3">
      <NavLink className={getStyles} to="/">
        <span className="material-symbols-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <span className="material-symbols-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyles} to="/important">
        <span className="material-symbols-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyles} to="/bin">
        <span className="material-symbols-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
