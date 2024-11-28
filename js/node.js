const displaygames = document.getElementById("displaygames");

function getgames() {
    let gameslist = []
    return gameslist
}

function creategameinfo() {
    let displayamount = displaygames.dataset.displayamount > 0 ? displaygames.dataset.displayamount : gameslist.length
    let gameslist = getgames()

    for (i = 0; i < displayamount; i++) {

        let game

        /* Check if there is an available game, else default */
        gameslist[i] != undefined ? game = gameslist[i] : game = {"name": "default", "active": 0, "likes": 1, "dislikes": 1}

        let name = game.name
        let active = game.active
        let likes = game.likes
        let dislikes = game.dislikes
        let total = likes + dislikes

        let background = document.createElement("div")
        displaygames.appendChild(background)
        background.className = "game"

        let thumbnail = document.createElement("img")
        background.appendChild(thumbnail)
        thumbnail.src = "img/gamethumbnails/" + name + ".png"
        thumbnail.alt = `${name}'s thumbnail`
        thumbnail.className = "gamethumbnail"

        let gamename = document.createElement("strong")
        gamename.innerHTML = name
        background.appendChild(gamename)

        let activeplayers = document.createElement("strong")
        activeplayers.innerHTML = active
        background.appendChild(activeplayers)

        let ratio = document.createElement("strong")
        ratio.innerHTML = `${likes} Likes`
        background.appendChild(ratio)

        let ratiobar = document.createElement("div")
        background.appendChild(ratiobar)
        ratiobar.className = "ratiobar"

        let likesbar = document.createElement("div")
        ratiobar.appendChild(likesbar)
        likesbar.style.width = ((likes / total) * 100) + "%"
        likesbar.className = "likes"

        let dislikesbar = document.createElement("div")
        ratiobar.appendChild(dislikesbar)
        dislikesbar.style.width = ((dislikes/total) * 100) + "%"
        dislikesbar.className = "dislikes"
    }

}
creategameinfo()