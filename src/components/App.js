import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ItemsList from "./ItemList";
function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("cat");

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?query=${term}`, {
      method: "GET",
      headers: {
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setImages(data.results));
  }, [term]);

  function whenUserSubmitsForm(innerterm) {
    console.log(innerterm);
    setTerm(innerterm);
  }
  // whenUserSubmitsForm = async (term) => {
  //   console.log(term);
  //   const response = await axios.get(
  //     "https://api.unsplash.com/search/photos/",
  //     {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
  //       },
  //     }
  //   );

  //    );
  // };

  return (
    <div className="App w-4/6 flex  flex-col  p-3  mx-auto">
      <SearchBar submited={whenUserSubmitsForm} currentValue={term} />
      <ItemsList images={images} />
    </div>
  );
}

export default App;
