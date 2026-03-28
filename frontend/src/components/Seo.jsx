import React, { useEffect } from "react";

const upsertMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const Seo = ({
  title,
  description,
  canonicalPath,
  ogImage,
  noIndex = false,
}) => {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      upsertMeta('meta[name="description"]', {
        name: "description",
        content: description,
      });
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      });
      upsertMeta('meta[name="twitter:description"]', {
        name: "twitter:description",
        content: description,
      });
    }

    if (title) {
      upsertMeta('meta[property="og:title"]', {
        property: "og:title",
        content: title,
      });
      upsertMeta('meta[name="twitter:title"]', {
        name: "twitter:title",
        content: title,
      });
    }

    if (noIndex) {
      upsertMeta('meta[name="robots"]', {
        name: "robots",
        content: "noindex,nofollow",
      });
    }

    const baseUrl = import.meta.env.VITE_PUBLIC_SITE_URL;
    const canonicalUrl =
      baseUrl && canonicalPath ? `${baseUrl}${canonicalPath}` : undefined;

    if (canonicalUrl) {
      upsertLink("canonical", canonicalUrl);
      upsertMeta('meta[property="og:url"]', {
        property: "og:url",
        content: canonicalUrl,
      });
    }

    if (ogImage) {
      upsertMeta('meta[property="og:image"]', {
        property: "og:image",
        content: ogImage,
      });
      upsertMeta('meta[name="twitter:image"]', {
        name: "twitter:image",
        content: ogImage,
      });
    }
  }, [canonicalPath, description, noIndex, ogImage, title]);

  return null;
};

export default Seo;
