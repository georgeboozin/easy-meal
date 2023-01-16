import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

const Wrapper = (props: PropsWithChildren<Record<never, never>>) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>{props.children}</>
);

export const NoSSR = dynamic(() => Promise.resolve(Wrapper), {
  ssr: false,
});
