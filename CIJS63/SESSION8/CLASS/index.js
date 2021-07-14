function swatch() {
    let isStart = false, _duration = 0, startTime;

    Object.defineProperty(this, 'duration', {
        get: () => _duration.toFixed(3),
    })

    this.start = () => {
        if(!isStart){
            startTime = setInterval(countTime, 1);
            isStart = true;
        }
        else {
            console.log('Error: Started');
        }
    }

    this.stop = () => {
        if(isStart) {
            clearInterval(startTime);
            isStart = false;
        }
        else {
            console.log('Error: Stoped');
        }
    }

    this.reset = () => {
        _duration = 0;
        if(isStart) {
            clearInterval(startTime);
            isStart = false;
        }
    }

    const countTime = () => {
        _duration += 0.001;
    }  
}

const sw = new swatch();

 