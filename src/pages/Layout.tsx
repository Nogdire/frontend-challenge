import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";

const links = [
  { adress: "/", name: "Все котики" },
  { adress: "favorite", name: "Любимые котики" },
];

export const Layout: React.FC = () => {
  return (
    <>
      <NavBar links={links} />
      <section className="container">
        <Outlet />
      </section>
    </>
  );
};
