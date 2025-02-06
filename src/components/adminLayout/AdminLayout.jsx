import MainContentWrapper from "../../ui/MainContentWrapper";

const AdminLayout = ({ children }) => {
  return (
    <div className="bg-[#59749A]">
      <MainContentWrapper>
        {/* header here */}
        <main>{children}</main>
        {/* footer here */}
      </MainContentWrapper>
    </div>
  );
};

export default AdminLayout;
