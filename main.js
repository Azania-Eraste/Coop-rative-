
window.onload = function () {
    affiche_plats(4)
}


const plat = [
    // Entrées
    [
        
        {
            "image": "image/cruidité.jpg",
            "title": "crudité de salade",
            "Description": "",
            "time": "",
            "prix" : "1500"
        },
        {
            "image": "image/saumon.jpg",
            "title": "Tartare de saumon",
            "Description": "",
            "time": "",
            "prix" : "1500"
        },
        {

            "image": "image/Chèvre_salade.jpg",
            "title": "Salade de chèvre chaud",
            "Description": "",
            "time": "",
            "prix" : "1500"
        },
        {
            "image": "image/Capproci_Boeuf.jpg",
            "title": "Carpaccio de bœuf",
            "Description": "",
            "time": "",
            "prix" : "1500"
        },
        
    ],
    // Plats
    [
        
        {
            "image": "image/attiéké_poulet.jpg",
            "title": "attiéké poulet braisé",
            "Description": "",
            "time": "",
            "prix" : "5000"
        },
        {
            "image": "image/poulet_braisé_frite.jpg",
            "title": "Frite poulet grillé",
            "Description": "",
            "time": "",
            "prix" : "5000"
        },
        {
            "image": "image/attiéké_poulet.jpg",
            "title": "attiéké poulet grillé",
            "Description": "",
            "time": "",
            "prix" : "5000"
        },
        {
            "image": "image/poulet_braisé_frite.jpg",
            "title": "Frite poulet braisé",
            "Description": "",
            "time": "",
            "prix" : "5000"
        },
        {
            "image": "image/attiéké_poisson_braisé.jpg",
            "title": "attiéké poisson braisé",
            "Description": "",
            "time": "",
            "prix" : "5000"
        },
        {
            "image": "image/attiéké_poisson_grillé.jpg",
            "title": "attiéké poisson grillé",
            "Description": "",
            "time": "",
            "prix" : "5000"
        },
        {
            "image": "image/pmme_terre.jpg",
            "title": "ragout de pomme de terre poulet",
            "Description": "",
            "time": "",
            "prix" : "5000"
        },
        {
            "image": "image/royal.jpg",
            "title": "pizza royal",
            "Description": "",
            "time": "",
            "prix" : "5000"
        },
        {
            "image": "image/trois fromage.jpg",
            "title": "pizza trois fromages",
            "Description": "",
            "time": "",
            "prix" : "5000"
        }
    ],
    // Desserts
    [
        
        {
            "image": "image/sorbet.jpg",
            "title": "Sorbet",
            "Description": "",
            "time": "",
            "prix" : "500"
        },
        {
            "image": "image/tiramisu.jpg",
            "title": "tiramisu",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
        {
            "image": "image/ile.jpg",
            "title": "ile flotante",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
        {
            "image": "image/mousse.jpg",
            "title": "Mousse au chocolat",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
        {
            "image": "image/crème.jpg",
            "title": "crême brulée",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
        {
            "image": "",
            "title": "Togba",
            "Description": "",
            "time": "",
            "prix" : "1000"
        }
    ],
    // Boissons
    [
        
        {
            "image": "image/bissap.jpg",
            "title": "Jus de bissap",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
        {
            "image": "image/orange.jpg",
            "title": "jus d'orange",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
        {
            "image": "image/ananas.jpg",
            "title": "jus d'ananas",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
        {
            "image": "image/cocktail_sans_alcool.jpg",
            "title": "cocktail (sans alcool)",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
        {
            "image": "image/cocktail_avec_alcool.jpg",
            "title": "cocktail (avec alcool)",
            "Description": "",
            "time": "",
            "prix" : "1500"
        },
        {
            "image": "image/valpierre.jpg",
            "title": "bouteille valpierre",
            "Description": "",
            "time": "",
            "prix" : "5000"
        },
        {
            "image": "image/Moët.jpg",
            "title": "bouteille champagne",
            "Description": "",
            "time": "",
            "prix" : "3000"
        },
        {
            "image": "image/coca.jpg",
            "title": "coca cola 600ml",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
    ],
    // Grillarde
    [
        
        {
            "image": "image/brchette_poulet.jpg",
            "title": "brochette poulet",
            "Description": "",
            "time": "",
            "prix" : "1500"
        },
        {
            "image": "image/Travers_porc.jpg",
            "title": "Travers de porc barbecue",
            "Description": "",
            "time": "",
            "prix" : "2500"
        },
        {
            "image": "image/Brochette_legumes.jpg",
            "title": "Brochettes de légumes",
            "Description": "",
            "time": "",
            "prix" : "1500"
        },
        {
            "image": "image/Brochette_crevette.jpg",
            "title": "Brochettes de crevettes",
            "Description": "",
            "time": "",
            "prix" : "500"
        },
    ],
    // A 16h
    [
        {
            "image": "image/bgofloto.jpg",
            "title": "gbofloto",
            "Description": "",
            "time": "",
            "prix" : "500"
        },
        {
            "image": "image/Bgozon.jpg",
            "title": "Bgozon",
            "Description": "",
            "time": "",
            "prix" : "1000"
        },
    ],
]

function Button_selected(params) {
    var button = document.getElementById(params);
    var selected = document.querySelectorAll(".selected");
    selected.forEach(element => {
        element.classList.remove("selected");
    });
    button.classList.toggle("selected");
    switch (params) {
        case 'Entrée':
            affiche_plats(0);
            break;

        case 'Plat':
            affiche_plats(1);
            break;

        case 'Dessert':
            affiche_plats(2);
            break;
        case 'Boisson':
            affiche_plats(3);
            break;
        case 'Grillard':
            affiche_plats(4);
            break;
        case 'A_16h':
            affiche_plats(5);
            break;
        default:
            break;
    }
    
}

function Commande(params) {
   
}

function affiche_plats(params) {
    let Plats_List = plat[params];
    const grid_Plat = document.getElementById('grid');
    let inner = ''
    Plats_List.forEach((element, index) => {
        inner += `
        <article class='dish'>
            <img src='${element.image}' alt="${element.title}">
            <h2>${element.title}</h2>
            <p>${element.prix}Fcfa</p>
            <button class="Btn_Commande" onclick='Commande(${params}, ${index})'>Commander</button>
        </article>
        `;
    });
    grid_Plat.innerHTML = inner;
}

function toggleMenu() {
    let menuicon = document.getElementById("hamburger-menu");
    let menucontent = document.getElementById("Header_Menu");
    menucontent.classList.toggle("show");
    menuicon.classList.toggle("open");
}

function Commande(params, index) {
    let Plats_List = plat[params];
    var customAlert = document.getElementById("customAlert");
    var closeAlertBtn = document.getElementById("closeAlert");
    var okButton = document.getElementById("okButton");
    var block = document.getElementById('block');
    block.innerHTML = `
            <img src="${Plats_List[index].image}" alt="test">
            <div id="left">
                <h2>${Plats_List[index].title}</h2>
                <h4>${Plats_List[index].Description}</h4>
                <p>${Plats_List[index].time}</p>
                <button id="okButton" class="Btn_Commande">Commander</button>
           </div>`;


    customAlert.style.display = "block";

    if (customAlert.style.display === "block") {
        closeAlertBtn.onclick = function() {
            customAlert.style.display = "none";
        }
    }

}