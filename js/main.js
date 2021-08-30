header = document.querySelector('.header-list');
times = document.querySelector('.times');
bars = document.querySelector('.bars')


bars.addEventListener('click', function() {
    header.style.display = 'block';
    bars.style.display = 'none';
    times.style.display = 'block';
});

times.addEventListener('click', function() {
    header.style.display = 'none';
    bars.style.display = 'block';
    times.style.display = 'none';
});