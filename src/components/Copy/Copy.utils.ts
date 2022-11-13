export const copyTextToClipboard = (text: string) => {
  debugger;
  if (!navigator.clipboard) {
    return Promise.reject();
  }

  return navigator.clipboard.writeText(text);
};
