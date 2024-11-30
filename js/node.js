const displaygames = document.getElementById("displaygames");

function game(name, active, likes, dislikes) {
    this.gamename = name
    this.activeplayers = active
    this.currentlikes = likes
    this.currentdislikes = dislikes
}

function getgames() /* Normally is a function that gets the games from somewhere */ {
    let textfile = []
    let gameslist = []
    textfile.forEach(element => {
        element = element.split(",")
        let fetchedgame = new game(element[0], element[1], element[2], element[3])
        gameslist.push(fetchedgame)
    });
    return gameslist
}

function creategameinfo() {
    let displayamount = displaygames.dataset.displayamount > 0 ? displaygames.dataset.displayamount : gameslist.length
    let gameslist = getgames()

    for (i = 0; i < displayamount; i++) {

        let selectedgame

        /* Check if there is an available game, else default */
        gameslist[i] != undefined ? selectedgame = gameslist[i] : selectedgame = new game("default", 1, 1, 1)

        let name = selectedgame.gamename
        let active = selectedgame.activeplayers
        let likes = selectedgame.currentlikes
        let dislikes = selectedgame.currentdislikes
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
        activeplayers.innerHTML = `${active} Players Active`
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