import "../../App.css";
import OpinionForm from "../OpinionForm/OpinionForm";
import OpinionList from "../OpinionList/OpinionList";
import Footer from "../Footer/Footer";

function App() {

  return (
    <>
      <h1>Liste opinions</h1>
      <OpinionList />
      <OpinionForm />
      <Footer />
    </>
  );
}

export default App;
