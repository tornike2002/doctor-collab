import MainContentWrapper from "../../ui/MainContentWrapper";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <MainContentWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </MainContentWrapper>
    </div>
  );
};

export default AdminLayout;
