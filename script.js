// ========================================
// 🌌 UNIVERSO PARA EUNICE
// ========================================


// ========================================
// ⭐ CREAR ESTRELLAS
// ========================================

for (let i = 0; i < 400; i++) {

    const estrella = document.createElement("div");

    estrella.classList.add("estrella");

    // Tamaños diferentes
    const tamaño = Math.random() * 4 + 1;

    estrella.style.width = tamaño + "px";
    estrella.style.height = tamaño + "px";

    // Posición aleatoria
    estrella.style.left =
        Math.random() * window.innerWidth + "px";

    estrella.style.top =
        Math.random() * window.innerHeight + "px";

    // Parpadeo diferente
    estrella.style.animationDelay =
        Math.random() * 5 + "s";

    estrella.style.animationDuration =
        Math.random() * 3 + 2 + "s";

    document.getElementById("universo")
        .appendChild(estrella);
}


// ========================================
// 🌠 ESTRELLAS FUGACES
// ========================================

function crearEstrellaFugaz() {

    const estrella = document.createElement("div");

    estrella.classList.add("estrellaFugaz");

    estrella.style.left = "-100px";

    estrella.style.top =
        Math.random() * (window.innerHeight * 0.6) + "px";

    document.getElementById("universo")
        .appendChild(estrella);

    let x = -100;

    let y = parseFloat(estrella.style.top);

    const mover = setInterval(() => {

        x += 12;
        y += 5;

        estrella.style.left = x + "px";
        estrella.style.top = y + "px";

        if (x > window.innerWidth + 100) {

            clearInterval(mover);

            estrella.remove();
        }

    }, 20);
}


// Una estrella fugaz cada cierto tiempo
setInterval(crearEstrellaFugaz, 4500);


// ========================================
// 💚 MENSAJES
// ========================================

const titulo = document.getElementById("titulo");

const mensajes = [

    "Para mi niña 💚",

    "Para mi Eunice 🌻",

    "Tengo algo que mostrarte...",

    "✨"

];

let indice = 0;


function cambiarMensaje() {

    titulo.style.opacity = "0";

    setTimeout(() => {

        titulo.innerHTML = mensajes[indice];

        titulo.style.opacity = "1";

        indice++;

        if (indice < mensajes.length) {

            setTimeout(cambiarMensaje, 2500);

        } else {

            // Cuando termina la historia
            setTimeout(() => {

                document.getElementById("btnCarta")
                    .style.display = "block";

            }, 1800);

        }

    }, 700);
}



// ========================================
// 🌻 GIRASOLES
// ========================================

function crearGirasol() {

    const girasol = document.createElement("div");

    girasol.classList.add("girasol");

    girasol.innerHTML = "🌻";

    girasol.style.left =
        Math.random() * window.innerWidth + "px";

    girasol.style.fontSize =
        Math.random() * 25 + 20 + "px";

    document.getElementById("universo")
        .appendChild(girasol);

    let y = -60;

    const velocidad =
        Math.random() * 1.5 + 0.5;

    const caer = setInterval(() => {

        y += velocidad;

        girasol.style.top = y + "px";

        if (y > window.innerHeight + 60) {

            clearInterval(caer);

            girasol.remove();
        }

    }, 20);
}


setInterval(crearGirasol, 1600);


// ========================================
// 💌 CARTA
// ========================================

const boton =
    document.getElementById("btnCarta");

const sobre =
    document.getElementById("sobre");

const texto =
    document.getElementById("textoCarta");


 boton.addEventListener("click",()=>{

    const musica = document.getElementById("musica");

    if (musica) {

        musica.volume = 0.7;

        musica.play()
            .then(() => {
                console.log("🎵 Música reproduciéndose");
            })
            .catch((error) => {
                console.log("❌ No se pudo reproducir:", error);
            });

    }

    boton.style.display="none";

    sobre.style.display="block";

    textoCarta.innerHTML=`

Mi niña...

Gracias por llegar a mi vida.

Tal vez este no sea el regalo más caro del mundo...

Pero sí uno en el que puse tiempo, cariño y muchas ganas.

Cada línea de código que ves aquí la escribí pensando en ti.

Espero que cada vez que mires las estrellas recuerdes que siempre habrá alguien que te quiere muchísimo. TE AMOOOO 💚 MI NIÑA. 
Te amo con todo mi corazón y espero que este regalo te haga sonreír tanto como tú me haces sonreír a mí. 🌻
te quiero mucho, mi flaca. 💚
Eres todo lo que quería y más. Gracias por ser tú, por tu amor y por hacerme sentir tan especial. Eres mi sol en los días nublados y mi refugio en las tormentas. No hay palabras suficientes para expresar lo agradecido que estoy de tenerte en mi vida.

Con mucho cariño...                               



  ❤️ ❤️ ❤️ SEBASTIAN  ❤️ ❤️ ❤️

`;

 

    // Después de unos segundos
    setTimeout(() => {

        crearBotonFinal();

    }, 7000);

});


// ========================================
// 🌻 BOTÓN FINAL
// ========================================

function crearBotonFinal() {

    const botonFinal =
        document.createElement("button");

    botonFinal.id = "botonFinal";

    botonFinal.innerHTML =
        "Una última cosita... 🌻";

    document.getElementById("universo")
        .appendChild(botonFinal);


    botonFinal.addEventListener("click", () => {

        sobre.style.display = "none";

        botonFinal.remove();

        mostrarFinal();

    });

}


// ========================================
// ❤️ FINAL
// ========================================

function mostrarFinal() {

     titulo.innerHTML =
    "Para mi Eunice 💚";

titulo.classList.add("tituloFinal");

titulo.style.opacity = "1";

    const final =
        document.createElement("div");

    final.id = "final";

    final.innerHTML = `

        <div class="corazon">💚</div>

        <h2>
            QUIERO VERLA,
            CONOCERLA,
            QUE ES NEGRA JAJAJA 😂
        </h2>

        <p>
            Y algún día vamos a cumplir
            todas esas cosas que decimos. 🌻
        </p>

        <p>
            Te quiero muchísimo, mi flaca. 💚
        </p>

    `;


    document.getElementById("universo")
        .appendChild(final);


    // Corazones flotando
    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            crearCorazon();

        }, i * 400);

    }

}


// ========================================
// 💚 CORAZONES
// ========================================

function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.classList.add("corazonFlotante");

    corazon.innerHTML = "💚";

    corazon.style.left =
        Math.random() * window.innerWidth + "px";

    document.getElementById("universo")
        .appendChild(corazon);


    setTimeout(() => {

        corazon.remove();

    }, 5000);

}
 // =========================================
// 🔐 LOGIN INICIAL
// =========================================

function entrarPagina(){

    const fecha =
        document.getElementById("fechaInicial").value
        .trim();

    if(fecha === "30/06" || fecha === "30-06"){

        document.getElementById("loginInicial").style.display =
            "none";

        document.getElementById("universo").style.display =
            "block";

        // Iniciar la historia solamente después de entrar
        indice = 0;
        cambiarMensaje();

    }else{

        document.getElementById("errorInicial").innerHTML =
            "Mmm... esa no es la fecha, mi niña 😏💚";

    }

}


// =========================================
// 🔐 SEGUNDO LOGIN
// =========================================

function mostrarLoginGaleria(){

    const login =
        document.getElementById("loginGaleria");

    if(login){

        login.style.display = "flex";

    }

}


// =========================================
// 📸 ENTRAR A LA GALERÍA
// =========================================

function entrarGaleria(){

    const fecha =
        document.getElementById("fechaGaleria").value
        .trim();

    if(fecha === "30/06" || fecha === "30-06"){

        document.getElementById("loginGaleria").style.display =
            "none";

        document.getElementById("universo").style.display =
            "none";

        document.getElementById("galeria").style.display =
            "block";

        window.scrollTo(0,0);

    }else{

        document.getElementById("errorGaleria").innerHTML =
            "Nope 😏... piensa en nuestra fecha 💚";

    }

}


// =========================================
// 💌 DETECTAR EL FINAL DE LA HISTORIA
// =========================================
//
// Esperamos a que tu #final aparezca.
// No modificamos tu código existente.
//

const revisarFinal = setInterval(()=>{

    const final =
        document.getElementById("final");

    const login =
        document.getElementById("loginGaleria");

    if(!final || !login){

        return;

    }

    const estilo =
        window.getComputedStyle(final);

    if(
        estilo.display !== "none" &&
        estilo.visibility !== "hidden" &&
        !final.dataset.loginMostrado
    ){

        final.dataset.loginMostrado = "true";

        setTimeout(()=>{

            mostrarLoginGaleria();

        },3000);

        clearInterval(revisarFinal);

    }

},1000);