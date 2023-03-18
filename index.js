let semicircle = document.querySelectorAll(".semicircle");
let timer = document.querySelector(".time")
const runBtn = document.querySelector("#runBtn");
const breakBtn = document.querySelector("#breakBtn");


$("#runBtn").click(() =>{
    run();
    runBtn.style.display = "none";
});

function run () {  
    semicircle[0].style.display = "block"
    semicircle[1].style.display = "block"
    semicircle[2].style.display = "block"

    let minWork = 0.5 * 60000;

    const setTime = minWork 
    const startTime = Date.now();
    const futureTime = startTime + minWork;
    
    runBtn.style.display = "none";
    breakBtn.style.display = "block";
    const timerLoop = setInterval(countDown);
    function countDown () {
        const currentTime = Date.now();
        const remainingTime = futureTime - currentTime;
        const angle = (remainingTime / setTime) * 360;

        $("#stopBtn").click(() => {
            stopFunc()
        })
        function stopFunc () {
            clearInterval(timerLoop)
            semicircle[0].style.display = "none"
            semicircle[1].style.display = "none"
            semicircle[2].style.display = "none"
    
            timer.innerHTML = `
            <div>00</div>
            <div class = "two-points">:</div>
            <div>00</div>
            `
            runBtn.style.display = "block";
            breakBtn.style.display = "none";
        }

        if(angle > 180) {
            semicircle[2].style.display = "none";
            semicircle[0].style.transform = "rotate(180deg)"
            semicircle[1].style.transform = `rotate(${angle}deg)`
        } else {
            semicircle[2].style.display = "block";
            semicircle[0].style.transform = `rotate(${angle}deg)`
            semicircle[1].style.transform = `rotate(${angle}deg)`
        }

        const minutos = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        const segundos = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

        timer.innerHTML = `
        <div>${minutos}</div>
        <div class = "two-points">:</div>
        <div>${segundos}</div>
        `
        
        $("#breakBtn").click(() =>{
            breakCount();
        })

        if(remainingTime < 0) {
            breakCount();
        }

        function breakCount() {

            clearInterval(timerLoop)
            let minWork = 0.1 * 60000;

            const setTime = minWork 
            const startTime = Date.now();
            const futureTime = startTime + minWork;
            
            breakBtn.style.display = "none";
            runBtn.style.display = "block";
            const timerLoopBreak = setInterval(breakDown);
            function breakDown () {
                
                const currentTime = Date.now();
                const remainingTime = futureTime - currentTime;
                const angle = (remainingTime / setTime) * 360;
                
                $("#stopBtn").click(() => {
                    stopFunc()
                })

                function stopFunc () {
                    clearInterval(timerLoopBreak)
                    semicircle[0].style.display = "none"
                    semicircle[1].style.display = "none"
                    semicircle[2].style.display = "none"
            
                    timer.innerHTML = `
                    <div>00</div>
                    <div class = "two-points">:</div>
                    <div>00</div>
                    `
                    runBtn.style.display = "block";
                    breakBtn.style.display = "none";
                }
        
                if(angle > 180) {
                    semicircle[2].style.display = "none";
                    semicircle[0].style.transform = "rotate(180deg)"
                    semicircle[1].style.transform = `rotate(${angle}deg)`
                } else {
                    semicircle[2].style.display = "block";
                    semicircle[0].style.transform = `rotate(${angle}deg)`
                    semicircle[1].style.transform = `rotate(${angle}deg)`
                }
        
                const minutos = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
                const segundos = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        
                timer.innerHTML = `
                <div>${minutos}</div>
                <div class = "two-points">:</div>
                <div>${segundos}</div>
                `
        
                if(remainingTime < 0) {
                    clearInterval(timerLoopBreak)
                    semicircle[0].style.display = "none"
                    semicircle[1].style.display = "none"
                    semicircle[2].style.display = "none"
        
                    timer.innerHTML = `
                    <div>00</div>
                    <div class = "two-points">:</div>
                    <div>00</div>
                    `
                    breakBtn.style.display = "none";
                    runBtn.style.display = "block";
                    run();
                }
            }    
        }
    }
}