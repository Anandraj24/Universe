const stars = 200;

for (let i = 0; i < stars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const [x, y] = [Math.random() * 100, Math.random() * 100];
    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(star);
}

