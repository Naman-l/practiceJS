import { useEffect, useState } from "react";
import "./App.css";
import Trie from "./Trie";

function Autocomplete() {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [data,setData]=useState([''])

  const myTrie = new Trie();


  useEffect(()=>{
    const dictionary = {
  words: ['hello', 'helium', 'world', 'car', 'carpet', 'test', 'this', 'that', 'those', 'working', 'is','amrut']
};

    setData(dictionary.words)

  },[])

  useEffect(()=>{
    if(data){
      for (let i = 0; i < data.length; i++) {
        const word = data[i];
        myTrie.insert(word)
    }

    }
    
  }),[data]


  const onChange = (e) => {
    const value = e.target.value;
    setPrefix(value);
    const words = value.split(" ");
    const trie_prefix = words[words.length - 1].toLowerCase();
    const found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    const first_word = found_words[0];
    if (
      found_words.length !== 0 &&
      value !== "" &&
      value[value.length - 1] !== " "
    ) {
      if (first_word != null) {
        const remainder = first_word.slice(trie_prefix.length);
        setSuggestion(value + remainder);
      }
    } else {
      setSuggestion(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      setPrefix(suggestion);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search..."
        value={prefix}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <input
        type="text"
        name="search-bar"
        id="search-bar2"
        value={suggestion}
      />
    </div>
  );
}

export default Autocomplete;