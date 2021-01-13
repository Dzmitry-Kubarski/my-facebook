import * as React from "react";

function SvgCrossIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" preserveAspectRatio="xMinYMin meet" {...props}>
      <path d="M12 9.6L9.6 12 6 8.399 2.4 12 0 9.6 3.6 6 0 2.4 2.4 0 6 3.6 9.6 0 12 2.4 8.399 6 12 9.6z" />
    </svg>
  );
}

export default SvgCrossIcon;
