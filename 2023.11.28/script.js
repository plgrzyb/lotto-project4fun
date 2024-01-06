let losowanie = document.getElementById("losowanie")

let wylosowane = []
let typy = []

function check(){
    if (typy.length > 5){
        alert("Już podałeś typy")
        return
    }

    typy = []
    for(let i = 1; i <= 6; i++){
        let id = "typowanie" + i
        let value = document.getElementById(id).value

        if(!isNaN(value) && value !== "" && value <= 49 && !typy.includes(parseInt(value))){
            typy.push(parseInt(value))
        }else{
            alert("Podaj niepowtarzajace się liczby z zakresu 0-49")
            return
        }
    }

    if(wylosowane.length > 5){
        alert("Już wylosowałeś")
        return
    }

    wylosowane = []
    while(wylosowane.length < 6){
        let random = Math.floor(Math.random() * 49)
        if (!wylosowane.includes(random)){
            wylosowane.push(random)
        }
    }
    losowanie.innerHTML = wylosowane
    sprawdz()
}

function sprawdz(){
    let traf = 0
    for (let i = 0; i < 6; i++){
        if (wylosowane.includes(typy[i])){
            traf++
        }
    }

    if (trafione > 0 && trafione < 2) {
        alert("Zgadłeś " + traf + " liczbe")
    }else if(trafione > 2){
        alert("Zgadłeś " + traf + " liczb")
    } else {
        alert("Nie zgadłeś")
    }
}