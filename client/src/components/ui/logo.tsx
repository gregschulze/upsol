import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="180"
      height="50"
      viewBox="0 0 600 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M80 30H130V120H80V30Z"
        fill="white"
      />
      <path
        d="M180 30H230V120H180V30Z"
        fill="white"
      />
      <path
        d="M280 30H380C405 30 425 50 425 75C425 100 405 120 380 120H280V30Z"
        fill="white"
      />
      <path
        d="M330 60H370V90H330V60Z"
        fill="#121212"
      />
      <path
        d="M460 30L510 120L540 60L570 120L520 30"
        fill="#FFC107"
      />
      <path
        d="M460 30L510 120"
        stroke="#FFC107"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FullLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="300"
      height="70"
      viewBox="0 0 900 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M80 30H130V120H80V30Z"
        fill="white"
      />
      <path
        d="M180 30H230V120H180V30Z"
        fill="white"
      />
      <path
        d="M280 30H380C405 30 425 50 425 75C425 100 405 120 380 120H280V30Z"
        fill="white"
      />
      <path
        d="M330 60H370V90H330V60Z"
        fill="#121212"
      />
      <path
        d="M460 30L510 120L540 60L570 120L520 30"
        fill="#FFC107"
      />
      <path
        d="M460 30L510 120"
        stroke="#FFC107"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <path
        d="M600 40H630C640 40 650 50 650 60V90C650 100 640 110 630 110H600V40Z"
        fill="white"
      />
      <path
        d="M670 40C680 40 690 50 690 60C690 70 680 80 670 80C660 80 650 70 650 60C650 50 660 40 670 40Z"
        fill="white"
      />
      <path
        d="M700 40H730V110H700V40Z"
        fill="white"
      />
      <path
        d="M740 40H780C800 40 810 50 810 70V80C810 100 790 110 770 110H740V40Z"
        fill="white"
      />
      <path
        d="M760 70H780V90H760V70Z"
        fill="#121212"
      />
      <path
        d="M830 42A12 12 0 0 1 854 42A12 12 0 0 1 830 42Z"
        fill="white"
      />
      <path
        d="M830 70A12 12 0 0 1 854 70A12 12 0 0 1 830 70Z"
        fill="white"
      />
      <path
        d="M830 98A12 12 0 0 1 854 98A12 12 0 0 1 830 98Z"
        fill="white"
      />
    </svg>
  );
}
