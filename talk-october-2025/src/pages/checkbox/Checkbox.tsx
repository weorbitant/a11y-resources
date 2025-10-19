import Accessible from './components/Accessible';
import AccessibleHTML from './components/AccessibleHTML';
import InAccessible from './components/InAccessible';
import './checkbox.css';

export default function CheckboxPage() {
  return (
    <main>
      <h1 className="font-bold mb-4">Checkbox Pattern</h1>
      <p className="mb-4">You can find more about this pattern in the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/">ARIA APG Checkbox pattern website</a></p>
      <p className="mb-4">The checkbox pattern is used to allow users to select one or more options from a list of options.</p>
      <h2 className="font-bold mb-4">Examples</h2>
      <h3 className="font-bold mb-4">Inaccessible</h3>
      <InAccessible />
      <h3 className="font-bold mb-4">Accessible</h3>
      <Accessible />
      <h3 className="font-bold mb-4">Accessible with HTML elements</h3>
      <AccessibleHTML />
    </main>
  );
}