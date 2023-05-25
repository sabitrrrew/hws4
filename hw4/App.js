const container = document.querySelector('.container')


const getPosts = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'data.json')
    request.setRequestHeader('Content-Type', 'application/json')
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach(i => {
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="card">
                <img src="${i.img}" alt="">
                <p>${i.description}</p>
                <p class="price">${i.price}</p>
             </div>
            `
            container.append(div)
        })
    })
}

getPosts()