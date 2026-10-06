
//colonna dei contatti
let colonnaContatti = document.querySelector('#colonnaContatti');

//bottoni
let mostraContatti = document.querySelector('#mostraContatti');
let addBtn = document.querySelector('#addBtn');
let deleteBtn = document.querySelector('#deleteBtn');
let editBtn = document.querySelector('#editBtn');

//input per modificare contatto
let modificaNome = document.querySelector('#modificaNome');
let modificaNumero = document.querySelector('#modificaNumero');

let check = false;

let rubrica = {

    listaContatti : [

        {contactName : 'Sara', contactNumber : 3333333333},
        {contactName : 'Filippo', contactNumber : 4444444444},
        {contactName : 'Giorgia', contactNumber : 5555555555},
        {contactName : 'Stefano', contactNumber : 6666666666},
    ],


 showContacts : function (){
            colonnaContatti.innerHTML = '';
            rubrica.listaContatti.forEach(contatto => {
            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
            <p class="m-0">${contatto.contactName}</p>
            <p class="m-0">${contatto.contactNumber}</p>
            <i class="bi bi-trash3"></i> `
            colonnaContatti.appendChild(div);
            });

            let icons = document.querySelectorAll('.bi-trash3');
            icons.forEach( (icona, i)=>{
            icona.addEventListener('click', ()=>{
            rubrica.listaContatti.splice(i, 1);
            rubrica.showContacts();
            });
        
        });
    },


    addContact : function(newName, newNumber){
    this.listaContatti.push( {contactName : newName, contactNumber : newNumber});
    
    },

    editContact : function(nome, numero){
    
    rubrica.listaContatti.forEach(contatto =>{
        
        if(contatto.contactName == nome){
           contatto.contactNumber = numero;
        }
 
    });
   
    }
    };
    
    mostraContatti.addEventListener('click', ()=>{
    rubrica.showContacts();
    if(check == false){
    rubrica.showContacts();
    check = true;
    mostraContatti.innerHTML = "Nascondi";
    } else {
    colonnaContatti.innerHTML = '';
    mostraContatti.innerHTML = "Mostra";
    check = false;
   

    }


    });

    

    addBtn.addEventListener('click', ()=>{
        
        let inputNome = document.querySelector('#inputNome');
        let inputNumero = document.querySelector('#inputNumero');
        let nome = inputNome.value;
        let numero = inputNumero.value;
        let check = false;
    
        if(
            
        nome == '' || numero == '') {
        alert("Devi inserire entrambi i campi");
        return;
        }   

        rubrica.addContact(nome,numero);
        rubrica.showContacts();
        mostraContatti.innerHTML = "Nascondi";
        check = true;  

        });

        
        editBtn.addEventListener('click', ()=>{
            
            if(modificaNome.value != ''){
                rubrica.editContact(modificaNome.value, modificaNumero.value);
                rubrica.showContacts();
                modificaNome.value = '';
                modificaNumero.value = '';
                mostraContatti.innerHTML = "Nascondi";
                check = true;
            }

        


});

     

       


    
    
