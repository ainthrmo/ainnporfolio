let clsx;
let twMerge;

try {
  const clsxMod = await import("clsx");
  clsx = clsxMod.clsx || clsxMod.default;
} catch (e) {}

try {
  const twMergeMod = await import("tailwind-merge");
  twMerge = twMergeMod.twMerge || twMergeMod.default;
} catch (e) {}

export function cn(...inputs) {
  const flat = inputs.flat().filter(Boolean);
  if (twMerge && clsx) {
    return twMerge(clsx(inputs));
  }
  if (clsx) {
    return clsx(inputs);
  }
  return flat.join(" ");
}
