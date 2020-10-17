// create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

// create tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector(["[name=lat]"]).value = lat;
  document.querySelector(["[name=lng]"]).value = lng;

  // remover icon
  marker && map.removeLayer(marker);

  // add icon layer

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos

function addPhotoField() {
  // pegar o container de fotos
  const container = document.querySelector("#images");

  // pegar o cantainer para duplicar
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se está vazio
  const input = newFieldContainer.children[0]

  if(input.value == ""){
    return
  }

  // limpar campo antes de adicionar ao container de imagens
  newFieldContainer.children[0].value = ""

  // adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer)

}

function deleteField(event){
 const span = event.currentTarget;

 const fieldsContainer = document.querySelectorAll(".new-upload");

 if(fieldsContainer.length <= 1){
  span.parentNode.children[0].value = ""

  return

 }

 // deletar campo
 span.parentNode.remove();
}

function toggleSelect(event){

  // remover classe active
  document.querySelectorAll('.button-select button')
  .forEach( function(button){
    button.classList.remove('active')
  })

  //colocar a classe active
  const button = event.currentTarget
  button.classList.add('active')

  //atualizar input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
  
}

function validate(event){
  // validar se foi selecionado ponto no mapa



  event.preventDefault()
  alert('Selecione um ponto no mapa')
}