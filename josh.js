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



const steps=[1,"2",3,4,5,6]

if(!steps.includes(1)){
   
console.log("joloof is cooking")}
    else{
        if(!steps.includes(2)){
        console.log(

            "jollof 2 is here"
        )
    }
    else{
if(steps.includes(3)){
    console.log("jollof3 is here")
}
    }
       
    }
