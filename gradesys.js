const score=101;

if (score >= 80 && score <=100) {
    console.log('Student as an A')
}
else if(score >=75 && score <= 79){
    console.log('Student as an AB')
} 
else if(score >=70 && score <= 74){
    console.log('Student as B')
} 
else if(score >=65 && score <= 69){
    console.log('Student as a BC')
} 
else if(score >=60 && score <=64){
    console.log('Student as a C')
} 
else if(score >=55 && score <=59){
    console.log('Student as a CD')
} 
else if(score >=50 && score <=54){
    console.log('Student as a D')
} 
else if(score >=45 && score <=49){
    console.log('Student as a DE')
} 
else if(score >=40 && score <=44){
    console.log('Student as an E')
} 
else if(score <40){
    console.log('Student as an F')
} 
else{
    console.log('Inappropriate result:  Please re-validate')
}