var homePhoto = document.getElementById("fabrics");
var dc = document.getElementById("DC");
var bethesda = document.getElementById("bethesda");
var bklyn = document.getElementById("bklyn");
var wycoff = document.getElementById("wycoff");

//wycoff mouseover
wycoff.addEventListener("mouseover", wycoffImage);
wycoff.addEventListener("mouseout", returnImage);

//dc mouseover
dc.addEventListener("mouseover", dcImage);
dc.addEventListener("mouseout", returnImage);

//brooklyn mouseover
bklyn.addEventListener("mouseover", brooklynImage);
bklyn.addEventListener("mouseout", returnImage);

//bethesda mouseover
bethesda.addEventListener("mouseover", bethesdaImage);
bethesda.addEventListener("mouseout", returnImage);

function wycoffImage() {
  homePhoto.src = "../site/images/living_room.JPG";
};

function dcImage() {
  homePhoto.src = "../site/images/bedroom.JPG";
};
 
function brooklynImage() {
  homePhoto.src = "../site/images/adelphi299.jpg";
};

function bethesdaImage() {
  homePhoto.src = "../site/images/bethesda.jpg";
};
 
function returnImage() {
  homePhoto.src = "../site/images/fabricsflitered.jpg";
};