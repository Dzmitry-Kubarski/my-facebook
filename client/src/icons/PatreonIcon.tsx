import * as React from "react";

function SvgPatreonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" {...props}>
      <path d="M0 100h16.667V0H0v100zM62.5 0C41.79 0 25 16.788 25 37.5c0 20.71 16.789 37.503 37.5 37.503S100 58.21 100 37.5C100 16.788 83.211 0 62.5 0z" />
    </svg>
  );
}

export default SvgPatreonIcon;
