const searchTools = document.querySelector("#search-tools");
const searchField = document.querySelector("#catalog-search");
const status = document.querySelector("#search-results");
const groups = Array.from(document.querySelectorAll("[data-group]"), section => ({
    section,
    entries: Array.from(section.querySelectorAll("li"), item => ({
        item,
        name: item.querySelector(".mod-name").textContent.toLowerCase()
    }))
}));

function filterCatalog() {
    const words = searchField.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let matches = 0;
    for (const { section, entries } of groups) {
        let visible = 0;
        for (const { item, name } of entries) {
            item.hidden = !words.every(word => name.includes(word));
            if (!item.hidden) visible++;
        }
        section.hidden = visible === 0;
        matches += visible;
    }
    status.textContent = words.length
        ? (matches === 1 ? "1 result" : `${matches} results`)
        : "";
}

searchField.addEventListener("input", filterCatalog);
searchTools.hidden = false;
filterCatalog();
