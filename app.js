const randLetter=()=>{
    return Math.floor(Math.random() * (127 - 33 + 1) + 33);
}

const randPass=(pLength)=>{
    let passArr = [];
    for ( let i = 0 ; i < pLength ; i++){
        passArr.push(String.fromCharCode(randLetter()));
    }
    return passArr;
}

const fromasciTodecimal = (asciArr)=>{
    return asciArr.map((info)=>{
        return info.charCodeAt(0);
    })
}
console.log(fromasciTodecimal(randPass(50)))