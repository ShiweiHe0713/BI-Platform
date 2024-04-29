
const container = document.getElementById('vizContainer');
const url = `https://public.tableau.com/views/Superstoresalesdata2/Dash`;

function initViz() {
    let viz = new tableau.Viz(container, url);
}

document.addEventListener("DOMContentLoaded", initViz);