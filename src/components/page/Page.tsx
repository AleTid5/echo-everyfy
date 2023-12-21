import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const Page = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Page;
