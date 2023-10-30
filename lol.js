let message="Jollof is cooking"
let seconds=1000
let waterTime=seconds*60
let washTime=seconds*60+waterTime
let boilingTime=seconds*300+washTime
let ingredientTime=seconds*120+boilingTime
let tastingTime=seconds*30+boilingTime
let dishingTime=seconds*29+boilingTime

const water=()=>{
    setTimeout(()=>{
        console.log(`water on fire ${message}`)
    },waterTime)
}

const wash=()=>{
    setTimeout(()=>{
        console.log(`washing rice${message}`)
    },washTime)
}

const rice=()=>{
    setTimeout(()=>{
        console.log(`rice is boiling ${message}`)
    },boilingTime)
}


const ingredient=()=>{
    setTimeout(()=>{
        console.log(`adding ingredient ${message}`)
    },ingredientTime)
}

const taste=()=>{
    setTimeout(()=>{
        console.log(`tasting jollof ${message}`)
    },tastingTime)
}
const dish=()=>{
    setTimeout(()=>{
        console.log(`dishing jollof rice`)
    },tastingTime)
}






const steps=["water","rice","boil ","ingredient","taste ","dish"]


if(!steps.includes("water")){
    console.log("no water to cook jollof rice")
}else{
if(!steps.includes("rice")){
    water()
    setTimeout(()=>{ console.log("no rice to cook the jollof rice")},waterTime)
   

}else{if(!steps.includes("boil")){
    water()
    wash()
   setTimeout(()=>{console.log("no gas to cook jollof rice")},washTime) 
}else{if(!steps.includes("ingredient")){
    water()
    wash()
    rice()
   setTimeout(()=>{ console.log("no spice to add in jollof rice")},boilingTime)
}else{if(!steps.includes("taste")){
    water()
    wash()
    rice()
    ingredient()
   
   setTimeout(()=>{ console.log("no one to taste jollof")},ingredientTime)

}else{
    if(!steps.includes("dish")){
        water()
        wash()
        rice()
        ingredient()
taste()
       setTimeout(()=>{ console.log("no one to dish jollof rice")},tastingTime)

}
else{

    water()
    wash()
    rice()
    ingredient()
    taste()
    dish()
    setTimeout(()=>{ console.log("jollof is ready")},dishingTime)
}
}
}
}
}
}


console.log("preparation is")