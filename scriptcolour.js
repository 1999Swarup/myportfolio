console.log('Its working')

let theme=localStorage.getItem('theme')

if(theme == null){
    setTheme('dark')
}else{
    setTheme(theme)
}

let themeDots=document.getElementsByClassName('theme-dot')

for(var i=0;themeDots.length>i;i++){
themeDots[i].addEventListener('click',function(){

    let mode=this.dataset.mode

    console.log('Option Clicked:-',mode) 

    setTheme(mode)
})
} 
function setTheme(mode){

    if(mode == 'light')
    {
        document.getElementById('theme-style').href='default.css'
    }

    if (mode == 'neon') 
    {
        document.getElementById('theme-style').href = 'neon.css'
    }

    if (mode == 'aqua')
    {
        document.getElementById('theme-style').href = 'aqua.css'
    }

    if (mode == 'dark') 
    {
        document.getElementById('theme-style').href = 'darkpurple.css'
    }

    localStorage.setItem('theme',mode)

}