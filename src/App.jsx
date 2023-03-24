

import "./styles/global/style.css";
import { BrowserRouter } from "react-router-dom";
import { useUser } from "./state/useUser";

import LoggedRoutes from "./routes/LoggedRoutes";
import UnLoggedRoutes from "./routes/UnLoggedRoutes";
import ScrollTop from "./scripts/ScrollTop";

export default function App() {
  const { uid } = useUser();
  
  return (
    <BrowserRouter>
    <ScrollTop />
      {/* <Navbar /> */}
      {uid ? <LoggedRoutes /> : <UnLoggedRoutes />}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}