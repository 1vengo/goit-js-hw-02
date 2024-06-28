"use strict";
function getShippingCost(country) {
  switch (country) {
    case "China":
      const toChina = `Shipping to ${country} will cost 100 credits`;
      return toChina;
      break;
    case "Chile":
      const toChile = `Shipping to ${country} will cost 250 credits`;
      return toChile;
      break;
    case "Australia":
      const toAustralia = `Shipping to ${country} will cost 170 credits`;
      return toAustralia;
      break;
    case "Jamaica":
      const toJamaica = `Shipping to ${country} will cost 120 credits`;
      return toJamaica;
      break;

    default:
      const casual = `Sorry, there is no delivery to your country`;
      return casual;
      break;
  }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
