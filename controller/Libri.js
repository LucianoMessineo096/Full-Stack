const button = document.querySelector('#load');
const inserisci = document.querySelector('#insert');
const tbody = $('table tbody');


inserisci.addEventListener('click',()=>{

    const isbn = $('input[name="isbn"]').val();
    const titolo = $('input[name="titolo"]').val();
    const descrizione = $('input[name="descrizione"]').val();
    const categoria = $('input[name="categoria"]').val();
    const prezzo = $('input[name="prezzo"]').val();
    const n_copie = $('input[name="ncopie"]').val();
    const id_autore = $('input[name="idautore"]').val();

    const tbody = $("table tbody")

    const row=`<tr>`+
                    `<td>`+ isbn        +`</td>`+
                    `<td>`+ titolo      +`</td>`+
                    `<td>`+ descrizione +`</td>`+
                    `<td>`+ categoria   +`</td>`+
                    `<td>`+ prezzo      +`</td>`+
                    `<td>`+ n_copie      +`</td>`+
                    `<td>`+ id_autore    +`</td>`+
                `</tr>`;

    tbody.append(row)
    
})

button.addEventListener('click',()=>{

    var count = $("table tbody").children().length;

    if(count!=0){

        //rimozione esistenti e inserimento nuovi




    }else{

        fetch('/books')
        .then(response=>{

            return response.json();
        })
        .then(books=>{

            books.forEach((book,index)=>{

                const tbody = $("table tbody")

                const row=`<tr>`+
                                `<td>`+ book.isbn        +`</td>`+
                                `<td>`+ book.titolo      +`</td>`+
                                `<td>`+ book.descrizione +`</td>`+
                                `<td>`+ book.categoria   +`</td>`+
                                `<td>`+ book.prezzo      +`</td>`+
                                `<td>`+ book.nCopie      +`</td>`+
                                `<td>`+ book.idAutore    +`</td>`+
                            `</tr>`;

                tbody.append(row)
                
            })

        })

    }

    
})