import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          When style blends seamlessly with performance, you get these adidas
          shoes. Designed to keep you cool and comfortable on the go, they fuse
          a sock-like mesh upper that is hugged by a bio-based foam cage. The
          result is an ultra-breathable, lightweight shoe that moves with your
          every step. Its a fresh take on a running shoe with a fast look and
          plenty of comfort.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
