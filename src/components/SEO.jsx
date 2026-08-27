import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, path = "" }) {
  const location = useLocation();
  const currentPath = path || location.pathname;
  const canonicalUrl = `https://portfolio-ainn.vercel.app${currentPath === "/" ? "/" : currentPath}`;

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const setMeta = (attr, key, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    if (description) {
      setMeta("name", "description", description);
      setMeta("name", "title", title);
      setMeta("property", "og:title", title);
      setMeta("property", "og:description", description);
      setMeta("property", "og:url", canonicalUrl);
      setMeta("name", "twitter:title", title);
      setMeta("name", "twitter:description", description);
      setMeta("name", "twitter:url", canonicalUrl);
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);
  }, [title, description, canonicalUrl]);

  return null;
}
