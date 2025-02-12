import MainContentWrapper from "../../ui/MainContentWrapper";
import Footer from "../Footer/Footer";
import Header from "../Header/header";

const AdminLayout = ({ children }) => {
  const isLogined = sessionStorage.getItem("adminLogin");
  return (
    <div>
      <MainContentWrapper>
        {/* header here */}

        <Header />
        <main>{children}</main>

        <Footer />
      </MainContentWrapper>
    </div>
  );
};

export default AdminLayout;
