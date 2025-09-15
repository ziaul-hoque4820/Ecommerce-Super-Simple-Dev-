export function getProductImageUrl(name) {
    return new URL(`../assets/images/products/${name}`,
        import.meta.url).href
};

export function getRatingImageUrl(name) {
    return new URL(`../assets/images/ratings/rating-${name}`,
        import.meta.url).href
};

// export function getIconImageUrl(name) {
//     return new URL(`../assets/images/icons/${name}`,
//         import.meta.url).href
// }

export function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
};