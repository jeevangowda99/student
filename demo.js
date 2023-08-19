const Hello =() =>{
    const time =new Date().toLocaleTimeString();
    const date =new Date().toLocaleDateString();

    console.log("Time : "+time +",Date"+date)
    // console.log("Date : "+date)
}

const Hello1 =(name)=>{
    const a ="jeevan"
    console.log("my name is" +name)
}
const add =()=>{
    const a = 3 ;
    const b = 6 ;
    const c = a+b ;
    console.log(c)   
}
const sub =()=>{
    const a = 8 ;
    const b = 6 ;
    const c = a-b ;
    console.log(c)   
}
const mul =()=>{
    const a = 4 ;
    const b = 2 ;
    const c = a*b ;
    console.log(c)   
}
const div =()=>{
    const a = 6 ;
    const b = 4 ;
    const c = a/b ;
    console.log(c)   
}

const Total =()=>{
    const a = 4;
    const b = 2;
    const add = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;
    console.log(`add 4 + 2 = ${add}`)
    console.log(`sub 4 - 2 = ${sub}`)

    console.log(`div 4 / 2 = ${div}`)
    console.log(`mul 4 * 2 = ${mul}`)

}



module.exports ={ Hello ,Hello1,add,sub,mul,div,Total};