import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicHome } from "./pages/PublicHome";
import { PreLoader } from "./components/PreLoader";
import { Contact } from "./pages/Contact";
import { Testimonials } from "./pages/Testimonials";
import { GyaanGuides } from "./pages/GyaanGuides";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Err from "./pages/Err";
import { ChakraProvider } from "@chakra-ui/react";
import MenteeDashboard from "./pages/MenteeDashboard";
import useUsersContext from "./hooks/use-users-context";
import { useEffect } from "react";
import axios from "axios";
// import MenteePayment from "./pages/MenteePayment";
import { ChangePassword } from "./pages/ChangePassword";
import SoftSkillsPage from "./pages/LDInterventions";
import MentoringPage from "./pages/Mentoring";
import BrandingPage from "./pages/Branding";

function App() {
  const { privileges, updatePrivileges } = useUsersContext();

  useEffect(() => {
    setTimeout(window.dispatchEvent(new Event("storage")), 3000);
  }, []);

  window.addEventListener("storage", () => {
    // logout validation
    if (!localStorage.getItem("uid") || !localStorage.getItem("privilege")) {
      localStorage.removeItem("auth");
      localStorage.removeItem("uid");
      localStorage.removeItem("aname");
      localStorage.removeItem("privilege");
      localStorage.removeItem("status");
      updatePrivileges(0);
      return;
    }
    axios
      .post(process.env.REACT_APP_SERVER + "/admin/verify", {
        uid: localStorage.getItem("uid"),
        auth: localStorage.getItem("auth"),
        aname: localStorage.getItem("aname"),
        privilege: localStorage.getItem("privilege"),
        status: localStorage.getItem("status"),
      })
      .then(async (res) => {
        if ((await res.data.status) === "success") {
          console.log("verified");
          return;
        } else {
          localStorage.removeItem("auth");
          localStorage.removeItem("uid");
          localStorage.removeItem("aname");
          localStorage.removeItem("privilege");
          localStorage.removeItem("status");
          updatePrivileges(0);
        }
      })
      .catch(function (error) {
        // console.log(error);
        console.log("503 | Internal Server error!");
        return;
      });
  });

  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PreLoader />} />
            {!privileges ? (
              <Route>
                <Route path={"/home"} element={<PublicHome />} />
                <Route path={"/contact-us"} element={<Contact />} />
                <Route path={"/testimonials"} element={<Testimonials />} />
                <Route path={"/gyaan-guides"} element={<GyaanGuides />} />
                <Route path="/login" element={<Login />} />
                <Route path={"/LDInterventions"} element={<SoftSkillsPage />} />
                <Route path={"/MentoringPage"} element={<MentoringPage />} />
                <Route path={"/BrandingPage"} element={<BrandingPage />} />
              </Route>
            ) : null}
            {Number(privileges) === 1 ? (
              <Route path="/dashboard" element={<Admin />} />
            ) : null}
            {Number(privileges) === 3 &&
            Number(localStorage.getItem("status")) === 2 ? (
              <Route path="/mentee" element={<ChangePassword />} />
            ) : null}
            {Number(privileges) === 3 &&
            Number(localStorage.getItem("status")) === 1 ? (
              <Route path="/mentee" element={<MenteeDashboard />} />
            ) : null}
            <Route path="/err" element={<Err />} />
            <Route path="*" element={<Err />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
