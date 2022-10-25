document.addEventListener('DOMContentLoaded', () =>{

    let eredmeny;

    function adatMegjelenites(termekLista){
        let szulo = document.getElementById('list');
        let li = document.createElement('li');
    
    for(let e of termekLista){
        
        li.textContent = e;
        szulo.appendChild(li);
    
    }
    };
    
    async function adatBetoltes() {
    
        let response = await fetch('/products.json');
        eredmeny = await response.json();

        let termekLista = document.getElementById('list');
        termekLista.textContent = '';
    };

    adatBetoltes();


    document.getElementById('mind').addEventListener('click',() =>{
        adatMegjelenites(eredmeny);
    });

    document.getElementById('abc').addEventListener('click',() =>{
        let abcList= eredmeny.products.title.sort(a-b);
        adatMegjelenites(abcList);
    });

    document.getElementById('draga').addEventListener('click',() =>{
        let dragaList= eredmeny.products.price.sort(b-a);
        adatMegjelenites(dragaList);
    });

    document.getElementById('leiras').addEventListener('click',() =>{
        let szoveg = document.getElementById('szoveg').innerHTML;
        let leirasList = eredmeny.products.description.filter(e => e.include(szoveg));

        adatMegjelenites(leirasList);
    });


    document.getElementById('ajanlat').addEventListener('click',() =>{

        let ajnalatList = eredmeny.products.price.filter(e=>e<100);
        ajnalatList = ajnalatList.sort(a-b);

        adatMegjelenites(ajnalatList);
    });

});

