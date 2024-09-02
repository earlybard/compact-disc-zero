export type AnomalyType =
  "shatter" |
  "burn" |
  "shock" |
  "corruption" |
  "assault"

// TODO multipliers file
// TODO need time mulitpliers too for the DoTs. This is very unfair for those. *10 and *20 IMO
export const AnomalyMultipliers: Record<AnomalyType, number> = {
  shatter: 5,
  burn: 0.5 * 20,
  shock: 1.25 * 10,
  corruption: 0.625 * 20,
  assault: 7.13
}