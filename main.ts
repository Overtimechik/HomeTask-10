type TEmploee = {
    name:string
    age:number
    isActive:boolean
    sallary:number
}


const getData = () =>{
    return fetch("https://run.mocky.io/v3/a27db518-069d-45a3-8fac-938b5c2228d1")
}   

const formatData = async () => {
    let data = (await (await getData()).json()) as TEmploee[];
    Object.entries(data)
    for(let i = 0;i<data.length;i++){
        if(data[i].isActive){
            data[i].sallary=data[i].sallary*1.1
        }

    }
    data.sort ((a,b)=>{
        return b.sallary - a.sallary
    })
    console.log(data)
  };
formatData()
