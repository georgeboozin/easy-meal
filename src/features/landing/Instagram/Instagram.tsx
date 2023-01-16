import { useEffect } from "react";

import { useMedia } from "utils/use-media";
import { MEDIA_QUERY } from "constants/media-queries";
import { Post } from "./Post";
interface Props {}

const sizes = ["desktop", "tablet", "mobile"] as const;
const maxWidth = "330px";

export const Instagram = ({}: Props) => {
  const size = useMedia(
    [MEDIA_QUERY.lgUp, MEDIA_QUERY.mdUp, MEDIA_QUERY.smUp],
    [sizes[0], sizes[1], sizes[2]],
    sizes[2]
  );
  console.log(size);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.instagram.com/en_US/embeds.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <p className="text-5xl pt-8 px-4 lg:px-8">Instagram</p>
      <div
        id="instagram"
        className="flex flex-row justify-between items-center lg:px-8 my-8 px-4"
        style={{
          overflow: "auto",
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
