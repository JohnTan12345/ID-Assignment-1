const displaygames = document.getElementById("displaygames");

function game(name, active, likes, dislikes) {
    this.gamename = name
    this.activeplayers = active
    this.currentlikes = likes
    this.currentdislikes = dislikes
}

function getgames() /* Normally is a function that gets the games from somewhere */ {
    let textfile = [
        "Jujutsu Battlegrounds, 340303, 203355, 5599",
        "Kitchen Chaos, 299444, 214323, 2945",
        "Banana Adventures, 149224, 79455, 4343",
        "Fishing Simulator, 90442, 65443, 3001",
        "Driveby, 89355, 68555, 3344",
        "Comet Protocol, 59444, 34344, 3433",
        "Pizza Party, 40339, 43443, 2394",
        "Crowned Force, 35699, 13432, 1002",
        "711 Simulator, 12044, 7023, 102",
        "Maphin, 5233, 3269, 129",
        "Powdered Real, 402, 121, 7",
        "Fixing Good, 295, 69, 1"
    ] /* The games from somewhere */
    let gameslist = []
    textfile.forEach(element => {
        element = element.split(",")
        let fetchedgame = new game(element[0], Number(element[1]), Number(element[2]), Number(element[3]))
        gameslist.push(fetchedgame)
    });
    return gameslist
}

function creategameinfo() {
    let gameslist = getgames()
    let displayamount = displaygames.dataset.displayamount > 0 ? displaygames.dataset.displayamount : gameslist.length

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