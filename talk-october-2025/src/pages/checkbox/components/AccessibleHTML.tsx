export default function AccessibleHTML() {
  return (
    <fieldset>
      <legend>Sandwich Condiments</legend>

      <div className="py-2 px-4">
        <input type="checkbox" id="Lettuce" name="lettuce" value="lettuce" />
        <label className="pl-2" htmlFor="Lettuce">Lettuce</label>
      </div>

      <div className="py-2 px-4">
        <input type="checkbox" id="Tomato" name="tomato" value="tomato" />
        <label className="pl-2" htmlFor="Tomato">Tomato</label>
      </div>

      <div className="py-2 px-4">
        <input type="checkbox" id="Mustard" name="mustard" value="mustard" />
        <label className="pl-2" htmlFor="Mustard">Mustard</label>
      </div>

      <div className="m-4">
        <input type="checkbox" id="Sprouts" name="sprouts" value="sprouts" />
        <label className="pl-2" htmlFor="Sprouts">Sprouts</label>
      </div>
    </fieldset>
  );
}