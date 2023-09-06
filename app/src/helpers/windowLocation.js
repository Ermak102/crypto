export function getWindowParams() {
  const windowData = Object.fromEntries(
    new URL(window.location).searchParams.entries()
  );

  return windowData;
}
