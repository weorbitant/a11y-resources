import Content from './components/Content';
import { Header } from './components/Header';
import './invalid.css';

export default function App() {
  return (
    <div className="bg-slate-400 text-white pb-12">
      <Header />
      <div>
        <Content />
      </div>
    </div>
  );
}