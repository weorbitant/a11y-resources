import { useState } from 'react';

const commonStyles = 'py-2 px-4 inline-block checkbox';

export default function InAccessible() {
  const [selected, setSelected] = useState(['Tomato']);

  const handleOnClick = (value: string) => {
    setSelected(currentValue => {
      if (currentValue.includes(value)) {
        return currentValue.filter(item => item !== value);
      }
      return [...currentValue, value];
    });
  };

  return (
    <>
      <h4 id="id-group-label">Sandwich Condiments</h4>
      <div role="group" aria-labelledby="id-group-label">
        <ul className="list-none p-0">
          <li className="m-0 my-2">
            <div
              className={`${commonStyles} ${selected.includes('Lettuce') ? 'checked' : ''}`}
              onClick={() => handleOnClick('Lettuce')}
            >
              Lettuce
            </div>
          </li>
          <li className="m-0 my-2">
            <div
              className={`${commonStyles} ${selected.includes('Tomato') ? 'checked' : ''}`}
              onClick={() => handleOnClick('Tomato')}
            >
              Tomato
            </div>
          </li>
          <li className="m-0 my-2">
            <div
              className={`${commonStyles} ${selected.includes('Mustard') ? 'checked' : ''}`}
              onClick={() => handleOnClick('Mustard')}
            >
              Mustard
            </div>
          </li>
          <li className="m-0 my-2">
            <div
              className={`${commonStyles} ${selected.includes('Sprouts') ? 'checked' : ''}`}
              onClick={() => handleOnClick('Sprouts')}
            >
              Sprouts
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}