import type { SVGProps } from "react";

export function EthIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="M16 3L4.93 17.5l11.07 11.5 11.07-11.5L16 3zm0 4.26L22.61 17.5 16 22.28 9.39 17.5 16 7.26zM4.93 19.5l11.07 6.22 11.07-6.22-11.07 11.5L4.93 19.5z"/>
    </svg>
  );
}

export function UsdcIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-10.5c-1.66 0-3 1.34-3 3s1.34 3 3 3h3v-1.5h-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.79c1.05 0 1.92.74 2.14 1.75h1.51c-.24-1.84-1.74-3.25-3.65-3.25h-1.79z"/>
    </svg>
  );
}
