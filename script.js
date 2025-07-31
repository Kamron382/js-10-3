let inp = document.querySelector('input')
let btn = document.querySelector('button')
let div = document.querySelector('div')
let img = document.querySelector('img')
img.style.width = '100px'
img.style.height = '100px'
btn.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=5f1077f561d87b1be334b15838fc01b4`)
        .then((res) => res.json())
        .then((data) => {
            switch (data.weather[0].main) {
                case 'Clouds':
                    img.src = './clouds.jpg'
                    break
                case 'Snow':
                    img.src='./snow.jpg'
                    break
                case 'Clear':
                    img.src = './sun.png'
                    break
                case 'Rain':
                    img.src = './rain.jpg'
                    break
                case 'Mist':
                    img.src = './mist.png'
                    break
            }
            div.innerHTML += `
        
        <h1>${Math.round(data.main.temp)}°C</h1>
        <div class="box2">
        <h1>${Math.round(data.main.temp_min)}°C</h1>
        <h1>${Math.round(data.main.temp_max)}°C</h1>
        </div>
        `
        

})
    
})


