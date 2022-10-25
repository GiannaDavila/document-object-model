
        function displaydate(){
            document.getElementsByTagName('buttom')[0]
            .addEventListener("click",()=>{
                alert ('you clicked the button')
            })
            window.addEventListener('resize', ()=>{
                document.getElementById('demo').innerHTML= "you resized"
            })
            window.addEventListener("keydown",(event)=>{
                switch(event.key){
                    case'v':document.body.style.backgroundColor = 'violet'
                    break
                    case'v':document.body.style.backgroundColor = 'pink'
                break
                
                    case'v':document.body.style.backgroundColor = 'tan'
                break
                
                    case'v':document.body.style.backgroundColor = 'royalBlue'
                break
                
                    case'v':document.body.style.backgroundColor = 'red'
                }
            })
        }
        document.getElementsByName('button')

