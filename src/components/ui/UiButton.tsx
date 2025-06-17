import React from "react";

interface UiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string; // background color
  textColor?: string;
  borderColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const UiButton: React.FC<UiButtonProps> = ({
  children,
  color = "#12c9c5",
  textColor = "#fff",
  borderColor = "#089e9a",
  className = "",
  style = {},
  ...props
}) => (
  <button
    className={`font-normal shadow transition-all border-2 ${className}`}
    style={{
      background: color,
      color: textColor,
      borderColor: borderColor,
      borderRadius: "22px 12px 22px 22px",
      transform: "skewX(8deg)",
      fontSize: "1.25rem",
      fontWeight: 400,
      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      letterSpacing: "normal",
      ...style,
    }}
    {...props}
  >
    <span style={{ display: "inline-block", transform: "skewX(-8deg)", fontWeight: 400, letterSpacing: "normal" }}>
      {children}
    </span>
  </button>
);

export default UiButton;