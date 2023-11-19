import React from "react";
import PropTypes from "prop-types";

import image from "../../../../shared/images/defaults/default-vert.png";

/*
display: flex;
padding: 12px 146px 252px 12px;
flex-direction: column;
align-items: center;
flex: 1 0 0;
align-self: stretch;



display: flex;
width: 272px;
height: 480px;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
flex-shrink: 0;


border-radius: 12px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;
box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
*/

const GridItem = ({ img, text, itemClass, onClick }) => {
  const imageWrapperStyle = "h-[336px] relative";
  const imageStyle = "w-full h-full";
  const itemStyle = "w-[302px] h-[480px]";

  return (
    <li
      className={!itemClass ? itemStyle : itemStyle + " " + itemClass}
      onClick={onClick}
    >
      <div className={imageWrapperStyle}>
        <img className={imageStyle} src={img} alt={text} />
        <div
          className="absolute bottom-0 w-full flex justify-between px-4 py-2 
        text-accent-500 bg-[rgba(255,255,255,0.80)]"
        >
          <p>data</p>
          <p>place</p>
        </div>
      </div>
      <div>
        <h3>Opening</h3>
        <p>text</p>
      </div>
    </li>
  );
};

GridItem.defaultProps = {
  text: "Beautifull event",
  img: image,
  onClick: () => {},
};

GridItem.propTypes = {
  itemClass: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default GridItem;
