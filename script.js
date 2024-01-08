document.getElementById('lineage').addEventListener('click', function() {
        loadRomDetails('lineage.json', 'lineage-changelogs.md');
        });

        document.getElementById('derpfest').addEventListener('click', function() {
            loadRomDetails('derpfest.json', 'derpfest-changelogs.md');
            });

            document.getElementById('pixelos').addEventListener('click', function() {
                loadRomDetails('pixelos.json', 'pixelos-changelogs.md');
                });

                function loadRomDetails(jsonFile, changelogMarkdownFile) {
                    fetch(jsonFile)
                            .then(response => response.json())
                                    .then(data => {
                                                return fetch(changelogMarkdownFile)
                                                                .then(response => response.text())
                                                                                .then(changelogs => {
                                                                                                    return { data, changelogs };
                                                                                                                    });
                                                                                                                            })
                                                                                                                                    .then(result => {
                                                                                                                                                const romDetailsContainer = document.getElementById('rom-details');
                                                                                                                                                            romDetailsContainer.innerHTML = `
                                                                                                                                                                            <h1>${result.data.name}</h1>
                                                                                                                                                                                            <p><strong>Developer:</strong> ${result.data.developer}</p>
                                                                                                                                                                                                            <p><strong>Link:</strong> <a href="${result.data.link}" target="_blank">${result.data.link}</a></p>
                                                                                                                                                                                                                            <p><strong>Changelogs:</strong></p>
                                                                                                                                                                                                                                            <div id="changelogs-container">${marked(result.changelogs)}</div>
                                                                                                                                                                                                                                                        `;
                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                                        .catch(error => console.error('Error loading ROM details:', error));
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                        
})