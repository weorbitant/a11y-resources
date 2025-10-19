import { useState } from 'react';

export default function Accessible() {
  const [selected, setSelected] = useState(['Tomato']);

  const handleOnClick = (value: string) => {
    setSelected(currentValue => {
      if (currentValue.includes(value)) {
        return currentValue.filter(item => item !== value);
      }
      return [...currentValue, value];
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, value: string) => {
    if (event.key === ' ') {
      // avoid scrolling
      event.preventDefault();
      handleOnClick(value);
    }
  };

  return (
    <>
      <h4 id="id-group-label">Sandwich Condiments</h4>
      <div role="group" aria-labelledby="id-group-label">
        <ul className="list-none p-0">
          <li className="m-0 my-2">
            <div
              className="py-2 px-4 inline-block"
              role="checkbox"
              aria-checked={selected.includes('Lettuce')}
              tabIndex={0}
              onClick={() => handleOnClick('Lettuce')}
              onKeyDown={(event) => handleKeyDown(event, 'Lettuce')}
            >
              Lettuce
            </div>
          </li>
          <li className="m-0 my-2">
            <div
              className="py-2 px-4 inline-block"
              role="checkbox"
              aria-checked={selected.includes('Tomato')}
              tabIndex={0}
              onClick={() => handleOnClick('Tomato')}
              onKeyDown={(event) => handleKeyDown(event, 'Tomato')}
            >
              Tomato
            </div>
          </li>
          <li className="m-0 my-2">
            <div
              className="py-2 px-4 inline-block"
              role="checkbox"
              aria-checked={selected.includes('Mustard')}
              tabIndex={0}
              onClick={() => handleOnClick('Mustard')}
              onKeyDown={(event) => handleKeyDown(event, 'Mustard')}
            >
              Mustard
            </div>
          </li>
          <li className="m-0 my-2">
            <div
              className="py-2 px-4 inline-block"
              role="checkbox"
              aria-checked={selected.includes('Sprouts')}
              tabIndex={0}
              onClick={() => handleOnClick('Sprouts')}
              onKeyDown={(event) => handleKeyDown(event, 'Sprouts')}
            >
              Sprouts
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}