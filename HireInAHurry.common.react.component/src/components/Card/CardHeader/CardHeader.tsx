import React from "react";
import "./CardHeader.style.scss";

export interface CardHeaderProps {
  title: string;
  titleIcon?: React.ReactNode;
  subTitle?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const CardHeader = ({
  title,
  subTitle,
  titleIcon,
  onClick,
  className = "",
  style,
  children,
}: CardHeaderProps) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`common-card-header-container ${className}`}
      data-testid="common-card-header-container"
    >
      <div className="common-title-with-icon">
        {titleIcon ? (
          <div className="common-title-icon">{titleIcon}</div>
        ) : null}
      </div>
      <div
        className="common-title-with-children"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h2 className="common-main-heading">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default CardHeader;
