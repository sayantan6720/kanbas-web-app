export default function Lab1() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>
      <form id="wd-text-fields">
        <h5>Text Fields</h5>
        <label htmlFor="wd-text-fields-username">Username:</label>
        <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
        <label htmlFor="wd-text-fields-password">Password:</label>
        <input type="password" id="wd-text-fields-password" value="123@#$asd" />
        <br />
        <label htmlFor="wd-text-fields-first-name">First name:</label>
        <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
        <label htmlFor="wd-text-fields-last-name">Last name:</label>
        <input
          type="text"
          id="wd-text-fields-last-name"
          placeholder="Doe"
          value="Wonderland"
          title="The last name"
        />
      </form>

      <h5 id="wd-buttons">Buttons</h5>
      <button
        id="wd-all-good"
        onClick={() => alert("Life is Good!")}
        type="button"
      >
        Hello World!
      </button>

      <h4 id="wd-dropdowns">Dropdowns</h4>

      <h5>Select one</h5>
      <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label>
      <br />
      <select id="wd-select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>

      <h5>Select many</h5>
      <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
      <br />
      <select id="wd-select-many-genre" multiple>
        <option selected value="COMEDY">
          Comedy
        </option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>
    </div>
  );
}
