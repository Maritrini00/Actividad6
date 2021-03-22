const cambiarImagen=()=>{
    let foco=document.getElementById("foco");
    if(foco.src.match('focoOff.png')){
        foco.src='focoOn.png'
    }else{
        foco.src='focoOff.png'
    }
}