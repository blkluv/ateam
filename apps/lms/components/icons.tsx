import { FunctionComponent, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

export type IconComponent = FunctionComponent<IconProps>;

function createIcons<T extends Record<string, IconComponent>>(icons: T): T {
  return icons;
}

export const Icons = createIcons({
  // Phosphor list-checks
  activity: (props: IconProps) => (
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,64V192H128V64Z" opacity="0.2" />
      <path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z" />
    </svg>
  ),
  analytics: (props: IconProps) => (
    // Phoshot chart-line
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,56V208H32V48H216A8,8,0,0,1,224,56Z" opacity="0.2" />
      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z" />
    </svg>
  ),
  apple: (props: IconProps) => (
    // Phosphor apple-logo
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M216,73.52Zm0,99.26c-16.79-11.53-24-30.87-24-52.78,0-18.3,11.68-34.81,24-46.48C204.53,62.66,185,56,168,56a63.72,63.72,0,0,0-40,14h0A63.71,63.71,0,0,0,88.88,56C52,55.5,23.06,86.3,24,123.19a119.62,119.62,0,0,0,37.65,84.12A32,32,0,0,0,83.6,216h87.7a31.75,31.75,0,0,0,23.26-10c15.85-17,21.44-33.2,21.44-33.2Z"
        opacity="0.2"
      />
      <path d="M223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Zm-34.63,30.94a23.76,23.76,0,0,1-17.4,7.47H83.59a23.82,23.82,0,0,1-16.44-6.51A111.14,111.14,0,0,1,32,123,58.5,58.5,0,0,1,48.65,80.47,54.81,54.81,0,0,1,88,64h.78A55.45,55.45,0,0,1,123,76.28a8,8,0,0,0,10,0A55.39,55.39,0,0,1,168,64a70.64,70.64,0,0,1,36,10.35c-13,14.52-20,30.47-20,45.65,0,23.77,7.64,42.73,22.18,55.3A105.52,105.52,0,0,1,188.67,200.53ZM128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4Z" />
    </svg>
  ),
  arrowLeft: (props: IconProps) => (
    // Phosphor arrow-square-left
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z"
        opacity="0.2"
      />
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208ZM82.34,133.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168a8,8,0,0,1,0,16H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32Z" />
    </svg>
  ),
  barchart: (props: IconProps) => (
    // Phoshot chart-bar
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M208,40V208H152V40Z" opacity="0.2" />
      <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z" />
    </svg>
  ),
  briefcase: (props: IconProps) => (
    // Phospor briefcase
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M224,118.31V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V118.31h0A191.14,191.14,0,0,0,128,144,191.08,191.08,0,0,0,224,118.31Z"
        opacity="0.2"
      />
      <path d="M104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112ZM232,72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8ZM40,72v41.62A184.07,184.07,0,0,0,128,136a184,184,0,0,0,88-22.39V72ZM216,200V131.63A200.25,200.25,0,0,1,128,152a200.19,200.19,0,0,1-88-20.36V200H216Z" />
    </svg>
  ),
  caretSort: (props: IconProps) => (
    // Phosphor caret-up-down
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M80,176h96l-48,48ZM128,32,80,80h96Z" opacity="0.2" />
      <path d="M176,168H80a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,176,168Zm-48,44.69L99.31,184h57.38ZM80,88h96a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,80,88Zm48-44.69L156.69,72H99.31Z" />
    </svg>
  ),
  check: (props: IconProps) => (
    // Phosphor check-fat
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"
        opacity="0.2"
      />
      <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z" />
    </svg>
  ),
  circleChecked: (props: IconProps) => (
    // Phosphor circle-check
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
      <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
    </svg>
  ),
  clock: (props: IconProps) => (
    // Phosphor clock
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
    </svg>
  ),
  courses: (props: IconProps) => (
    // Phosphor strategy
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M96,188a28,28,0,1,1-28-28A28,28,0,0,1,96,188Z" opacity="0.2" />
      <path d="M68,152a36,36,0,1,0,36,36A36,36,0,0,0,68,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,68,208ZM34.34,106.34,48.69,92,34.34,77.66A8,8,0,0,1,45.66,66.34L60,80.69,74.34,66.34A8,8,0,0,1,85.66,77.66L71.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L60,103.31,45.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L196,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L184.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L196,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L207.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93a8.13,8.13,0,0,1-2,.24,8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L144,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H155.31l2.35,2.34C175.9,68.59,182.58,90.78,176.47,112.83Z" />
    </svg>
  ),
  crossCircled: (props: IconProps) => (
    // Phoshor x-circle
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
      <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
    </svg>
  ),
  crossLarge: (props: IconProps) => (
    // Phosphot x-square
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z"
        opacity="0.2"
      />
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  ),
  desktop: (props: IconProps) => (
    // Phosphor desktop
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M224,64v88H32V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z"
        opacity="0.2"
      />
      <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z" />
    </svg>
  ),
  discord: (props: IconProps) => (
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M235.21,185.59l-67,29.7a8.15,8.15,0,0,1-11-4.56L147,183.06a190.5,190.5,0,0,1-19,.94,190.5,190.5,0,0,1-19-.94L98.75,210.73a8.15,8.15,0,0,1-11,4.56l-67-29.7a8,8,0,0,1-4.55-9.24L45.77,60A8.08,8.08,0,0,1,52.31,54l36.06-5.92a8.1,8.1,0,0,1,9.21,6l5,19.63a192.32,192.32,0,0,1,50.88,0l5-19.63a8.1,8.1,0,0,1,9.21-6L203.69,54A8.08,8.08,0,0,1,210.23,60l29.53,116.37A8,8,0,0,1,235.21,185.59Z"
        opacity="0.2"
      />
      <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.94,15.94,0,0,1-9.06-18.51L38,58A16.08,16.08,0,0,1,51,46.13l36.06-5.92a16.21,16.21,0,0,1,18.26,11.88l3.26,12.83Q118.11,64,128,64t19.4.92l3.26-12.83a16.22,16.22,0,0,1,18.26-11.88L205,46.13A16.08,16.08,0,0,1,218,58l29.53,116.38A15.94,15.94,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56a.21.21,0,0,0-.12,0h0L53.61,61.92a.24.24,0,0,0-.09,0L24,178.33,91,208a.21.21,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z" />
    </svg>
  ),
  docs: (props: IconProps) => (
    // Phosphor book-open-text
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M232,64V192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32h64A8,8,0,0,1,232,64Z"
        opacity="0.2"
      />
      <path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z" />
    </svg>
  ),
  dotsHorizontal: (props: IconProps) => (
    // Phosphot dots-three-horizontal
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128ZM48,104a24,24,0,1,0,24,24A24,24,0,0,0,48,104Zm160,0a24,24,0,1,0,24,24A24,24,0,0,0,208,104Z"
        opacity="0.2"
      />
      <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z" />
    </svg>
  ),
  drag: (props: IconProps) => (
    // Phosphor dots-six-vertical
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M208,32V224a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V32A16,16,0,0,1,64,16H192A16,16,0,0,1,208,32Z"
        opacity="0.2"
      />
      <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z" />
    </svg>
  ),
  eyeOpen: (props: IconProps) => (
    // Phosphor eye
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
        opacity="0.2"
      />
      <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
    </svg>
  ),
  file: (props: IconProps) => (
    // Phosphor file-text
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
    </svg>
  ),
  github: (props: IconProps) => (
    // Phosphor github-logo
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
        opacity="0.2"
      />
      <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z" />
    </svg>
  ),
  hamburgerMenu: (props: IconProps) => (
    // Phosphor list
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,64V192H40V64Z" opacity="0.2" />
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
    </svg>
  ),
  heart: (props: IconProps) => (
    // Phosphor heart
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M232,94c0,66-104,122-104,122S24,160,24,94A54,54,0,0,1,78,40c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,94Z"
        opacity="0.2"
      />
      <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
    </svg>
  ),
  help: (props: IconProps) => (
    // Phosphor question
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
      <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
    </svg>
  ),
  home: (props: IconProps) => (
    // Phosphor house
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z"
        opacity="0.2"
      />
      <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z" />
    </svg>
  ),
  image: (props: IconProps) => (
    // Phosphor image
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z"
        opacity="0.2"
      />
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z" />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    // Phosphor linkedin-logo
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z"
        opacity="0.2"
      />
      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
    </svg>
  ),
  listBullet: (props: IconProps) => (
    // Phosphor list-bullets
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,64V192H44V64Z" opacity="0.2" />
      <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z" />
    </svg>
  ),
  locked: (props: IconProps) => (
    // Phosphor lock-simple
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z"
        opacity="0.2"
      />
      <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z" />
    </svg>
  ),
  magic: (props: IconProps) => (
    // Phosphor magic-wand
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z"
        opacity="0.2"
      />
      <path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z" />
    </svg>
  ),
  notion: (props: IconProps) => (
    // Phosphor notion-logo
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M192,208H152L64,48h40Z" opacity="0.2" />
      <path d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM156.73,200,77.53,56H99.27l79.2,144Z" />
    </svg>
  ),
  pencil: (props: IconProps) => (
    // Phosphor pencil
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z"
        opacity="0.2"
      />
      <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z" />
    </svg>
  ),
  play: (props: IconProps) => (
    // Phosphor play
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z"
        opacity="0.2"
      />
      <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" />
    </svg>
  ),
  plusCircled: (props: IconProps) => (
    // Phosphor plus-circle
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z" />
    </svg>
  ),
  rocket: (props: IconProps) => (
    // Phosphor rocket
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M94.81,192,65.36,214.24a8,8,0,0,1-12.81-4.51L40.19,154.1a8,8,0,0,1,1.66-6.86l30.31-36.33C71,134.25,76.7,161.43,94.81,192Zm119.34-44.76-30.31-36.33c1.21,23.34-4.54,50.52-22.65,81.09l29.45,22.24a8,8,0,0,0,12.81-4.51l12.36-55.63A8,8,0,0,0,214.15,147.24Z"
        opacity="0.2"
      />
      <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z" />
    </svg>
  ),
  scissors: (props: IconProps) => (
    // Phosphor scissors
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M40.2,95.8a28,28,0,1,1,39.6,0A28,28,0,0,1,40.2,95.8Zm0,64.4a28,28,0,1,0,39.6,0A28,28,0,0,0,40.2,160.2Z"
        opacity="0.2"
      />
      <path d="M157.73,113.13A8,8,0,0,1,159.82,102L227.48,55.7a8,8,0,0,1,9,13.21l-67.67,46.3a7.92,7.92,0,0,1-4.51,1.4A8,8,0,0,1,157.73,113.13Zm80.87,85.09a8,8,0,0,1-11.12,2.08L136,137.7,93.49,166.78a36,36,0,1,1-9-13.19L121.83,128,84.44,102.41a35.86,35.86,0,1,1,9-13.19l143,97.87A8,8,0,0,1,238.6,198.22ZM80,180a20,20,0,1,0-5.86,14.14A19.85,19.85,0,0,0,80,180ZM74.14,90.13a20,20,0,1,0-28.28,0A19.85,19.85,0,0,0,74.14,90.13Z" />
    </svg>
  ),
  search: (props: IconProps) => (
    // Phosphor magnifying-glass
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z" opacity="0.2" />
      <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
    </svg>
  ),
  settings: (props: IconProps) => (
    // Phosphor gear
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
        opacity="0.2"
      />
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" />
    </svg>
  ),
  spinner: (props: IconProps) => (
    // Phosphor circle-notch
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
      <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z" />
    </svg>
  ),
  trash: (props: IconProps) => (
    // Phosphor trash-simple
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z" opacity="0.2" />
      <path d="M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z" />
    </svg>
  ),
  twitter: (props: IconProps) => (
    // Phosphor twitter-logo
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M240,72l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12s32-12,48-36c0,0-55.15-32-47.22-120,0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24Z"
        opacity="0.2"
      />
      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.65,48.65,0,0,0,168.1,40a46.87,46.87,0,0,0-33.74,13.7A47.87,47.87,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.3,47.79,9.57,79.77,22,98.18a110.92,110.92,0,0,0,21.89,24.2C61.43,195.2,37.45,204.41,37.2,204.51a8,8,0,0,0-3.85,11.93c.74,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.68,0,129.72-54.42,135.76-124.44l29.9-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.52-6.25,27.56-17,37.88-32.48a8,8,0,0,0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54,124.11,48,100.38,48,73.09c16,13,45.25,33.18,78.69,38.8A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.89,30.89,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
    </svg>
  ),
  video: (props: IconProps) => (
    // Phosphor video
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M216,48H40a8,8,0,0,0-8,8V168a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM112,144V80l48,32Z"
        opacity="0.2"
      />
      <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z" />
    </svg>
  ),
  warning: (props: IconProps) => (
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z"
        opacity="0.2"
      />
      <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" />
    </svg>
  ),
  youtube: (props: IconProps) => (
    // Phosphor youtube-logo
    <svg
      role="img"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z"
        opacity="0.2"
      />
      <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86.12,12s-54.37.18-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68C73.58,55.82,127.4,56,128.05,56s54.37-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
    </svg>
  ),
});
