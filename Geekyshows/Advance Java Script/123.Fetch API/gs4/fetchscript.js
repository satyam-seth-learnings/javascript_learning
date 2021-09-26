document.getElementById("btn").addEventListener("click",makerequest);

// Post Data
// Promise Then
// function makerequest(){
//     console.log("Button Clicked")
//     const myInit={
//         method:'POST',
//         headers:{
//             'Contant-Type':'application/json'
//         },
//         body:'{"name":"Sonam",:"Job":"Web Dev"}'
//     }
//     fetch('https://reqres.in/api/users',myInit)
//     .then((res)=>{
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         return res.json()
//     }).then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

// Async And Await
async function makerequest(){
    try{
        console.log("Button Clicked")
        const myInit={
            method:'POST',
            headers:{
                'Contant-Type':'application/json'
            },
            body:'{"name":"Rahul",:"Job":"Android App Dev"}'
        }
        const res=await fetch('https://reqres.in/api/users',myInit)
        if(!res.ok){
            throw Error(res.statusText)
        }
        const data=await res.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}