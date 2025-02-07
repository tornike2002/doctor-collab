import MainContentWrapper from "../../ui/MainContentWrapper";
import Header from "../Header/header";

const AdminLayout = ({ children }) => {
  const isLogined = sessionStorage.getItem("adminLogin");
  return (
    <div>
      <MainContentWrapper>
        {/* header here */}

        <Header />
        <main>{children}</main>
        {/* footer here */}
      </MainContentWrapper>
    </div>
  );
};

export default AdminLayout;
