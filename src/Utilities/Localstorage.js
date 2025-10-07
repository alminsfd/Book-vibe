import { toast } from "react-toastify"

const getaddcard=()=>{
    const addLocalStorage=localStorage.getItem('addlist')
    if(addLocalStorage){
        const store=JSON.parse(addLocalStorage)
        return store
    }
    else{
        return []                 
    }
}

const addDataTolocal=(id)=>{
    const getdata = getaddcard()
    if(getdata.includes(id)){
        toast("This book is already exist")
    }else{
       getdata.push(id)
        localStorage.setItem('addlist',JSON.stringify(getdata))
    }
}
export{addDataTolocal,getaddcard}