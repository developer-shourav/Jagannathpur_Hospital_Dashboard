import PageHead from "../components/PageHead/PageHead";

const page = () => {
  return (
    <div className="w-full ">
      <PageHead pageTitle="Member" routeName="member" />

      <div className="p-5 2xl:p-8">
        <h1 className="">Member</h1>
      </div>
    </div>
  );
};

export default page;
