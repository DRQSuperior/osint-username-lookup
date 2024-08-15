document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const searchBtn = document.getElementById('search-btn');
    const resultsDiv = document.getElementById('results');
    const loadingDiv = document.getElementById('loading');
    const exportBtn = document.getElementById('export-btn');
    const exportContainer = document.getElementById('export-container');
    let results = null; // Changed from const to let

    searchBtn.addEventListener('click', async () => {
        const username = usernameInput.value.trim();
        if (username) {
            resultsDiv.innerHTML = '';
            loadingDiv.classList.remove('hidden');
            results = await checkUsername(username);
            loadingDiv.classList.add('hidden');
            if (results.length > 0) {
                exportContainer.classList.remove('hidden');
            }
        }
    });

    exportBtn.addEventListener('click', () => {
        exportToCSV(results);
    });

    function exportToCSV(results) {
        const csvContent = [
            ['Website', 'URL'],
            ...results.map(result => [result.name, result.url])
        ].map(row => row.join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'osint_results.csv');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
});

function displayResult(result) {
    const resultItem = document.createElement('div');
    const resultsDiv = document.getElementById('results');
    resultItem.classList.add('result-item');
    resultItem.innerHTML = `
        <h3>${result.name}</h3>
        <a href="${result.url}" target="_blank" rel="noopener noreferrer">${result.url}</a>
    `;
    resultsDiv.appendChild(resultItem);
}
