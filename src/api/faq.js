async function getFaq(params) {
    const res = await fetch(process.env.FAQ_API_PATH);
    return await res.json();
}

async function getMainPageFaq(params) {
    const res = await fetch(process.env.FAQ_MAIN_PAGE_API_PATH);
    return await res.json();
}

export { getFaq, getMainPageFaq };