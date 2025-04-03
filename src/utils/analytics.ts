import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string
) => {
  ReactGA.event({ category, action, label });
};
