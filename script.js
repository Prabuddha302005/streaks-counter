document.addEventListener('DOMContentLoaded', (event)=>{

    count = 0 
    const minusCount = document.getElementById('minus')
    const showCount = document.getElementById('count')
    const plusCount = document.getElementById('plus')
    const day = document.getElementById('days')
    const head = document.getElementById('goal')
    const button = document.getElementById('value')

    
        
    button.addEventListener('click', ()=>{
        data = prompt("Enter your goal")
        head.textContent = data
        localStorage.setItem('saved_goal', data)
    })

    plusCount.addEventListener('click', ()=>{
        count++
        showCount.textContent = count
        localStorage.setItem('streakCount', count)
        day.textContent = count
    })

    minusCount.addEventListener('click', ()=>{
        if(count>0){
              
        count = 0
        
            showCount.textContent = count
            
            localStorage.setItem('streakCount', count)
            day.textContent = count

        }
    })

    const savedCount = localStorage.getItem('streakCount')
    const savedGoal = localStorage.getItem('saved_goal')
    
    
    if(savedCount !== null){
        
        count = parseInt(savedCount, 10)
        showCount.textContent = count
        day.textContent = count

        console.log(count)
        head.textContent = savedGoal
       

        
    }
})


// User should able to enter their goal.
