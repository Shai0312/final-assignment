
// diagonal stars
let siz = 5;
for (let i = 0; i < siz; i++) {
    let row = " "
    for (let j = 0; j < siz; j++) {
        if(i === j) {
           row+= " 🌟" ;
            
        }else{
           row+= " " ;
            
        }
       
    }
    console.log(row);
    
    
}

for (let i = 0; i <=20 ; i++) {
    if(i % 2 === 0) {
        console.log(i + " is even");
    } 
    
}



for (let i = 1; i <=20 ; i++) {
    if(i % 2 !== 0) {
        console.log(i + " is odd");
    } 
    
}