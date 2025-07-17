const PageContainer = ({ children }) => (
  <div>
    <div className="md:mt-0 mt-[58px]">
      <div className="flex min-h-screen bg-[#222831] md:flex-row xs:flex-col-reverse items-end md:pl-[44px] xs:pl-0">
        {children}
      </div>
    </div>
  </div>
);

export { PageContainer };
export default PageContainer;
