/* eslint-disable */
export const MethodProperties = {
    methods:{
        // SET PERMANENT ABILITIES SCORE = TO TEMPORARY SCORES
        equalScore(){
           let permaAbility = JSON.stringify(this.abilityScore)
           let tempAbility = JSON.parse(permaAbility)
           let permaModifier = JSON.stringify(this.abilityModifier)
           let tempModifier = JSON.parse(permaModifier)
           this.temporaryScore = tempAbility
           this.temporaryModifier = tempModifier
        },
        // LOGIC TO CALCULATE THE CURRENT HP
        calculateCurrentHp(){
          if( (Number(this.currentHp) + Number(this.dmgTaken)) > Number(this.hp) ){
            this.currentHp = Number(this.hp)
            this.deadColor = 'white'
          }
          else if( (Number(this.currentHp) + Number(this.dmgTaken) + Number(this.dmgReduction)) <= -10 ){
            this.currentHp = Number(this.currentHp) + Number(this.dmgTaken) + Number(this.dmgReduction)
            this.deadColor = 'red'
          } else{
              if(Number(this.dmgTaken) <= Number(-this.dmgReduction)){
                this.currentHp = Number(this.currentHp)+ Number(this.dmgTaken)
                this.deadColor = 'white' 
              }else{
                this.currentHp = Number(this.currentHp)+ Number(this.dmgReduction) + Number(this.dmgTaken)
                this.deadColor = 'white'
              }
          }
          return this.dmgTaken = null;
        },
        //GIVE +1 ABILITY POINT EVERY 4 LEVELS
        levelUp(event){
           let calculatePoints = Number(Math.floor(event.target.value / 4))
           this.unspentPoints = calculatePoints - this.spentPoints;
            // RUN THE LOGIC TO CALCULATE SAVING THROWS AND BASE ATT BONUS WHEN LEVEL CHANGES
           this.calculate_ST_BA();
        },
        // SPEND THE REMAINING ABILITY POINTS
        spendPoints(value){
          let vm = this;
          value = value.replace(/[\d+|^\s+|\s+$`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
          for(let x=0; x<this.abilityScore.length; x++){
            if(value === this.abilityScore[x].id){
               this.abilityScore[x].value += 1
               this.temporaryScore[x].value += 1
               vm.changePermModifier(x,this.abilityScore[x].value)
               vm.changeTempModifier(x,this.temporaryScore[x].value)             
               this.spentPoints += 1
               this.unspentPoints -= 1           
            }
          }
        },
        // LOGIC TO CALCULATE SAVING THROWS
        changeBaseSave(i,event){
            this.savingThrowsModifier[1].saves[i].value = Number(event.target.value)
        },
        changeAbilityModifier(i,event){
            this.savingThrowsModifier[2].saves[i].value = Number(event.target.value)
        },
        changeMagicModifier(i,event){
            this.savingThrowsModifier[3].saves[i].value = Number(event.target.value)
        },
        changeMiscModifier(i,event){
            this.savingThrowsModifier[4].saves[i].value = Number(event.target.value)
        },
        changeTemporaryModifier(i,event){
            this.savingThrowsModifier[5].saves[i].value = Number(event.target.value)
        },

    
        // SELECT RACE
        selectedRace(e){
            for(let x = 0; x<this.races.length; x++){
                if(e.target.value === this.races[x].id){
                    this.races[x].isRace = true;
                    this.race = e.target.value
                } else{
                    this.races[x].isRace = false;
                }
            }
        },
        // SELECT CLASS
        selectedClass(e){
            for(let y = 0; y<this.skills.length; y++){
                this.skills[y].isClassSkill = false;
                this.skills[y].isCrossSkill = false;
            }
            for(let x = 0; x<this.classes.length; x++){
                if(e.target.value === this.classes[x].id){
                    this.classes[x].isClass = true;
                    this.class_ = e.target.value

                    for(let i=0; i<this.classes[x].classSkills.length; i++){
                        let value = this.classes[x].classSkills[i].toLowerCase()
                        for(let z=0; z<this.skills.length; z++){
                            if(this.skills[z].id===value){
                               this.skills[z].isClassSkill = true;
                               this.skills[z].isCrossSkill = false;
                            }
                        }
                    }
                } else{
                    this.classes[x].isClass = false;
                }
            }
            // RUN THE LOGIC TO CALCULATE SAVING THROWS AND BASE ATT BONUS WHEN CLASS CHANGES
            this.calculate_ST_BA();
        }, 
            // REDIRECT POSITION OF THE PAGE ALWAYS AT THE TOP
        redirectAtTop(){
            $(document).ready(function(){
                $(this).scrollTop(0);
            });
        }
    } ,

}