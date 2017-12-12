console.log('Hello World');
var myName = '惠江华';
console.log(myName);
window.alert(myName);
function changeText(){
    var element = document.getElementById('element1');
    if(element.innerHTML === 'Jianghua Hui'){
        element.innerHTML ='惠江华';
   
    }  else{
        element.innerHTML = 'Jianghua Hui';   
    }

}


    var paragraph = document.getElementsByClassName('profile-detail');
    for(var i=0; i<paragraph.length; i++){
        paragraph[i].addEventListener("click", function(){
            description = this.getElementsByClassName('description');
            for(var j = 0; j < description.length; j++){
                description[j].classList.toggle('hide');
            }
            
        })

    }

function showLink(){
    document.getElementById('git-link').style.visibility="visible"
}
function hideLink(){
    document.getElementById('git-link').style.visibility="hidden"
}


function showModal(){
    document.getElementById("contact-modal").style.display="block";
}

function hideModal(){
    document.getElementById("contact-modal").style.display="none";
}


function contactButton(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
   
    

}