import "./title.scss";

import { useEffect, useRef, useState } from "react";

const Title = (props) => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <h1
      id="title"
      ref={titleRef}
      className={`title ${isVisible ? "visible" : ""}`}
    >
      {props.title}
    </h1>
  );
};

export default Title;
