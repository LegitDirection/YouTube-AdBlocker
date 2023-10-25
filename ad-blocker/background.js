
    console.log("AdBlocker started.");
    const clear = (() => {
        const defined = v => v !== null && v !== undefined;
        const timeout = setInterval(() => {6
            try {
                const ad = [...document.querySelectorAll('.ad-showing')][0];
                
                if (defined(ad)) {
                    const video = document.querySelector('video');
                    if (defined(video)) {
                        video.currentTime = video.duration;
                    }
                    console.log('Ad removed');
                }
              } catch (e) {
                console.error(e);
              }
            
        }, 500);
        return function() {
            clearTimeout(timeout);
        }
    })();
