let Listfilm =[
    {id:113,judul:'iron man', genre:'action'},
    {id:101,judul:'deadpool2', genre:'comedy'},
    {id:111,judul:'avengers', genre:'fantasy'},
]
const findlistfilm = (id) =>{
    index = 0
    ketemu = -1
    while(ketemu== -1){
        if (id == Listfilm[index].id){
            ketemu = index
        }
        index++
    }
    return ketemu
}
module.exports ={
    index : function (request,response){
        response.json(users)
    },
    input : function(request,response){
        console.log(request.body)
        response.send(request.body)
    },
    getListfilmbyid : function (request,response){
        id = request.params.id;
    idx = findlistfilm(id);
    dataLisfilm = users [idx];
    response.json(dataLisfilm);
    },
    update : function (request, response){
        const id = request.params.id
        users.filter(user=>{
            if(Listfilm.ide == id){
                Listfilm.id = id
                user.judul = request.body.judul
                user.email = request.body.genre

                return Listfilm
            }
        })
        response.send(Listfilm)
    },
    delete : function(request, response){
        let id =request.params.id
        Listfilm = Listfilm.filter(Listfilm => Listfilm.id !=id)
        response.send(Listfilm)
    }
    
}

 