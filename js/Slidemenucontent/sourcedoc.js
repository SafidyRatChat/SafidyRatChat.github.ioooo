var doc;
function docsource(map){
  const dleft = '<div class="header">Slide Menu (Left)</div>';
   const dright = `<div class="header">Liens et Documents 
                    <input type="file" id="file-selector" accept=".zip" style="display: none;" />
                     <input type="button" class="styled" value="add" onclick="document.getElementById('file-selector').click();"/><br>
                     </div>

                     Miala tsiny raha toa ka misy tokony mbola ampidirina, afaka manoratra ao amin'ny message isika`;
   let dcontents = `
         <div class="content">
             <div class="title">DOALOS</div>
             <a href="https://www.un.org/depts/los/LEGISLATIONANDTREATIES/index.htm" target="_blank"> Maritime Space: Maritime Zones and Maritime Delimitation</a><br>
             <a href ="https://www.un.org/depts/los/LEGISLATIONANDTREATIES/depositpublicity.htm" target="_blank"> Maritime Space: deposit publicity</a><br>
             <a href ="https://www.un.org/Depts/los/LEGISLATIONANDTREATIES/STATEFILES/MDG.htm" target="_blank"> Madagasikara deposit</a><br><br><br>

             <div class="title">DECRET et LOI</div>

             <a href="https://www.assemblee-nationale.mg/wp-content/uploads/2020/09/Loi-n%C2%B0-2018-025-zone-maritime.pdf" target="_blank"> Loi n°2018-025:  relative aux zones maritimes de l’espace maritime
             sous la juridiction de la République de
             Madagascar</a><br><br>

             <a href="https://www.un.org/Depts/los/LEGISLATIONANDTREATIES/PDFFILES/DecretMZN147Fr.pdf"  target="_blank">
DECRET N° 2018-1008:
fixant les lignes de base à partir desquelles est mesurée la largeur des différents espaces
maritimes relevant de la juridiction nationale de la République de Madagascar </a><br><br>

        <div class="title">DOCUMENTS</div>
        <a href="https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_f.pdf"  target="_blank">
        Convention des Nations Unies sur le droit de la mer (avec
          annexes, acte final et procès-verbaux de rectification de
          l'acte final en date des 3 mars 1986 et 26 juillet 1993).
          Conclue à Montego Bay le 10 décembre 1982 </a><br><br>

        <a href="https://www.un.org/Depts/los/doalos_publications/publicationstexts/Handbook%20on%20the%20delimitation%20of%20maritime%20boundaries_Eng.pdf"  target="_blank">
        Hanfbook on the Delimitation of Maritime Boundaries </a><br><br>

        <div class="title">SEYCHELLES</div>

        <a href="https://www.marineregions.org/eez.php"  target="_blank"> EZZ boundaries by Marineregions.org</a><br>
        <a href="https://marineregions.org/gazetteer.php?p=details&id=8337"  target="_blank"> EZZ boundaries   Seychelles by Marineregions.org</a><br>
        <a href=" https://www.un.org/depts/los/LEGISLATIONANDTREATIES/STATEFILES/SYC.htm" target="_blank"> DOALOS:  Seychelles deposit</a><br>
        <a href="https://www.nationalassembly.sc/sites/default/files/2022-08/SI%2081%202022%20-%20Maritime%20Zones%20%28Baselines%29%20Order%202022.pdf" target="_blank"> DOALOS:  Seychelles deposit</a><br>
        <a href="https://www.nationalassembly.sc/sites/default/files/2022-08/SI%2081%202022%20-%20Maritime%20Zones%20%28Baselines%29%20Order%202022.pdf" target="_blank">  Seychelles:Maritime Zones (Baselines) Order, 2022</a><br><br>
        
        <div class="title">CONTINENTAL SHELF EXTENSION</div>
         <a href="https://www.un.org/depts/los/clcs_new/submissions_files/mgd56_11/MDG-DOC-002_EXECUTIVE_SUMMARY_Updated.pdf"  target="_blank"> Submission to the Commission on the Limits of
         the Continental Shelf of
         the outer limits of the extended
          continental shelf of the Republic of Madagascar 
         </a><br><br>


        </div>`;

         


     


   /* left */



   L.control.slideMenu(dright+ dcontents, {
    position: 'topleft',
    menuposition: 'topleft',
    width: "35%",
    height: "85%",
    delay: "50",
    icon:"fa-sharp fa-solid fa-paperclip  fa-3x",
    
   
  }).addTo(map);


 
      

}
   