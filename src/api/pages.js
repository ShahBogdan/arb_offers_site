async function getPages() {
    const res = await fetch(process.env.PAGES_API_PATH);
    return await res.json();
}

async function getPageDetail({ page_slug }) {
    const res = await fetch(process.env.PAGES_API_PATH + '/' + page_slug);
    return await res.json();
}

async function getMenuPages() {
    const res = await fetch(process.env.MENU_PAGES_PATH);
    return await res.json();
}



export { getPages, getPageDetail, getMenuPages };