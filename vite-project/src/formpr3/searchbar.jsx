import { useState } from "react";

const Searchbar = () => {
    const [inputText, setInputText] = useState("")

    const handChenge = (evn) => {
        setInputText(evn.target.value)
    }
    return (
      <div>
        <input type="text" value={inputText} onChange={handChenge} />
        <p>{inputText}</p>
      </div>
    );
    // console.log("Bar")
}

export default Searchbar;