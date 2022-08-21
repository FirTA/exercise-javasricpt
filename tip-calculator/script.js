let numberOfPeople = 1

// console.log(document.getElementsById("billTotalInput"))

const getBill = document.getElementById("billTotalInput")
const getTip = document.getElementById("tipInput")

// const purcahseRecipt = 
// `   One Coffe Shop

// Bill = ${bill}
// `
let recipt ={}

const makeRecipt = (recipt) =>{
    const takeRecipt ={
        "billCurrent" : recipt.billCurrent,
        "tipCurrent" : recipt.tipCurrent,
        "numberOfPeople" : recipt.numberOfPeople
    }

    console.log(recipt.billCurrent)
    const text = `
    person = ${recipt.numberOfPeople}

    bill
        ........................$${takeRecipt.billCurrent}
    tip
        ........................$${takeRecipt.tipCurrent}
                                ____+
    total bill
        ........................$${takeRecipt.billCurrent+takeRecipt.tipCurrent}

    `

    console.log(text)
}


const calculateBill = () => {
    let bill = Number(getBill.value)
    let tip = Number(getTip.value)/100
    // console.log(typeof billTotalValue +  +""+ typeof tipValue)
    // console.log(bill.toPrecision(1))

    let perPerson = (bill+(tip*bill))/numberOfPeople
    console.log("$" + typeof perPerson)
    
    // getBill.value = bill.toFixed(2)
    document.getElementById("perPersonTotal").innerText = `$${perPerson.toLocaleString('en-US')}`
    recipt["billCurrent"] = bill
    recipt["tipCurrent"] = tip
    recipt["numberOfPeople"] = numberOfPeople
    recipt["totalPerPerson"] = perPerson
    console.log(recipt)
    makeRecipt(recipt)
}


const increasePeople = () => {
    let billInput = getBill.value
    // console.log(billInput)
    numberOfPeople += 1
    // console.log(numberOfPeople)
    document.getElementById("numberOfPeople").innerHTML = `${numberOfPeople}`
    calculateBill()
    // recipt["numberOfPeople"] = numberOfPeople
    return numberOfPeople
}


const decreasePeople = () => {
    if (numberOfPeople > 1){
        numberOfPeople -= 1
    }
    console.log(numberOfPeople)
    document.getElementById("numberOfPeople").innerHTML = `${numberOfPeople}`
    calculateBill()
    // recipt["numberOfPeople"] = numberOfPeople
    return numberOfPeople
}




// document.getElementById("numberOfPeople").innerHTML = `${numberOfPeople}`