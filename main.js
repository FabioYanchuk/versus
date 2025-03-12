
//alert()

const min_power = 10;
const max_power = 30;


let energiaGoku = 100;
let energiaSuperman = 100;

let golpeGoku = 0;
let golpeSuperman = 0;

/* 
let redondeo = 20.55
console.log(Math.round(redondeo))
let ceil = 20.00001
console.log(Math.ceil(ceil))

let floor = 20.99999
console.log(Math.floor(floor)) 
*/

function calcularGolpe(){
    return Math.ceil(Math.random() * (max_power - min_power) + min_power)
}

function ambosSiguenVivos (){
    return energiaGoku>0 && energiaSuperman>0
} 

function gokuSigueEnPie(){
    return energiaGoku>0
}

function gokuGanoElRound(){
    return golpeGoku>golpeSuperman
}

let round = 1;
 
while(ambosSiguenVivos()){

    //console.log("-----Round" + round + "--------")
    //document.write(`Round ${round}`)

    golpeSuperman = calcularGolpe()
    console.log(`Golpe de Superman ${golpeSuperman}`)
    
    golpeGoku = calcularGolpe()
    console.log(`Golpe de Goku ${golpeGoku}`)
    
    if(gokuGanoElRound()){
        energiaSuperman -=golpeGoku;
        document.write(`
        <div class="card">
            <img src="img/golpeGoku.jpeg">
            <p>Energia Goku ${energiaGoku}</p>
            <p>Energia Superma  ${energiaSuperman}</p>
            <p style="text-align:center">Round ${round}</p>
        </div>
        `)
        

    }else {
        energiaGoku -= golpeSuperman;
        document.write(`
        <div class="card">
            <img src="img/golpeSuperman.jpeg">
            <p>Energia Goku ${energiaGoku}</p>
            <p>Energia Superma  ${energiaSuperman}</p>
            <p style="text-align:center">Round ${round}</p>

        </div>
        `)
    }
    round+=1;
}

document.write(`<h2 style="clear:both"> Ganador del Combate </h2>`)

if(gokuSigueEnPie()){
    document.write(`
    <div class="ganador">
        <img src="img/wingoku.jpeg" />
    </div>
    `)
} else {
        document.write(`
        <div class="ganador">
            <img src="img/winsuperman.jpg" />
        </div>
        `)
}
