import * as React from "react";

function SvgCloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" preserveAspectRatio="xMinYMin meet" {...props}>
      <path d="M18 16.547L16.545 18 10 11.455 3.455 18 2 16.547 8.545 10 2 3.455 3.455 2 10 8.546 16.545 2 18 3.455 11.455 10 18 16.547z" />
    </svg>
  );
}

export default SvgCloseIcon;
