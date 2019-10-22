var viewModel = new Vue({
    el: "#app",
    data:{
        gameStarted: false,
        gameHistory: [],
        playerLife: 100,
        monsterLife: 100,
    },
    methods:{
        QuitGame: function(){
            this.gameStarted = !this.gameStarted;
            
        },
        attack: function(){

            // Monster do more damage
            let monsterDamage = getRndInteger(1, 11)
            let playerDamage = getRndInteger(1, 10);

            this.monsterLife -= playerDamage;
            
            this.gameHistory.push({
                actionText: `PLAYER INFLICT ${playerDamage} OF DAMAGE`,
                origin:"player"
            });

            this.playerLife -= monsterDamage;

            this.gameHistory.push({
                actionText: `MONSTER INFLICT ${monsterDamage} OF DAMAGE`,
                origin:"monster"
            });

        },
        specialAttack: function(){

            // Monster do more damage
            let monsterDamage = getRndInteger(1, 11)
            let playerDamage = getRndInteger(1, 14);

            this.monsterLife -= playerDamage;
            
            this.gameHistory.push({
                actionText: `MONSTER TAKES ${playerDamage} OF DAMAGE`,
                origin:"player"
            });

            this.playerLife -= monsterDamage;

            this.gameHistory.push({
                actionText: `PLAYER TAKES ${monsterDamage} OF DAMAGE`,
                origin:"monster"
            });

        },
        heal: function(){

            // Monster do more damage
            let monsterDamage = getRndInteger(1, 6)
            let playerHeal = getRndInteger(1, 6);

            this.playerLife += playerHeal;
            
            this.gameHistory.push({
                actionText: `PLAYER RECEIVED ${playerHeal} OF LIFE`,
                origin:"player"
            });

            this.playerLife -= monsterDamage;

            this.gameHistory.push({
                actionText: `PLAYER TAKES ${monsterDamage} OF DAMAGE`,
                origin:"monster"
            });

        },
        startGame: function(){
            this.gameStarted = !this.gameStarted;
            this.gameHistory = [];
            this.playerLife = 100;
            this.monsterLife = 100;
        }
    },
    computed:{
        monsterProgressLife: function(){
            return `width:${this.monsterLife < 0 ? 0 : this.monsterLife}%`;
        },
        playerProgressLife: function(){
            return `width:${this.playerLife < 0 ? 0 : this.playerLife}%`;
        },
        gameResult: function(){
            var self = this;

            let resultado = "";

            if(self.playerLife <= 0 ){
                resultado = "Looser";
                self.QuitGame();
            }
            else if( self.monsterLife <= 0 ){
                resultado = "Winner"
                self.QuitGame();
            }

            return resultado;
        }
    }
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}