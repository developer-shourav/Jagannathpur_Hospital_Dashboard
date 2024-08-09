import PageHead from "../components/PageHead/PageHead";

const page = () => {
  return (
    <div className="w-full ">
      <PageHead pageTitle="Cashflow" routeName="cashFlow" />

      <div className="p-5 2xl:p-8">
        <h1 className="">Cashflow</h1>
      </div>
    </div>
  );
};

export default page;
