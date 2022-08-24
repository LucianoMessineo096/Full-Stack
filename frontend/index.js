const App= document.querySelector('#App');
const submit = document.querySelector('#submit');


submit.addEventListener('click',submit=>{

    const name= document.querySelector('#name').value.toString();
    console.log(name)
    const surname = document.querySelector('#surname').value.toString();
    console.log(surname)

    const persona={

        nome:name,
        congnome:surname
    }

    console.log(persona)

    fetch('http://localhost:3000/persone',{

        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(persona),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

});




fetch('http://localhost:3000/home')
.then(response=>{

    return response.json()

    
})
.then(data=>{


    App.insertAdjacentText('beforeend',data)
})
