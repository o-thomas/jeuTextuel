class Person {
    constructor(prenom,question1,phraseP1,question2,phraseP2,question3,phraseP3,question4,phraseP4,phraseN,array ) { //phraseP c'est la phrase qui va aider le joueur
        this.prenom = prenom
        this.question1 = question1
        this.phraseP1 = phraseP1
        this.question2 = question2
        this.phraseP2 = phraseP2
        this.question3 = question3
        this.phraseP3 = phraseP3
        this.question4 = question4
        this.phraseP4 = phraseP4
        this.phraseN = phraseN
        this.array = array
        
        
        
    }
    phrasePositive() {
        console.log(this.phraseP)
    }
    phraseNegative() {
        console.log(this.phraseN)
    }

}



let phrase =""
let Steeven = new Person("steeven","Je suis là pour la disparition du vase. Expliquez-moi plus en détail ce que vous savez s'il vous plaît.","Bonjour, comme vous le savez, un vase a disparu je l'ai su par Julietta je vous conseille d'aller la voir.","Connaissez-vous bien Julietta ?","Pas vraiment, mais j'ai un petit doute sur elle.","J'ai couru suite à votre appel, dites-moi ce que vous savez.","Comme on vous l'a dit, un vase a disparu, je crois que c'est Julietta de l'accueil qui m'en a parlé.","Vous qui êtes le directeur vous ne savez rien d'autre ?","je vous conseille d'aller voir Julietta, c'est la commère du musée, elle pourra vous en dire plus.","Je ne sais pas",[])
let Roseta = new Person("roseta","Bonjour, comment allez-vous aujourd'hui ?","Ça peut aller, j'ai connu des jours meilleurs.","Vous avez l'air stressée, que vous arrive t'il ?","Hier je n'étais pas bien, j'ai perdu ma bague de fiançailles, j'ai eu la peur de ma vie.","Je suis la personne qui va enquêter sur la disparition du vase, vous étiez sur les lieux hier ? ","Oui je travaillais hier, j'étais en train de trier les archives quand d'un seul coup, j'ai entendu un bruit dans la salle des vases.","Qui pourrait en savoir plus sur la disparition du vase ?","C'est Logan qui est en charge de la sécurité, je vous conseille d'aller le voir.","Je suis désolé je n'ai pas le temps...j'ai une tonne de paperasse a trier",[])
let John = new Person("john","Pourquoi êtes-vous repassé au musée hier soir ?","Je suis repassé au travail après une soirée car j'avais oublié quelque chose.","Vous n'avez rien vu de suspect ?","En repartant, j'ai croisé Rosetta qui était à la salle des archives. Elle avait l'air en panique.","Avez-vous vu le vase ?","Non désolé... mes souvenir sont assez...approximatifs de la soirée d'hier.","Pouvez vous me dire ce que vous savez par rapport à la disparition du vase ?","Hier je suis repassé au boulot, j'avais oublié mes clés de maison, en passant j'ai vu Rosetta, elle avait l'air stressée je n'ai pas compris pourquoi.","Je ne peux pas vous aider...j'ai vraiment mal à la tête.",[])
let Julietta = new Person("julietta","Bonjour, je suis le détective chargé de l'enquête, pouvez-vous m'aider ?","Bonjour, bien-sûr.","Que savez-vous sur le reste du personnel?","Pas grand chose je suis nouvelle... mais John a l'air d'avoir un sacré coup de bouteille.","Que faisiez-vous hier soir ?","j'étais au travail toute la soirée à l'accueil","Avez-vous vu ou entendu quelque chose de suspect hier ?","j'ai vu John revenir, il avait l'air saoul.","Je ne peux pas vous aider, je suis occupée. ",[])
let Logan = new Person( "logan","Bonjour, je suis là pour le vase qui a disparu.","Quoi ?! Un vase a disparu ?!","Que pouvez-vous me dire à propos de la soirée d'hier ?","Rien de spécial, j'ai fait des rondes de surveillance toute la nuit et je n'ai rien vu. ","Que faisiez-vous hier soir ?","Je faisais des rondes de surveillance dehors.","Auriez-vous un conseil à me donner au sujet de la disparition du vase ?","Allez voir à la salle de réparation des œuvres ! ","Désolé mais les visiteurs affluent...je n'ai vraiment pas le temps de vous aider.",[])
let form = document.getElementById("form")
let tabInterview = ["depart"];
let i = 0;
let content = document.getElementById("content")
let id = document.getElementById("carteId")
let badgeContent = document.getElementById("etat")
let test;
let reponse1 = document.getElementById("reponse1")
let reponse2 = document.getElementById("reponse2")
let reponse3 = document.getElementById("reponse3")
let reponse4 = document.getElementById("reponse4")
let quest1 = document.getElementById("quest1")
let quest2 = document.getElementById("quest2")
let quest3 = document.getElementById("quest3")
let quest4 = document.getElementById("quest4")
let intro = document.getElementById("intro")
let inter;

function sentenceMemory() {
    var u =0
    let phrase = document.getElementById("phrase").value;
    localStorage.setItem("phrase",phrase)
   
}



function displayRep1(perso, cible){
     j = -1
    let i = 0
    
   
    
    while (j <= tabInterview.length) {
        if (tabInterview[j] == cible) {
            var test = perso.phraseP1
            
            
            
            break
            
        } else {
            var test = perso.phraseN
        }
        j++
    }
    reponse1.innerHTML=test;
    }
    
    function displayRep3(perso, cible){
        j = -1
       
    let i = 0
    

        while (j <= tabInterview.length) {
            if (tabInterview[j] == cible ) {
                var test = perso.phraseP3
                console.log(inter)
                

                    
                break
                    
            } else {
                var test = perso.phraseN
            }
            j++
        }
        reponse3.innerHTML=test;
        }

        function displayRep4(perso, cible){
            let i = 0
            j=-1
   
            while (j <= tabInterview.length) {
                
                console.log(inter)
                if (tabInterview[j] == cible) {
                    var test = perso.phraseP4
                    console.log(inter)
                    tabInterview.push(perso.prenom)
                    console.log(tabInterview[j])
                    break
                    
                } else {
                    var test = perso.phraseN
                }
                j++
            }
            reponse4.innerHTML=test;
            }
        

    
  

function introduction() {
    document.getElementById("bouton-continu").style.display = "none"
    document.getElementById("epilogue").style.display = "none"
    content.style.display="none";
    intro.style.display="unset";
    document.getElementById("fin").style.display = "none"
    document.body.style.backgroundImage = "none"
    intro.style.width = "30%"
    intro.style.marginLeft="36%"
    intro.style.marginTop="15%"
    document.body.style.backgroundColor = "black"
    intro.style.color = "white"
    var chaine = " Hier soir, un objet de valeur a disparu, il y a aucune trace sur les caméras de vidéo-surveillance, les alarmes ne se sont pas enclenchées. Votre mission si vous l'acceptez est d'enquêter sur cette mystérieuse disparition."; 
var nb_car = chaine.length; 
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
var txt = texte[i];
}

actual_texte = 0;
function changeMessage()
{
    intro.style.color = "white"
document.getElementById("text").innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
if(actual_texte == texte.length -1){
    clearInterval(baba)
    setTimeout(function(){reset()}, 2000)
}

}
var baba = setInterval(function(){changeMessage()},100) 



}


    
    


    

function displayRep2(perso,cible){
    let i = 0
    j=-1

    while (j <= tabInterview.length) {
        if (tabInterview[j] == cible) {
            var test = perso.phraseP2
            
            break
                
        } else {
            var test = perso.phraseN
        }
        j++
    }
    reponse2.innerHTML=test;
    }
   

function phraseSteeven() {
    var i = -1
    document.getElementById("nomPiece").innerHTML = "Bureau"
    inter = "Steeven"
    quest1.value = Steeven.question1;
    quest2.value = Steeven.question2;
    quest3.value = Steeven.question3;
    quest4.value = Steeven.question4;
    var j = 0
    while(j==tabInterview.length){
        console.log(tabInterview[j])
        j++
    }
    
    document.body.style.backgroundImage = "url('image/bureau.png')";
    document.getElementById("etat").innerHTML="<image class='col-12' src = 'image/steeven.png'></image>"
    content.style.display="none";
    id.style.display="unset";
    quest1.addEventListener("click",function (){
        reponse1.innerHTML=Steeven.phraseP1;
        tabInterview.push(Steeven.prenom)
    })
    quest2.addEventListener("click",function (){
        reponse2.innerHTML=Steeven.phraseP2;
        tabInterview.push(Steeven.prenom)
    })
    quest3.addEventListener("click",function (){
        reponse3.innerHTML=Steeven.phraseP3;
        tabInterview.push(Steeven.prenom)
    })
    quest4.addEventListener("click",function (){
        reponse4.innerHTML=Steeven.phraseP4;
        tabInterview.push(Steeven.prenom)
    })
}
    

   
function phraseJulietta() {
    var i = -1
    document.getElementById("nomPiece").innerHTML = "Accueil"
    inter = "Julietta"
    quest1.value = Julietta.question1;
    quest2.value = Julietta.question2;
    quest3.value = Julietta.question3;
    quest4.value = Julietta.question4;
    quest2.style.marginLeft = "5%"
    document.getElementById("etat").innerHTML="<image class=' col-12' src = 'image/julietta.png'></image>"
    document.body.style.backgroundImage = "url('image/acceuil.png')";
    content.style.display="none";
    id.style.display="unset";
    quest1.addEventListener("click",function (){
        displayRep1(Julietta,"steeven")
    })
    quest2.addEventListener("click",function (){
        displayRep2(Julietta,"steeven")
    })
    quest3.addEventListener("click",function (){
        displayRep3(Julietta,"steeven")
    })
    quest4.addEventListener("click",function (){
        displayRep4(Julietta,"steeven")
    })
}

function phraseJohn() {
    document.getElementById("nomPiece").innerHTML = "Salle des peintures"
    inter = "John"
    quest1.value = John.question1;
    quest2.value = John.question2;
    quest3.value = John.question3;
    quest4.value = John.question4;
    quest2.style.marginLeft = "-5%"
    document.getElementById("etat").innerHTML="<image class='col-12' src = 'image/jhon.png'></image>"
    document.body.style.backgroundImage = "url('image/peinture.png')";
     content.style.display="none";
    id.style.display="unset";
    quest1.addEventListener("click",function (){
        displayRep1(John,Julietta.prenom)
    })
    quest2.addEventListener("click",function (){
        displayRep2(John,Julietta.prenom)
    })
    quest3.addEventListener("click",function (){
        displayRep3(John,Julietta.prenom)
    })
    quest4.addEventListener("click",function (){
        displayRep4(John,Julietta.prenom)
    })
}

function phraseRosetta() {
    document.getElementById("nomPiece").innerHTML = "Salle des archives"
    inter = "Roseta"
    quest1.value =  Roseta.question1;
    quest2.value = Roseta.question2;
    quest3.value = Roseta.question3;
    quest4.value = Roseta.question4;
    quest2.style.marginLeft = "10%"
    document.getElementById("etat").innerHTML="<image class='col-11' src = 'image/rosetta.png'></image>"
    document.body.style.backgroundImage = "url('image/archive.png')"; 
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.width = "100%"
    document.body.style.height = "100%"
    content.style.display="none";
    id.style.display="unset";
    quest1.addEventListener("click",function (){
        displayRep1(Roseta,John.prenom)
    })
    quest2.addEventListener("click",function (){
        displayRep2(Roseta,John.prenom)
    })
    quest3.addEventListener("click",function (){
        displayRep3(Roseta,John.prenom)
    })
    quest4.addEventListener("click",function (){
        displayRep4(Roseta,John.prenom)
    })

}

function phraseLogan() {
    document.getElementById("nomPiece").innerHTML = "Salle de la grèce antique"
inter = "Logan"
    quest1.value = Logan.question1;
    quest2.value = Logan.question2;
    quest3.value = Logan.question3;
    quest4.value = Logan.question4;
    quest2.style.marginLeft = "25%"
    document.getElementById("etat").innerHTML="<image class='col-10' src = 'image/logan.png'></image>"
    document.body.style.backgroundImage = "url('image/grece.png')";
    content.style.display="none";
    id.classList.add("d-flex","flex-wrap");
    quest1.style.display="flex";
    quest1.classList.add("d-flex","flex-wrap");
    quest1.addEventListener("click",function (){
        displayRep1(Logan,Roseta.prenom)
    })
    quest2.addEventListener("click",function (){
        displayRep2(Logan,Roseta.prenom)
    })
    quest3.addEventListener("click",function (){
        displayRep3(Logan,Roseta.prenom)
    })
    quest4.addEventListener("click",function (){
        displayRep4(Logan,Roseta.prenom)
    })


}

function displayForm(){
form.style.display = "unset"
}
function reset() {
    
    if(reponse4.innerHTML == Logan.phraseP4 || reponse2.innerHTML == Logan.phraseP4){
        resetfin()
        
    }else{
        console.log(tabInterview[1])
    intro.style.display ="none"
    document.getElementById("container").style.display="unset"
    document.getElementById("epilogue").classList.remove("d-flex");
    quest1.style.display = "unset";
    quest2.style.display = "unset";
    document.body.style.backgroundImage = "url('image/museeback.png')";
    quest2.style.display = "unset";
    reponse1.innerHTML =""
    reponse2.innerHTML =""
    reponse3.innerHTML =""
    reponse4.innerHTML =""
    content.style.display = "unset";
    id.style.display ="none";
    id.classList.remove("d-flex","flex-wrap");
    document.getElementById("bilel").style.display="none";
    }
}

function resetfin() {
    tabInterview.splice(0, tabInterview.length +1)
    intro.style.display ="none"
    document.getElementById("container").style.display="unset"
    quest1.style.display = "unset";
    document.body.style.backgroundImage = "url('image/museeback.png')";
    
    reponse1.innerHTML =""
    reponse2.innerHTML =""
    content.style.display = "unset";
    id.style.display ="none";
    document.getElementById("bil").style.display="none";
    endGame()

}
        
   function epilogue(){
       document.getElementById("epilogue").style.display ="unset"
       document.getElementById("epilogue").classList.add("d-flex");
       document.body.style.backgroundImage ="url('image/vase.jpg')"
       content.style.display ="none"

       var chaine = "Dans la salle de restauration, vous surprenez un homme avec le vase disparu à la main, il dit: " + "<br>" + localStorage.getItem("phrase") + "<br>" + "Que faîtes-vous?"; 
       var nb_car = chaine.length; 
       var tableau = chaine.split("");
       texte = new Array;
       var txt = '';
       var nb_msg = nb_car - 1;
       for (i=0; i<nb_car; i++) {
       texte[i] = txt+tableau[i];
       var txt = texte[i];
       }
       
       actual_texte = 0;
       function changeMessage()
       {
        document.getElementById("epi").style.width = "45%"
        document.getElementById("epi").style.marginLeft = "25%"
       document.getElementById("epi").innerHTML = texte[actual_texte];
       actual_texte++;
       if(actual_texte >= texte.length)
       actual_texte = nb_msg;
       if(actual_texte == texte.length -1){
           clearInterval(baba)
           document.getElementById("bouton-epi").style.display ="unset"
       }
       
       }
       var baba = setInterval(function(){changeMessage()},100) 
       
       
   }
       
        
function endGame(){
    document.getElementById("map").innerHTML="<img src='image/mapfin.png' usemap='#image-map'> <map name='image-map'> <area target='' alt='recep' title='recep' onclick='epilogue()' coords='646,152,790,266 'shape='rect'></map>"
} 


function epilogue2 (){
    document.body.style.backgroundImage = "url('image/restauration.png')";
    var chaine = "Vous laissez partir cette personne et vous profitez de ces quelques instants à explorer la salle de restauration des œuvres...passé un moment, vous décidez de sortir lorsque tout à coup, un homme vous interpelle. Il vous demande pourquoi vous avez le vase à la main...que lui répondez-vous ?"; 
    var nb_car = chaine.length; 
    var tableau = chaine.split("");
    texte = new Array;
    var txt = '';
    var nb_msg = nb_car - 1;
    for (i=0; i<nb_car; i++) {
    texte[i] = txt+tableau[i];
    var txt = texte[i];
    document.getElementById("bouton-epi").style.display="none";
    }
    
    actual_texte = 0;
    function changeMessage()
    {
     document.getElementById("epi").style.width = "45%"
     document.getElementById("epi").style.marginLeft = "25%"
    document.getElementById("epi").innerHTML = texte[actual_texte];
    actual_texte++;
    if(actual_texte >= texte.length)
    actual_texte = nb_msg;
    if(actual_texte == texte.length -1){
        clearInterval(baba)
        document.getElementById("bouton-epi").style.display ="none"
        
        
    }
    
    }
    var baba = setInterval(function(){changeMessage()},100) 
   

}

function again(){
    document.getElementById("fermee").innerHTML = "<input id = 'ferme' type ='button' value='fermer' class='btn btn-danger' onclick = 'reset()'>"
    intro.style.display ="none"
    document.getElementById("container").style.display="unset"
    quest1.style.display = "unset";
    quest2.style.display = "unset";
    document.body.style.backgroundImage = "url('image/museeback.png')";
    prenom.innerHTML=""
    age.innerHTML = ""
    metier.innerHTML = ""
    situation.innerHTML = ""
    enfant.innerHTML = ""
    naissance.innerHTML = ""
    cara1.innerHTML = ""
    cara2.innerHTML = ""
    cara3.innerHTML = ""
    reponse1.innerHTML =""
    reponse2.innerHTML =""
    content.style.display = "unset";
    id.style.display ="none";
    tabInterview = []
    introduction()

}



function terminer(){
    document.getElementById("map").innerHTML = "<img src='carteMusee.png' usemap='#image-map'><map name='image-map'><area target='' alt='steeven' title='steeven'  onclick='phraseSteeven()' coords='130,562,277,454' shape='rect'><area target='' alt='roseta' title='roseta' onclick='phraseRosetta()' coords='130,154,278,270' shape='rect'><area target='' alt='john' title='john' onclick='phraseJohn()' coords='279,455,648,561' shape='rect'><area target='' alt='julietta' title='julietta' onclick='phraseJulietta()' coords='651,272,796,455' shape='rect'><area target='' alt='logan' title='logan' onclick='phraseLogan()' coords='279,453,648,271' shape='rect'></map>"
   
    document.getElementById("fin").style.display="unset"
}

function epilogue2 (){
    document.body.style.backgroundImage = "url('image/restauration.png')";
    var chaine = "Vous laissez partir l'homme et vous profitez de ces quelques instants pour explorer la salle de restauration des œuvres. "; 
    var nb_car = chaine.length; 
    var tableau = chaine.split("");
    texte = new Array;
    var txt = '';
    var nb_msg = nb_car - 1;
    for (i=0; i<nb_car; i++) {
    texte[i] = txt+tableau[i];
    var txt = texte[i];
    document.getElementById("bouton-epi").style.display="none";
    
    }
    
    actual_texte = 0;
    function changeMessage()
    {
     document.getElementById("epi").style.width = "45%"
     document.getElementById("epi").style.marginLeft = "25%"
    document.getElementById("epi").innerHTML = texte[actual_texte];
    actual_texte++;
    if(actual_texte >= texte.length)
    actual_texte = nb_msg;
    if(actual_texte == texte.length -1){
        clearInterval(baba)
        document.getElementById("bouton-continu").style.display="unset";
        document.getElementById("bouton-epi").style.display ="none"
        
        
    }
    
    }
    var baba = setInterval(function(){changeMessage()},100) 
   

}

function epilogue3(){
    
        document.body.style.backgroundImage = "url('image/restauration.png')";
        var chaine = "Vous appellez la securité et vous enfermez l'homme dans une salle adjacente à la salle de restauration. En attendant, vous profitez de ces quelques instants à explorer la salle de restauration des œuvres"; 
        var nb_car = chaine.length; 
        var tableau = chaine.split("");
        texte = new Array;
        var txt = '';
        var nb_msg = nb_car - 1;
        for (i=0; i<nb_car; i++) {
        texte[i] = txt+tableau[i];
        var txt = texte[i];
        document.getElementById("bouton-epi").style.display="none";
        }
        
        actual_texte = 0;
        function changeMessage()
        {
         document.getElementById("epi").style.width = "45%"
         document.getElementById("epi").style.marginLeft = "25%"
        document.getElementById("epi").innerHTML = texte[actual_texte];
        actual_texte++;
        if(actual_texte >= texte.length)
        actual_texte = nb_msg;
        if(actual_texte == texte.length -1){
            clearInterval(baba)
            document.getElementById("bouton-epi").style.display ="none"
            document.getElementById("bouton-continu").style.display="unset";
            
            
        }
        
        }
        var baba = setInterval(function(){changeMessage()},100) 
       
    
    }

    function epilogue2bis (){
        document.getElementById("bouton-continu").style.display="none";
        document.body.style.backgroundImage = "url('image/flou.jpg')";
        var chaine = "Un moment plus tard, vous decidez de sortir lorsque tout à coup, un homme vous interpelle... il vous demande pourquoi vous avez le vase à la main...que dites-vous ?"; 
        var nb_car = chaine.length; 
        var tableau = chaine.split("");
        texte = new Array;
        var txt = '';
        var nb_msg = nb_car - 1;
        for (i=0; i<nb_car; i++) {
        texte[i] = txt+tableau[i];
        var txt = texte[i];
        document.getElementById("bouton-epi").style.display="none";
        }
        
        actual_texte = 0;
        function changeMessage()
        {
         document.getElementById("epi").style.width = "45%"
         document.getElementById("epi").style.marginLeft = "25%"
        document.getElementById("epi").innerHTML = texte[actual_texte];
        actual_texte++;
        if(actual_texte >= texte.length)
        actual_texte = nb_msg;
        if(actual_texte == texte.length -1){
            clearInterval(baba)
            document.getElementById("bouton-epi").style.display ="none"
            displayForm()
            
        }
        
        }
        var baba = setInterval(function(){changeMessage()},100) 
       
    
    }
    
    




