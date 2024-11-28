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
        gameslist[i] != undefined ? game = gameslist[i] : game = {"name": "default", "active": 0, "likes": 0, "dislikes": 0}

        let name = game.name
        let active = game.active
        let likes = game.likes
        let total = game.likes + game.dislikes

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
        ratio.innerHTML = `${likes}:${total}`
        background.appendChild(ratio)
    }

}
creategameinfo()