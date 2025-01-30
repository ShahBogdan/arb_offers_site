async function getSettings() {
    const res = await fetch(process.env.SETTINGS_PATH);
    return await res.json();
}

export { getSettings };