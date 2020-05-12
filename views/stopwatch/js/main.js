const timmer =  document.getElementById('timmer');
const toggleButton = document.getElementById('toggle');
const resetButton = document.getElementById('reset');

function start() {
    watch.stop();
    toggleButton.innerHTML = 'Start';
}

function stop() {
    watch.start();
    toggleButton.innerHTML = 'Stop';
}

function toggleClick() {
    watch.isWatchOn ? start() : stop();
}

toggleButton.addEventListener('click', toggleClick);

function resetClick() {
    watch.reset();
}

resetButton.addEventListener('click', resetClick);

const watch = new Stopwatch(timmer);