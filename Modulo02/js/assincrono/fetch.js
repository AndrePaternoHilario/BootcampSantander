fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

// fetch sempre retorna uma Promise, sempre que usar o fetch usa o await