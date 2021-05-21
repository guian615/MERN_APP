// fetch("https://lh3.googleusercontent.com/proxy/diGemUZZF8T2j8kNXV5ZfdDAAyI6Y3D5y0OVgZCRSA9-6PVIZOZbHjOZ62zcLjanKVZdV7VDjY_x0vNykSAt1v6hlc5lFnWUpfl1XKZS1aVWjVU-RWbyAhlUToE7-g")
// .then(response=>{
//    console.log(response);
//    return response.blob();


// }).then(blob=>{

//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob);
// }).catch(error=>{
//     console.log(error);
// }); 

const content= document.querySelector('#content');

window.addEventListener('load', ()=>{

    getUsers();

    $('#submit').on('click',function(){
      fullname=  $('#full_name').val();
      Age=$('#age').val();
      Address= $('#address').val();
      let formData={fullname,
        Age,Address};

       fetch('http://localhost:5000/student/add',{
       method:"POST",
       body: JSON.stringify(formData),
       headers:{
        'Content-Type':'json'
       }
     })
    });

});
function getUsers(){
    let html = "";
    fetch('http://localhost:5000/student',)
    .then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data)
        data.forEach(element => {
         html+=`<li> ${element.fullname}  ${element.age}   ${element.address}</li>`
        });
          content.innerHTML=html;
 


    }).catch(error=>{

        console.log(error);
    })

}