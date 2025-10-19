import Content from './components/Content';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="bg-slate-800 text-white pb-12">
      <Header />
      <main>
        <Content />
      </main>
    </div>
  );
}