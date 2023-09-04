// global.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['add-to-calendar-button']: CustomElement<AddToCalendarButton>;
    }
  };
  interface Window {
    gapi: any;
    google: any; // 👈️ turn off type checking
  }
}