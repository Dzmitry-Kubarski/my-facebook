import * as React from "react";

function SvgFacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 18" preserveAspectRatio="xMinYMin meet" {...props}>
      <path d="M16.313 18h-4.504v-6.192h3.087V8.671h-3.087V6.814a.608.608 0 01.607-.591h2.8V3.086h-2.733l-.009.018h-.092A3.71 3.71 0 008.67 6.815V8.671H6.191v3.137H8.67V18H1.687A1.689 1.689 0 010 16.313V1.686C0 .754.755 0 1.687 0h14.626C17.244 0 18 .754 18 1.686v14.627A1.69 1.69 0 0116.313 18z" />
    </svg>
  );
}

export default SvgFacebookIcon;
