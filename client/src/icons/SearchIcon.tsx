import * as React from "react";

function SvgSearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" preserveAspectRatio="xMinYMin meet" {...props}>
      <path d="M8 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6m0-2a8 8 0 100 16A8 8 0 008 0z" />
      <path d="M19.171 15.168l-3.134-3.134a9.11 9.11 0 01-1.113 1.714l2.833 2.834a.834.834 0 010 1.175.826.826 0 01-.587.243.826.826 0 01-.588-.243l-2.834-2.833a8.98 8.98 0 01-1.714 1.113l3.134 3.134a2.82 2.82 0 002.001.829 2.831 2.831 0 002.002-4.832z" />
    </svg>
  );
}

export default SvgSearchIcon;
