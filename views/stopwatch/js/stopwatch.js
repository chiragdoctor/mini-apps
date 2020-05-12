function Stopwatch(timmer) {
    this.isWatchOn = false;
    let interval;
    let time = 0;
    let offset;

    const deltaTime = () => {
        let now = Date.now();
        const timeElapsed = now - offset; 
        offset = now;
        return timeElapsed;
    }

    const updateTime = () => {
        if(this.isWatchOn) {
            time += deltaTime();
        }
        
        const formattedTime = formatTime(time);
        timmer.innerHTML = formattedTime;
    }

    const formatTime = (timeInMilliseconds) => {
        const date = new Date(timeInMilliseconds);
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
        // const formattedTime = minutes + ' : ' + seconds + ' . ' + milliseconds;
        return `${minutes}  :  ${seconds} . ${milliseconds}`;
    }

    this.start = () => {
        if (!this.isWatchOn) {
            offset = Date.now();
            this.isWatchOn = true;
            interval = setInterval(updateTime, 100);;
        }
    }

    this.stop = () => {
        if (this.isWatchOn) {
            this.isWatchOn = false;
            clearInterval(interval);
            interval = null;
        }

    }

    this.reset = () => {
        if(!this.isWatchOn) {
            time = 0;
            updateTime();
        }
    }

}