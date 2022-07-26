import logo from './logo.svg';
import './Simulator.css';
import PartPicker from './Crate-section';
import Opener from './Crate-section/components/Opener';
import Head from './Header';
import Showcase from './Showcase';

function App() {
  return (
    <div>
      <Head></Head>
      <Opener></Opener>
      <Showcase></Showcase>
    </div>
  );
}

export default App;
