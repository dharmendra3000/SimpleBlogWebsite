const selectElement = document.querySelector(".places");




selectElement.addEventListener("change", (event) => {
    if(selectElement.value==="delhi"){
        document.getElementById("destination-info").style.display='none';
        document.getElementById("delhidisplay").style.display='block';

        document.getElementById("chandigarhdisplay").style.display='none';
        document.getElementById("manalidisplay").style.display='none';
        document.getElementById("kashmirdisplay").style.display='none';
        document.getElementById("gurgaondisplay").style.display='none';

    }else if(selectElement.value==="chandigarh"){
        document.getElementById("destination-info").style.display='none';
        document.getElementById("chandigarhdisplay").style.display='block';


        document.getElementById("delhidisplay").style.display='none';
        document.getElementById("manalidisplay").style.display='none';
        document.getElementById("kashmirdisplay").style.display='none';
        document.getElementById("gurgaondisplay").style.display='none';

    }else if(selectElement.value==="manali"){
        document.getElementById("destination-info").style.display='none';
        document.getElementById("manalidisplay").style.display='block';

        document.getElementById("delhidisplay").style.display='none';
        document.getElementById("chandigarhdisplay").style.display='none';
        document.getElementById("kashmirdisplay").style.display='none';
        document.getElementById("gurgaondisplay").style.display='none';

    }else if(selectElement.value==="kashmir"){
        document.getElementById("destination-info").style.display='none';
        document.getElementById("kashmirdisplay").style.display='block';

        document.getElementById("delhidisplay").style.display='none';
        document.getElementById("chandigarhdisplay").style.display='none';
        document.getElementById("manalidisplay").style.display='none';
        document.getElementById("gurgaondisplay").style.display='none';

    }else if(selectElement.value==="gurgaon"){
        document.getElementById("destination-info").style.display='none';
        document.getElementById("gurgaondisplay").style.display='block';


        document.getElementById("delhidisplay").style.display='none';
        document.getElementById("chandigarhdisplay").style.display='none';
        document.getElementById("manalidisplay").style.display='none';
        document.getElementById("kashmirdisplay").style.display='none';
    }




   
  });

// selectElement.addEventListener("change", (event) => {
//     result.textContent = `You like ${event.target.value}`;
//   });



// document.addEventListener("DOMContentLoaded",function(){
//     const destinationDropdown=document.getElementById("destinations");
//     const destinationInfo=document.getElementById("destination-info");

//     destinationDropdown.addEventListener("change",function(){
//         var selectedDestination=destinationDropdown.value;
//         showDestinationInfo(selectedDestination);

//     });

//     function showDestinationInfo(destination){
//         const destinationContent={
//             delhi:{
//                 title:"Delhi",
//                 description:"Capital City of India",
//                 image:"delhi.jpg"

//             },
//             chandigarh:{
//                 title:"Chandigarh",
//                 description:"Chandigarh City",
//                 image:"chandigarh.jpg"
//             },

//             kashmir:{
//                 title:"Kashmir",
//                 description:"Kashmir",
//                 image:"kashmir.jpg"

//             },
//             gurgaon:{
//                 title:"Gurgaon",
//                 description:"Gurgaon",
//                 image:"gurgaon.jpg"

//             },
//             manali:{
//                 title:"Manali",
//                 description:"Manali",
//                 image:"manali.jpg"
//             }
//         };

//         var content = destinationContent.destination
//         destinationInfo.innerHTML=`
//         <h2>${content.title}</h2>
//         <p>${content.description}</p>
//         <img src="${content.image}" alt="${content.title}">
//         `;

        // if(destinationContent.destination){
        //     const content=destinationContent[destination];
        //     destination.innerHTML=`
        //         <h2>${content.title}</h2>
        //         <p>${content.description}</p>
        //         <img src="${content.image}" alt="${content.title}">
        //     `;
        // }

//     }
// });
