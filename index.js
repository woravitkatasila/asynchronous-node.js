const readline = require('readline')
const readInterface = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


function readQuestion(ques){
    return new Promise((resolve,reject)=>{
         readInterface.question(ques,input=>{
            resolve(input)
        })
    })
}

function show(name,point,num){
    console.log('\n')
    console.log('Total number of student = '+num)
    let i = 0;
    while(i<num){
        let a = i+1;
        console.log(a+' name : '+name[i]+' point : '+point[i])
        i++;
    }
}
(async function(){
       let name=[]
       let point=[]
       let num = await readQuestion('How many student ?')
       let i=0;
       while(i<num){
        let a = i+1; 
        name[i] = await readQuestion(a+' What is student name ?')
        point[i] = await readQuestion(a+' How many point ?')
        i++;
       }
       show(name,point,num)
       readInterface.close()

})();