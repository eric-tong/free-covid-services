const STARTING_HSL_PRIMARY = [170, 62, 58];
const STARTING_HSL_BACKGROUND = [170, 96, 95];
const HUE_INTERVAL = 136;
const MAX_HUE = 360;

export function getColorsFromIndex(i: number): Color {
  const primary = [...STARTING_HSL_PRIMARY];
  const background = [...STARTING_HSL_BACKGROUND];
  primary[0] = (primary[0] + HUE_INTERVAL * i) % MAX_HUE;
  background[0] = (background[0] + HUE_INTERVAL * i) % MAX_HUE;
  return {
    primary: toColorString(primary),
    background: toColorString(background)
  };
}

function toColorString(arr: number[]) {
  return `hsl(${arr[0]},${arr[1]}%,${arr[2]}%)`;
}
