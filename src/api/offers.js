async function getOffers(params) {
    const res = await fetch(process.env.OFFERS_API_PATH);
    return await res.json();
}

export { getOffers };