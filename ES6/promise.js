const getEmpIds = new promise ((resolve,reject) => {
    setTimeout(() => {
        resolve([111,112,113]);
    },1000);
})

getEmpIds.then(Ids => {
    console.log(Ids)
}).catch(error => {
    console.log(erro);
});