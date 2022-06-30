const memberB = document.querySelectorAll('#memberBoxGeo, #memberBox ,#memberBoxAlex, #memberBoxLiv, #memberBoxFlo , #memberBoxOvi , #memberBoxDen , #memberBoxRaz, #memberBoxAnc, #memberBoxGab, #memberBoxMih, #memberBoxRal,#memberBoxLuc,#memberBoxDel,#memberBoxMel,#memberBoxSte,#memberBoxCri,#memberBoxCrs,#memberBoxAle,#memberBoxAnd,#memberBoxSim, #memberBoxDan, #memberBoxRau, #memberBoxInv ');
for (let i = 0; i < memberB.length; i++)
{
 memberB[i].onclick = function(){
     if(memberB[i].className=="open"){
   memberBox.className = "";
   memberBoxAlex.className = "";
   memberBoxLiv.className = "";
   memberBoxFlo.className = "";
   memberBoxOvi.className = "";
   memberBoxDen.className = "";
   memberBoxRaz.className = "";
   memberBoxAnc.className = "";
   memberBoxGab.className = "";
   memberBoxMih.className = "";
   memberBoxRal.className = "";
   memberBoxLuc.className = "";
   memberBoxDel.className = "";
   memberBoxMel.className = "";
   memberBoxSte.className = "";
   memberBoxCri.className = "";
   memberBoxCrs.className = "";
   memberBoxAle.className = "";
   memberBoxAnd.className = "";
   memberBoxSim.className = "";
   memberBoxDan.className = "";
   memberBoxRau.className = "";
   memberBoxGeo.className = "";
     }
 
  else{
 memberBox.className = "opacity";
 memberBoxAlex.className = "opacity";
 memberBoxLiv.className = "opacity";
 memberBoxFlo.className = "opacity";
 memberBoxOvi.className = "opacity";
 memberBoxDen.className = "opacity";
 memberBoxRaz.className = "opacity";
 memberBoxAnc.className = "opacity";
 memberBoxGab.className = "opacity";
 memberBoxMih.className = "opacity";
 memberBoxRal.className = "opacity";
 memberBoxLuc.className = "opacity";
 memberBoxDel.className = "opacity";
 memberBoxMel.className = "opacity";
 memberBoxSte.className = "opacity";
 memberBoxCri.className = "opacity";
 memberBoxCrs.className = "opacity";
 memberBoxAle.className = "opacity";
 memberBoxAnd.className = "opacity";
 memberBoxSim.className = "opacity";
 memberBoxDan.className = "opacity";
 memberBoxRau.className = "opacity";
 memberBoxGeo.className = "opacity";
     memberB[i].className="open";
 }
 
 }
 
}