
const femi=require("./olevel")
 console.log(femi.bowoto)


let jambScore={



    english:100,
    Mathematics:60,
    geography:50,
    biology :40,
    agriculture:0


}




let totalScore=jambScore.english+jambScore.Mathematics+jambScore.geography+jambScore.biology+jambScore.agriculture

 let average=totalScore
 console.log("your average score is "+average)
if(average< 180){
    console.log(`you are not eligible for admission`)
}

else{
    if(femi.bowoto.geography!="F9" &&femi.bowoto.geography!="E8" && femi.bowoto.geography!="D7" ){
        console.log("good to go you, passed Geography")
         }
         if(femi.bowoto.biology!="F9" &&femi.bowoto.biology!= "E8" && femi.bowoto.biology!="D7" ){
            console.log("good to go you, passed Biology")
             }
             if(femi.bowoto.agriculture!="F9" && femi.bowoto.agriculture !="E8" && femi.bowoto.agriculture!="D7" ){
                console.log("good to go you, passed Agriculture")
                 }
                
        
    
    if(  femi.bowoto.english!="F9" &&"E8" && "D7" && femi.bowoto.Mathematics!="F9" &&"E8" && "D7"  ){
    console.log( "you passed english and mathematics" )
    femi.bowoto.isQualifiedtrue
     }
   
     
    

}

// console.log(average)






    

    
// }