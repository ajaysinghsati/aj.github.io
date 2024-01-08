function loadRomDetails(jsonFile, changelogMarkdownFile) {
    const jsonUrl = `https://raw.githubusercontent.com/ajaysinghsati/aj.github.io/main/${jsonFile}`;
    const changelogUrl = `https://raw.githubusercontent.com/ajaysinghsati/github.io/main/${changelogMarkdownFile}`;

    Promise.all([
        fetch(jsonUrl).then(response => response.json()),
        fetch(changelogUrl).then(response => response.text())
    ])
    .then(([data, changelogs]) => {
        const romDetailsContainer = document.getElementById('rom-details');
        romDetailsContainer.innerHTML = `
            <h1>${data.name}</h1>
            <p><strong>Developer:</strong> ${data.developer}</p>
            <p><strong>Link:</strong> <a href="${data.link}" target="_blank">${data.link}</a></p>
            <p><strong>Changelogs:</strong></p>
            <div id="changelogs-container">${marked(changelogs)}</div>
        `;
    })
    .catch(error => console.error('Error loading ROM details:', error));
}
