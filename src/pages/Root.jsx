import { Outlet } from "react-router-dom";
import ReactGA from "react-ga";

const TRAFIC_ID = "G-1H2ZSZZ9EG";
ReactGA.initialize(TRAFIC_ID);

export default function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}
