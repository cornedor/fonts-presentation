import React, { SVGProps } from "react";

const RemoteNextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 56"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <g filter="url(#prefix__filter0_d_29_6)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.172 6.172a4 4 0 015.656 0l14.465 14.464a9 9 0 010 12.728L12.828 47.828a4 4 0 11-5.656-5.656l14.464-14.465a1 1 0 000-1.414L7.172 11.828a4 4 0 010-5.656z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="prefix__filter0_d_29_6"
        x={0}
        y={0}
        width={35.929}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_29_6" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_29_6"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default RemoteNextIcon;
