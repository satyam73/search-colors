export function debounce(callback: Function, interval: number = 500) {
  let timeout: NodeJS.Timeout;
  return function (...args: any) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(args);
    }, interval);
  };
}
