$('#boton').click (function verAmigos(){
    $.get(`http://localhost:5000/amigos`, function (data){
        let list = $('#lista');
        list.empty();
        for (let index = 0; index < data.length; index++){
            list.append(`<li>${data[index].name}<a id =${index+1} href="#" style="text-decoration:none;"> X</a></li>`);
        }
        
    });
});


$('#search').click (function buscarAmigo(){ 
    let searchId = $('#input').val();

    $.get(`http://localhost:5000/amigos/`, function (data){   
        let found = false;
        for (let i = 0; i < data.length; i++){
            
            if (data[i].id == searchId){
                $('#amigo').text(data[i].name);
                found = true;
            }
        }
        if (!found) {
            $('#amigo').empty();
            alert ("ID de amigo no existe!");
        }
    });    
    
});


$('#delete').click (function delAmigo(){
    let deleteId = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${deleteId}`,
        type: 'DELETE',
        success: function(result) {
            $('#lista').empty();
            $.get(`http://localhost:5000/amigos`, function (){
                for (let index = 0; index < result.length; index++){
                    $('#lista').append(`<li>${result[index].name}<a href="#" style="text-decoration:none;"> X</a></li>`);
                }
            });
            $("#success").text("Tu amigo se ha borrado correctamente");
            setTimeout(() => {$("#success").empty()}, 3000)
        }
    });
});


$('li > a').click (function eliminarAmigo(){
    console.log('li');
    
}); 