
export function DataLog(data){
    let error=[]

    //const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(data.usuario ===""){
        error.usuario = "El usuario no puede estar vacio"

    }else{
        error.usuario = ""
    }

    if(data.contra ===""){
        error.contra = "La contraseña no puede estar vacia"
    }else{
        error.contra = ""
    }  

    return error
} 

