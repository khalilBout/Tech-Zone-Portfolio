import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
