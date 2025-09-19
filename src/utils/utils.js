export function getProductImageUrl(name) {
    return new URL(`../assets/images/products/${name}`,
        import.meta.url).href
};

export function getRatingImageUrl(name) {
    return new URL(`../assets/images/ratings/rating-${name}`,
        import.meta.url).href
};

export function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
};

export function setCartDataToStorage(cartData) {
    localStorage.setItem("cartData", JSON.stringify(cartData));
};

export function getCartDataFromStorage() {
    const storedCart = localStorage.getItem("cartData");
    return storedCart ? JSON.parse(storedCart) : [];
};