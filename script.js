const textArea = document.getElementById("editorTextarea")
const clearBtn = document.getElementById("clear")
const previewArea = document.getElementById("preview")


// Event Listeners
clearBtn.addEventListener('click', ()=>{
    textArea.value=''
    previewArea.innerHTML=''
})


textArea.addEventListener('input',(e)=>{
    console.log(textArea.value);
    previewArea.innerHTML = marked.parse(textArea.value);
    
    hljs.highlightAll();// for code highlight
})



