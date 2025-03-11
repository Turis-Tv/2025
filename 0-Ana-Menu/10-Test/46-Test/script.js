var listaImagens = []

listaImagens.push("https://od.lk/s/OTFfMzE0ODk1MjZf/24.png")
listaImagens.push("https://od.lk/s/OTFfMzE0ODk1MjZf/24.png")
listaImagens.push("https://od.lk/s/OTFfMzE0ODk1MjZf/24.png")
listaImagens.push("https://od.lk/s/OTFfMzE0ODk1MjZf/24.png")
listaImagens.push("https://od.lk/s/OTFfMzE0ODk1MjZf/24.png")
listaImagens.push("https://od.lk/s/OTFfMzE0ODk1MjZf/24.png")

var listaNomes = []

listaNomes.push("Bulent Carikli", "Bulent Carikli 1", "Bulent Carikli 2", "Bulent Carikli 3", "Bulent Carikli 4", "Bulent Carikli 5")

var genero = []

genero.push("Bulent Carikli ", "Bulent Carikli 1", "Bulent Carikli 2", "Bulent Carikli 3", "Bulent Carikli 4", "Bulent Carikli 5")


var ids = []

ids.push("1", "2", "3", "4", "5", "6")

var trailers = []

trailers.push("https://www.youtube.com/embed/yMRnSKc8mx4", "https://www.youtube.com/embed/TDrxlhhhHnQ", "https://www.youtube.com/embed/euN3vgYEORc", 
"https://www.youtube.com/embed/5GM1GkHXEU0", "https://www.youtube.com/embed/lcKghcALay4", "https://www.youtube.com/embed/U-x3Rec_TrI")

var hora = []

hora.push("2h 24m", "1h 39m", "1h 56m", "2h 6m", "1h 44m", "2h 13m")

var desde = []

desde.push("<b></b>", "<b></b>", "<b></b>", "<b></b> ", "<b></b> ", "<b></b>")

var img = document.querySelector("#filmes");
for (var i = 0; i < listaImagens.length; i++){
    document.write("<div class='base' id='filmes'><div class='filme'><img data-toggle='modal' data-target='#"+ids[i]+"' src=" + listaImagens[i]+ "><p class='nome'>"+ listaNomes[i] + "</p><p class='data'> " + desde[i]+ "<div class='imghover'><div class='info'><span>"+ genero[i] + "</span><span> "+ hora[i] + "</span></div></div></div></div><div class='modal fade' id='"+ids[i]+"' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'><div class='modal-dialog modal-dialog-centered' role='document'><div class='modal-content'><div class='modal-body'><iframe style='border-radius: 10px;' width='100%' height='320' src="+ trailers[i] +" title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div></div></div>")
}