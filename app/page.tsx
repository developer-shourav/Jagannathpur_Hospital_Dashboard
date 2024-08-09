import FinanceReport from "./components/Home/FinanceReport/FinanceReport";
import PageHead from "./components/PageHead/PageHead";

export default function Home() {
  return (
    <div className="w-full ">
      {/* -------Page Header--------- */}
      <PageHead pageTitle="Overview" routeName="Home" />

      <div className="p-5 2xl:p-8">
        {/* ---------Financial Reports ------------*/}
        <FinanceReport/>
      </div>
    </div>
  );
}
