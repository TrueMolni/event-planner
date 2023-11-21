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

const GridItem = ({
  img,
  text,
  title,
  onClick,
  date,
  time,
  place,
  itemClass,
  category,
  priority,
}) => {
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
        text-accent-500 bg-[rgba(255,255,255,0.80)] text-sm leading-6"
        >
          <p>
            {date} at {time}
          </p>
          <p>{place}</p>
        </div>
        {category ||
          (priority && (
            <div className="absolute top-0 flex gap-3">
              <p>{category}</p>
              <p>{priority}</p>
            </div>
          ))}
      </div>
      <div className="inline-block py-4 pl-2">
        <h3 className="text-[#1C1B1F] text-base font-medium">{title}</h3>
        <p className="text-[#49454F] mt-4 text-sm">{text}</p>
      </div>
    </li>
  );
};

GridItem.defaultProps = {
  title: "Gallery opening",
  text: " Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.",
  img: image,
  date: "12.07",
  time: "12:00",
  place: "Kyiv",
  onClick: () => {},
  category: "",
  priority: "",
};

GridItem.propTypes = {
  itemClass: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  date: PropTypes.string,
  time: PropTypes.string,
  place: PropTypes.string,
  category: PropTypes.string,
  priority: PropTypes.string,
};

export default GridItem;
