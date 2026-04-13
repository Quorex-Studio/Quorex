/**
 * Google Tag Manager Analytics Events Hook
 * Pushes events to the GTM dataLayer for tracking
 */

export const pushToDataLayer = (event, data = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
};

export const trackPageView = (path, title = '') => {
  pushToDataLayer('page_view', {
    page_path: path,
    page_title: title,
  });
};

export const trackFormSubmission = (formName, formLocation = '') => {
  pushToDataLayer('form_submission', {
    form_name: formName,
    form_location: formLocation,
  });
};

export const trackCTAClick = (ctaName, location = '') => {
  pushToDataLayer('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
};

export const trackScrollDepth = (percentage) => {
  pushToDataLayer('scroll_depth', {
    scroll_percentage: percentage,
  });
};

export const trackTimeOnPage = (seconds) => {
  pushToDataLayer('time_on_page', {
    seconds: seconds,
  });
};

export const trackProjectView = (projectSlug, projectTitle, category) => {
  pushToDataLayer('project_view', {
    project_slug: projectSlug,
    project_title: projectTitle,
    project_category: category,
  });
};

export const trackPricingInteraction = (action, details = '') => {
  pushToDataLayer('pricing_interaction', {
    action: action,
    details: details,
  });
};
