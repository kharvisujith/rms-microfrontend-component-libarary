import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React, { JSXElementConstructor, useEffect, useState } from "react";
import JobsCard from "../JobsCard/JobsCard";
import "./AccordionComponent.style.scss";

export interface AccordionComponentProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  style,
  children,
}) => {
  const [showAll, setShowAll] = useState(false);
  const items = React.Children.toArray(children) as React.ReactElement<any, string | JSXElementConstructor<any>>[];

  const [cardsPerRow, setCardsPerRow] = useState(4); // Default number of cards per row

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth;
      const cardWidth = 250; // Adjust the card width as needed
      const newCardsPerRow = Math.floor(containerWidth / cardWidth);
      setCardsPerRow(newCardsPerRow);
    };

    handleResize(); // Initialize the number of cards per row
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const chunkItems = (array: React.ReactElement[], size: number) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const itemsToShow = showAll ? items : items.slice(0, cardsPerRow);

  const chunkedItems = chunkItems(itemsToShow, cardsPerRow);

  return (
    <div style={style} data-testid="accordion-component">
      <div className="accordion-scrollbar" data-testid="accordion-container">
        {chunkedItems.map((chunk, index) => (
          <div key={index} className="accordion-cards">
            {chunk.map((item, cardIndex) => (
              <JobsCard
                {...item.props}
                key={cardIndex}
                data-testid="jobs-card-mock"
              />
            ))}
          </div>
        ))}
      </div>
      {items.length > cardsPerRow && (
        <div className="accordion-button">
          {showAll ? (
            <button
              onClick={handleClick}
              className="accordion-button-styles"
              data-testid="view-less-button"
            >
              View Less
              <ArrowDropUp />
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="accordion-button-styles"
              data-testid="view-more-button"
            >
              View More
              <ArrowDropDown />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionComponent;
