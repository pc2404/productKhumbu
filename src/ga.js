import ReactGA from 'react-ga';

export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logError = (error) => {
  ReactGA.exception({
    description: error.message,
    fatal: false,
  });
};