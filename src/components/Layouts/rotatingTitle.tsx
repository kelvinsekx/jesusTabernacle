'use client'

import * as React from "react"
import { Header } from "../Header/header";

export const RotatingTitles = ()=> {
    /**perf */
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                ref.current?.classList.replace('animate-rotating-words-tb', 'nn');
            }else {
                ref.current?.classList.replace(
                  "nn",
                  "animate-rotating-words-tb"
                );
            }
          });
        },
        {
          root: null,
        }
      );
      observer.observe(ref.current as Element);
      return () => observer.disconnect();
    }, []);
    console.log(Date.now())
    return (
      <Header>
        Welcome to{" "}
        <span className="text-gray-500 relative overflow-y-hidden inline-flex">
          <span className=" select-none text-transparent" aria-hidden>
            Tabernacle
          </span>
          <span
            className="absolute top-0 left-0 animate-rotating-words-tb"
            ref={ref}
          >
            <span className="block">Home</span>
            <span className="block">Church</span>
            <span className="block">Tabernacle</span>
            <span className="block">Home</span>
          </span>
        </span>
      </Header>
    );
}