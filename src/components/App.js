import SearchBar from "./SearchBar";
import ItemsList from "./ItemList";
import { useEffect, useState } from "react";

export default function UnsplashAPI({ changenavi }) {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("cats");
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log(term);
    fetch(`https://api.unsplash.com/search/photos?query=${term}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
      .then((dates) => {
        console.log(dates);
        setImages(dates.results);
      });
  }, [term, page]);
  console.log(page);
  useEffect(() => {
    console.log(term);
    fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
      .then((dates) => setImages(dates.results));
  }, [term]);
  return (
    <div className="grow w-4/6 flex flex-col  p-3 bg-rose-200 mx-auto">
      <SearchBar submited={setTerm} initialTerm={term} />
      <ItemsList images={images} />
      <div className="flex justify-center gap-4">
        <div
          onClick={() => setPage((prev) => prev - 1)}
          className="border-2 border-black p-4 text-lg rounded"
        >
          Previous page
        </div>
        <div
          onClick={() => setPage((prev) => prev + 1)}
          className="border-2 border-black p-4 text-lg rounded"
        >
          Next page
        </div>
      </div>
    </div>
  );
}
