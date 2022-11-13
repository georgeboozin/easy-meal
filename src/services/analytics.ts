export const gtmVirtualPageView = (rest: any) => {
  window.dataLayer?.push({
    event: "VirtualPageView",
    ...rest,
  });
};
