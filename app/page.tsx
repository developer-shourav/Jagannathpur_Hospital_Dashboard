import PageHead from "./components/PageHead/PageHead";

export default function Home() {
  return (
    <div className="w-full ">
      <PageHead pageTitle="Overview" routeName="Home" />

      <div className="p-5">
        <h1 className="">Home</h1>
      </div>
    </div>
  );
}
