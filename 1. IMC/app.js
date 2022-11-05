const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

const heightEL = document.querySelector("#height");
const weightEL = document.querySelector("#weight");
const imcButtonEL = document.querySelector(".imc-button");
const imcResultEL = document.querySelector(".imc-result");
const imcCommentEL = document.querySelector(".imc-comment");

imcButtonEL.addEventListener("click", () => {
  const height = parseInt(heightEL.value)/100;
  const weight = parseInt(weightEL.value);
  if (!weight || !height || height < 0 || weight < 0) {
    imcCommentEL.innerText = "Remplissez correctement les inputs.";
    imcResultEL.style.color = "inherit";
    imcResultEL.innerText = "Wops";
  }
  else{
    const IMC = weight / (height*height);
  
     const result = BMIData.filter((stade,index) => {
      if(index<5){
        if(IMC >= stade.range[0] && IMC <= stade.range[1]){
          return stade
        }
      }else{
        if( IMC >= stade.range){
          return stade
        }
      }
    })
    imcResultEL.innerText = Math.round(IMC*10)/10;
    imcResultEL.style.color = result[0].color;
    imcCommentEL.innerText = result[0].name;

  }
});
// IMC = poids en kg / taille² en m
