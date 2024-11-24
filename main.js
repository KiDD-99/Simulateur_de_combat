class opps {
    constructor(Nom,Vie,Attaque,Precision){
        this.Nom = Nom;
        this.Vie = Vie;
        this.Attaque = Attaque;
        this.Precision = Precision ;

    }
    precision(){
        let hasard = Math.random(0,1)
        console.log(hasard)
        if (hasard<this.Precision){
            console.log("touché")
            return true
        }
        else{
            console.log("pas touché")
            return false
        }

    }
    attaque(opps){
        let result  = this.precision()
        if (result){
            opps.Vie -= this.Attaque
            console.log("Tu as réussi ton attaque")
        }
        else{
            console.log("Tu t'es raté")
        }


        
    }
}

let Itachi = new opps("Itachi",100,30,0.7)
let Kisame = new opps("Kisame",80,15,0.5)

while (Itachi.Vie>0 && Kisame.Vie>0){

    Itachi.attaque(Kisame)
    Kisame.attaque(Itachi)
    if(Itachi.Vie>0 && Kisame.Vie<=0){
        console.log("Itachi a gagné")
    }
    else if(Kisame.Vie>0 && Itachi.Vie<=0){
        console.log("Kisame a gagné")
    }

}