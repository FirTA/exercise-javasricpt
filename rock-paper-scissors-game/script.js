let getValue = document.getElementsByClassName("rpsButton")
let vs={}
let historyPlayer = {}
let point = {
    "win" : 0,
    "lose" : 0,
    "draw" : 0
}




const rockClick = () => {
    let value = getValue[0].value
    // console.log(value)
    vs["player"] = value
    computer()
    console.log(vs)
    
    getHistoryPlayers(value)
    result(vs.player,vs.computer)
    return vs
}
const paperClick = () => {
    let value = getValue[1].value
    // console.log(value)
    vs["player"] = value
    computer()
    console.log(vs)
    
    getHistoryPlayers(value)
    result(vs.player,vs.computer)
    return{value} 
}
const scissorsClick = () => {
    let value = getValue[2].value
    // console.log(value)
    vs["player"] = value
    computer()
    console.log(vs)
    
    getHistoryPlayers(value)
    result(vs.player,vs.computer)
    return{value} 
}

const getHistoryPlayers = (value) => {
    if(historyPlayer[value] >= 1 ){
        historyPlayer[value] += 1
    }else{
        historyPlayer[value] = 1
    }
    
    console.log(historyPlayer)
    return historyPlayer
}

const computer = () => {
    const randomIndex = Math.floor(Math.random() * 3)
    let comp = getValue[randomIndex].value
    vs["computer"] = comp
    console.log(randomIndex)
    return vs 
}

const result = (player, computer) => {
    let result
    console.log(`${player} vs ${computer}`)
    if(player == computer){
        console.log("DRAW")
        point["draw"] += 1
        result = "DRAW"
    }
    else if (player == "Rock"){
        if(computer == "Paper"){
            console.log("YOU LOSE")
            point["lose"] += 1
            result = "YOU LOSE"
        }
        else{
            console.log("YOU WIN")
            point["win"] += 1
            result = "YOU WIN"
        }
    }
    else if (player == "Paper"){
        if(computer == "Scissors"){
            console.log("YOU LOSE")
            point["lose"] += 1
            result = "YOU LOSE"
        }
        else{
            console.log("YOU WIN")
            point["win"] += 1
            result = "YOU WIN"
        }
    }
    else if (player == "Scissors"){
        if(computer == "Rock"){
            console.log("YOU LOSE")
            point["lose"] += 1
            result = "YOU LOSE"
        }
        else{
            console.log("YOU WIN")
            point["win"] += 1
            result = "YOU WIN"
        }
    }
    const playerScore = `Win = ${point.win}  Lose = ${point.lose}  Draw = ${point.draw}`
    const match = `${player} vs ${computer}`
    console.log(point)
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("hands").innerHTML = match
    document.getElementById("result").innerHTML = result
    return point
}

const resetHistory = () => {
    point = {
        "win" : 0,
        "lose" : 0,
        "draw" : 0
    }
    historyPlayer = {
        "Rock" : 0,
        "Paper" : 0,
        "Scissors" : 0
    }
    const playerScore = `Win = ${point.win}  Lose = ${point.lose}  Draw = ${point.draw}`
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("hands").innerHTML = "RESET DONE"
    document.getElementById("result").innerHTML = ""
    console.log(historyPlayer)
    console.log(point)
}