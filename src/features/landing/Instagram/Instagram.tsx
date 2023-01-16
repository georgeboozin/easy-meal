import { useEffect, useState } from "react";

import { Post } from "./Post";
interface Props {}

const maxWidth = "330px";

export const Instagram = ({}: Props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.instagram.com/en_US/embeds.js";
    script.async = true;
    script.onload = () => {
      // TODO: fix workaround - instagram layout shifting
      setTimeout(() => setLoading(false), 1000);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <p id="instagram" className="text-5xl pt-8 px-4 lg:px-8">
        Instagram
      </p>
      <div
        className="flex flex-row justify-between items-center lg:px-8 my-8 px-4"
        style={{
          overflow: "auto",
          display: loading ? "none" : "flex",
        }}
      >
        <div
          style={{
            width: maxWidth,
          }}
          className="mr-12 sm:mr-8 last:mr-0"
        >
          <Post src="https://www.instagram.com/p/ClWnm-urITn/?utm_source=ig_embed&amp;utm_campaign=loading" />
        </div>
        <div
          style={{
            width: maxWidth,
          }}
          className="mr-12 sm:mr-8 last:mr-0"
        >
          <Post src="https://www.instagram.com/p/Cku848srIj3/?utm_source=ig_embed&amp;utm_campaign=loading" />
        </div>
        <div
          style={{
            width: maxWidth,
            // display: size === "mobile" ? "none" : "block",
          }}
          className="mr-12 sm:mr-8 last:mr-0"
        >
          <Post src="https://www.instagram.com/p/CkL4uxVLUs9/?utm_source=ig_embed&amp;utm_campaign=loading" />
        </div>
      </div>
    </>
  );
};
