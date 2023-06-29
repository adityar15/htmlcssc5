window.addEventListener('load', ()=>{
    runTheCounter()
    subscribe()
    search()
})

function runTheCounter()
{
    let minusBtn = document.getElementById("minus-btn")
    
    let plusBtn = document.querySelector("#plus-btn")
    let counterSpan = document.querySelector("#number")

    plusBtn.addEventListener('click', ()=>{
        let currentValue = counterSpan.innerText
        currentValue = parseInt(currentValue) + 1
        counterSpan.style.color = currentValue < 0 ? "red" : "black"
        counterSpan.innerText = currentValue
    })

    
    minusBtn.addEventListener('click', ()=>{
        let currentValue = counterSpan.innerText
        currentValue = parseInt(currentValue) - 1
        counterSpan.style.color = currentValue < 0 ? "red" : "black"
        counterSpan.innerText = currentValue
    })

}

function subscribe()
{
    let form = document.querySelector("#ns-form")
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        let formData = new FormData(form)
        let actualData = Object.fromEntries(formData)
        console.log(actualData)
    })
}


function search()
{
    let form = document.querySelector("#github-form")
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        let formData = new FormData(form)
        let actualData = Object.fromEntries(formData)
        // 
        callGitHubAPI(actualData.username)
    })
}

function callGitHubAPI(username)
{
    console.log("calling api")
    fetch(`https://api.github.com/users/${username}`)
    .then(res=>res.json())
    .then(data => {
        let userImageTag = document.querySelector("#userimage")
        let userNameTag = document.querySelector("#username")
        let profileLinkTag = document.querySelector("#profile-link")

        userImageTag.src = data.avatar_url
        userNameTag.innerText = data.login
        profileLinkTag.href = data.html_url
        console.log("data", data)
    })
}