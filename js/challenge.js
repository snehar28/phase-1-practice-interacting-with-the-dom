document.addEventListener("DOMContentLoaded", () => {
    
    // Defining variables
    const counter = document.getElementById("counter")
    const incrementTimer = document.getElementById("plus")
    const decrementTimer = document.getElementById("minus")
    const likeCounter = document.getElementById("heart")
    const likes = document.querySelector("ul.likes")
    const tracker = []
    const pause = document.getElementById("pause")
    const comment_form = document.querySelector("#comment-form")
    const comments = document.querySelector("#list")

    // Auto Timer upon page load
    let autoTimer = setInterval(add1, 1000)

    // Manually increment and decrement timer
    incrementTimer.addEventListener("click",add1)
    function add1() {
        counter.innerText = parseInt(counter.innerText) +1
    }

    decrementTimer.addEventListener("click",minus1)
    function minus1() {
        counter.innerText = parseInt(counter.innerText) -1
    }

    // Like an individual number of the counter
    likeCounter.addEventListener("click",addLike)
    function addLike() {
        let currentCount = counter.innerText
        tracker[currentCount] = tracker[currentCount] || 0
        tracker[currentCount] += 1

        likes.innerHTML = "";
        for (let key in tracker){
            const li = document.createElement("li")
            li.innerText = `${key} has been liked ${tracker[key]} number of times`
            likes.append(li)
        }
    }

    // Pause the counter
    pause.addEventListener("click",pauseOrResume)
    
    let paused = false

    function pauseOrResume() {
        paused = !paused
        if (paused) {
            pauseFunction()
        } else {
            resumeFunction();
        }
    }

    function pauseFunction(){
        clearInterval(autoTimer);
        incrementTimer.disabled = true;
        decrementTimer.disabled = true;
        likeCounter.disabled = true;
        pause.innerText = "resume";
    }

    function resumeFunction() {
        autoTimer = setInterval(add1, 1000);
        incrementTimer.disabled = false;
        decrementTimer.disabled = false;
        likeCounter.disabled = false;
        pause.innerText = "pause";
    }

    // Add comments to webpage
    comment_form.addEventListener("submit",addComments)

    function addComments(event) {
        event.preventDefault()
        const comment = event.target.querySelector("input").value
        const li = document.createElement("li")

        li.innerText = comment
        comments.append(li)
        event.target.reset()
    }
})