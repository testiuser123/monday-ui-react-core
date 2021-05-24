/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Help =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.4397 3.50655C9.93674 3.47178 9.43392 3.57593 8.98617 3.80762C8.53842 4.03931 8.16298 4.38962 7.90088 4.82027C7.63877 5.25092 7.5001 5.74533 7.5 6.24948C7.49992 6.66369 7.16407 6.99941 6.74986 6.99933C6.33564 6.99925 5.99992 6.6634 6 6.24919C6.00015 5.47006 6.21447 4.70597 6.61954 4.04042C7.02461 3.37487 7.60484 2.83347 8.29681 2.47541C8.98878 2.11734 9.76587 1.95638 10.5431 2.01012C11.3204 2.06386 12.068 2.33024 12.7041 2.78013C13.3402 3.23002 13.8404 3.84611 14.15 4.56107C14.4596 5.27604 14.5667 6.06236 14.4597 6.83409C14.3526 7.60582 14.0354 8.33327 13.5429 8.93693C13.0503 9.54059 12.4012 9.99723 11.6667 10.2569C11.4716 10.3259 11.3028 10.4537 11.1834 10.6226C11.064 10.7916 10.9999 10.9934 11 11.2003V12.3743C11 12.7885 10.6642 13.1243 10.25 13.1243C9.83579 13.1243 9.5 12.7885 9.5 12.3743V11.2011C9.49981 10.684 9.65995 10.1792 9.95838 9.75691C10.2569 9.33453 10.679 9.01513 11.1667 8.84273C11.642 8.67468 12.0619 8.37921 12.3807 7.9886C12.6994 7.598 12.9046 7.1273 12.9739 6.62794C13.0432 6.12858 12.9739 5.61979 12.7735 5.15717C12.5732 4.69454 12.2495 4.29589 11.8379 4.00479C11.4263 3.71368 10.9426 3.54132 10.4397 3.50655ZM10.25 15.1246C10.0151 15.1246 9.78555 15.1942 9.59026 15.3247C9.39498 15.4552 9.24277 15.6406 9.15289 15.8576C9.06301 16.0746 9.0395 16.3134 9.08532 16.5437C9.13114 16.7741 9.24423 16.9857 9.41031 17.1518C9.57639 17.3178 9.78798 17.4309 10.0183 17.4768C10.2487 17.5226 10.4874 17.4991 10.7044 17.4092C10.9214 17.3193 11.1069 17.1671 11.2374 16.9718C11.3679 16.7765 11.4375 16.5469 11.4375 16.3121C11.4375 15.9971 11.3124 15.6951 11.0897 15.4724C10.867 15.2497 10.5649 15.1246 10.25 15.1246Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Help.displayName = 'Help';
Help.propTypes = {
  size: PropTypes.string
}
export default Help;
/* tslint:enable */
/* eslint-enable */