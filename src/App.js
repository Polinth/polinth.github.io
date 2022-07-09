import Header from "./Header"
import Footer from "./Footer"
import Portfolio from "./Portfolio"
import MainContent from "./MainContent"

export default function App() {
  return (
    <div className="App">
        <Header />
          <div className="Main">
              <Portfolio />
              <MainContent />

          </div>
        <Footer/>
    </div>
  );
}
