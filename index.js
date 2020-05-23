

document.getElementById('form').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();
    var t=getinputValue('title');
    var d=getinputValue('deadline');
    console.log(d);
    
    //saveMessage(t,d);
    
}

function getinputValue(id){
  return  document.getElementById(id).value;
}

function saveMessage(title,deadline){
    var newMessageRef=messageRef.push();
    newMessageRef.set({
     title: title,
     deadline:deadline

    });
}
