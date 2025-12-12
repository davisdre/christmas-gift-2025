function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Randomize properties
    const size = Math.random() * 4 + 2; // 2px to 6px
    const startX = Math.random() * 100; // 0% to 100% width
    const duration = Math.random() * 5 + 5; // 5s to 10s fall time
    const opacity = Math.random() * 0.4 + 0.1; // Subtle opacity
    const delay = Math.random() * 5; // Random start delay

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startX}vw`;
    snowflake.style.opacity = opacity;
    snowflake.style.animationDuration = `${duration}s`;

    // Remove after animation
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });

    snowContainer.appendChild(snowflake);
}

// Create flakes periodically
setInterval(createSnowflake, 300);

// Initial batch
for (let i = 0; i < 20; i++) {
    setTimeout(createSnowflake, Math.random() * 2000);
}
