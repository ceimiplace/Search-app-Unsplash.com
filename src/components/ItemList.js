export default function ItemsList({ images }) {
  if (images.length > 0) {
    return (
      <div className="columns-2xs xl:columns-sm">
        {images.map((image) => (
          <img
            src={image.urls.regular}
            key={image.id}
            className="m-2"
            alt="image resulted from search"
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
}
