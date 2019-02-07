window.cipher = {
  
    encode: (offset, string) => {
        const upper = string.toUpperCase(); //transformar minusculas a mayusculas
        let encoded = "";
        
    
        for (let i = 0; i < upper.length; i++){ //camino que va a recorrer para
            let char = upper.charCodeAt(i); //tranformacion a codigo ascii
            let asciiDesplazado = (((char - 65 + offset) % 26) + 65);//desplazamiento
            //let encoded1 = String.fromCharCode(asciiDesplazado); 
            encoded+= String.fromCharCode(asciiDesplazado); 
            
        }
//el valor de retorno de mi funcion es vacio, no pasa los test
        return encoded;
      
    },
    

    decode: (offset, string)=> {
    
        const upper = string.toUpperCase();
        let decoded = "";
    
        for (let i = 0; i < upper.length; i++) {
            let char = upper.charCodeAt(i);
            let asciiDesplazado = (((char + 65 - offset) % 26) + 65);
            decoded += String.fromCharCode(asciiDesplazado);
        }   
        return decoded;
  }
   
};
