import PromptSync from "prompt-sync" 
const prompt = PromptSync()

let opcao
do{
    console.log("=== Conversor de Unidades ===")
    console.log("1. Celsius para fahrenheit")
    console.log("2. Fahrenheit para Celsius")
    console.log("3. Quilometros para Milhas")
    console.log("4. Milhas para Quilometros")
    console.log("0. Sair")

    opcao = prompt("Escolha uma opção:")

    switch (opcao){
        case "1":{
             let TempCelcius = Number(prompt("Qual a temperatura em Celsius: "))
             let tempFahrenheit = (TempCelcius * (1.8)) + 32
            console.log(`${TempCelcius}°C equivalem a ${tempFahrenheit}°F`)
            break 
        }
        case "2":{
            let tempFahrenheit = Number(prompt("Qual a temperatura em fahrenheit: "))
            let TempCelcius = (tempFahrenheit - 32) *  5/9
            console.log(`${tempFahrenheit}°F equivalem a ${TempCelcius}°C`)
            break
        }
        case "3": {
            let quilometros = Number(prompt("Qual a distancia em quilometros? "))
            let milhas = quilometros * 0.621371
            console.log(`Distancia em milhas: ${milhas}`)
            break
        }
        case "4": {
            let milhas = Number(prompt("Qual a distancia em milhas? "))
            if (milhas < 0){
                console.log("Distancia não pode ser negativa!")
            }else{
            let quilometros = milhas * 1.60934
            console.log(`${milhas} equivalem a ${quilometros}Km`)
            }
            break
        }
        case "0":{
            console.log("Encerrando o conversor...")
            break
        }

    

        }
            
    

}while (opcao !== "0")