import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Keri" age={21} bio="Frontend dev and travel enthusiast." />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
