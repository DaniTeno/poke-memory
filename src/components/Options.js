import { useRef } from "react";
import { BtnLinkTo } from "./BtnLinkTo";

export const Options = ({ handlerSettings, settings }) => {
  const { trys, difficulty } = settings;
  const setTrys = useRef();
  const setDifficulty = useRef();
  const getData = () => {
    return { tryValue: setTrys['current'].value, difficultyValue: setDifficulty['current'].value }
  }

  return (
    <article id="options">
      <div>
        <nav className="s-container">
          <p className="white">Trys:</p>
          <select defaultValue={trys} ref={setTrys}>
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={15}>15</option>
          </select>
        </nav>
      </div>
      <div>
        <nav className="s-container">
          <p className="white">cards:</p>
          <select defaultValue={difficulty} ref={setDifficulty}>
            <option value={8}>16</option>
            <option value={10}>20</option>
            <option value={12}>24</option>
          </select>
        </nav>
      </div>
      <BtnLinkTo text={"Save"} to={"/"} clickAction={() => handlerSettings(getData())} actionArg={'buenas'} spanClass={'blue'} />
      <BtnLinkTo text={"Cancel"} to={"/"} spanClass={'red'} />
    </article>
  );
}