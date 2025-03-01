console.log("Pranav this side!");

window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const rotation = scrollPercentage * 360;
    const scale = 1 + scrollPercentage * 0.5;
    const bgText = document.getElementById('bgText');
    bgText.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;
});