document.addEventListener('DOMContentLoaded', (event)=>{

   
    count = 0;

    const minusCount = document.getElementById('minus')
    const showCount = document.getElementById('count')
    const plusCount = document.getElementById('plus')
   const day = document.getElementById('days')
   
    plusCount.addEventListener('click', ()=>{
        count++
        showCount.textContent = count
        localStorage.setItem('streakCount', count)
    })

    minusCount.addEventListener('click', ()=>{
        if(count>0){
              
        count--
        
            showCount.textContent = count
            
            localStorage.setItem('streakCount', count)
        }
    })

    const savedCount = localStorage.getItem('streakCount')
    if(savedCount !== null){
       
        count = parseInt(savedCount, 10)
        showCount.textContent = count
        day.textContent = count
        
    }
})