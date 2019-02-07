 function cypherEfect (){
let offsetSave = document.getElementById("numberss").value;
let msgSave = document.getElementById("word").value;
let cipherArgumentos = window.cipher.encode(parseInt( offsetSave), msgSave); 
document.getElementById("outmsg").value = cipherArgumentos;

}

document.getElementById("encriptar").addEventListener("click", cypherEfect);

   function cypherEfect2 (){
       
    let offsetSave = document.getElementById("numberss").value;
    let msgSave = document.getElementById("word").value;
    let cipherArgumentos = window.cipher.decode(parseInt( offsetSave), msgSave); 
    document.getElementById("outmsg").value = cipherArgumentos;
    
    }
    
    document.getElementById("desencriptar").addEventListener("click", cypherEfect2);

    function empty ()  {
      let offsetSave = document.getElementById("numberss").value="";
      let msgSave = document.getElementById("word").value= "";
      document.getElementById("outmsg").value = "";
      
   
    }
    document.getElementById("limpiar").addEventListener("click", empty);