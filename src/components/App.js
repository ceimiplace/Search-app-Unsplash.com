import SearchBar from "./SearchBar";
import ItemsList from "./ItemList";
import { useEffect, useState } from "react";
import Button from "./Button";
import Loader from "./Loader";
import "./Main.css";
export default function UnsplashAPI({ changenavi }) {
  const [showLoader, setShowLoader] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("cats");
  const [page, setPage] = useState(1);
  useEffect(() => {
    setErrorMessage(null);
    setShowLoader(true);
    setImages([]);
    fetch(`https://api.unsplash.com/search/photos?query=${term}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID TYMtIDr5pbkUTBDnWOfebqltBPGuNdvPoUVcZSvCqJA",
      },
    })
      .then((resp) => resp.json())
      .then((dates) => {
        setErrorMessage(null);
        setImages(dates.results);
        setShowLoader(false);
      })
      .catch((error) => {
        setShowLoader(false);
        setErrorMessage(error.message);
      });
  }, [term, page]);

  return (
    <div className=" px-4 flex flex-col  p-3 bg-rose-300  min-h-screen">
      <header>
        <SearchBar submited={setTerm} initialTerm={term} />
      </header>
      <div className="flex justify-center gap-4 my-4">
        <Button setPage={setPage} whichPageToSet={page - 1}>
          Previous page
        </Button>
        <Button setPage={setPage} whichPageToSet={page + 1}>
          Next Page
        </Button>
      </div>
      <main className="main-component">
        {errorMessage && <div>{errorMessage}</div>}
        {showLoader && <Loader />}
        {images && <ItemsList images={images} />}
      </main>
      <div className="flex justify-center gap-4 my-4">
        <Button setPage={setPage} whichPageToSet={page - 1}>
          Previous page
        </Button>
        <Button setPage={setPage} whichPageToSet={page + 1}>
          Next Page
        </Button>
      </div>
    </div>
  );
}
