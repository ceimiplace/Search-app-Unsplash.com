import React from "react";
class ItemsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="columns-2xs xl:columns-sm">
        {this.props.images.map((image) => (
          <img
            src={image.urls.regular}
            key={image.id}
            className="m-2"
            alt="image"
          />
        ))}
      </div>
    );
  }
}
export default ItemsList;
