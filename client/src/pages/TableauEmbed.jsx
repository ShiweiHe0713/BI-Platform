import React, { useEffect } from 'react';

const TableauEmbed = () => {
    useEffect(() => {
        const scriptId = 'tableau-viz-sdk';

        const loadScript = () => {
            const existingScript = document.getElementById(scriptId);
            if (!existingScript) {
                const script = document.createElement('script');
                script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                script.id = scriptId;
                script.onload = () => initViz();  // Initialize Tableau only after the script loads
                document.body.appendChild(script);
            } else if (existingScript && existingScript.readyState === 'loaded') {
                initViz();  // If the script is already loaded, initialize Tableau
            }
        };

        loadScript();

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                existingScript.remove();  // Clean up the script tag when the component unmounts
            }
        };
    }, []);

    const initViz = () => {
        const vizUrl = `https://public.tableau.com/views/KPIDesigns_17141266132150/Dashboard1`;

        const containerDiv = document.getElementById("vizContainer");
        const options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Tableau viz is now interactive!");
            },
        };
        // Make sure the 'tableau' object is available globally
        if (window.tableau) {
            new window.tableau.Viz(containerDiv, vizUrl, options);
        }
    };

    return <div id="vizContainer" style={{ width: '1000px', height: '800px' }} />;
};

export default TableauEmbed;
