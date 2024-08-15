async function checkUsername(username) {
    const checkPromises = sites.map(site => checkSite(site, username));
    const results = await Promise.all(checkPromises);
    return results.filter(result => result !== null);
}

async function checkSite(site, username) {
    const url = `/check-username?siteUrl=${encodeURIComponent(site.url)}&username=${username}`;
    try {
        const response = await fetch(url);
        const result = await response.json();

        if (result.available) {
            displayResult({ name: site.name, url: site.url.replace('{username}', username) });
            console.log(`Username available on ${site.name}: ${site.url.replace('{username}', username)}`);
            return { name: site.name, url: site.url.replace('{username}', username) };
        }
    } catch (error) {
        console.error(`Error checking ${site.name}: ${error}`);
    }
    return null;
}
