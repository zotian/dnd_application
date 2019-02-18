/* eslint-disable */
export const ComputedProperties = {
    computed:{
        changeAc(){
          return this.ac =
            Number(this.temporaryModifier[1].value) +
            Number(this.armorBonus) +
            Number (this.shieldBonus) +
            Number (this.sizeModifier) +
            Number (this.naturalArmor) +
            Number (this.deflectingModifier) +
            Number (this.miscModifierAC) + 10
        },
        changeInitiative(){
          return this.initiative =
            Number(this.temporaryModifier[1].value) +
            Number(this.miscModifierInitiative)
        },
        changeTouch(){
          return this.touch =
            Number(this.temporaryModifier[1].value) +
            Number(this.miscModifierTouch) + 
            Number(this.deflectingModifier) + 
            Number(this.sizeModifier) + 10
        },
        changeFlatFooted(){
          return this.flatFooted =
            Number(this.miscModifierFlatFooted)+
            Number(this.armorBonus) +
            Number (this.shieldBonus) +
            Number (this.sizeModifier) +
            Number (this.naturalArmor) + 10
        },
        // CALCULATE GRAPPLE
        changeGrapple(){
          return this.grapple =
            Number(this.baseAttackBonus.replace(/(^\d+)(.+$)/i,'$1'))+
            Number(this.temporaryModifier[0].value) +
            Number (this.sizeModifier) +
            Number (this.miscModifierGrapple)
        }, 
        // CALCULATE SAVING THROWS TOTAL SCORE
        changeTotalScore(){
          for(let i=0; i<=2; i++){
              if(i===0){
                  this.savingThrowsModifier[0].saves[i].value=
                      this.savingThrowsModifier[1].saves[i].value + 
                      this.temporaryModifier[2].value+
                      this.savingThrowsModifier[3].saves[i].value +
                      this.savingThrowsModifier[4].saves[i].value +
                      this.savingThrowsModifier[5].saves[i].value;
                  this.savingThrowsModifier[2].saves[0].value= this.temporaryModifier[2].value;  
              }
              if(i===1){
                  this.savingThrowsModifier[0].saves[i].value=
                      this.savingThrowsModifier[1].saves[i].value + 
                      this.temporaryModifier[1].value+
                      this.savingThrowsModifier[3].saves[i].value +
                      this.savingThrowsModifier[4].saves[i].value +
                      this.savingThrowsModifier[5].saves[i].value;
                  this.savingThrowsModifier[2].saves[1].value= this.temporaryModifier[1].value;    
              }
              if(i===2){
                  this.savingThrowsModifier[0].saves[i].value=
                      this.savingThrowsModifier[1].saves[i].value + 
                      this.temporaryModifier[4].value+
                      this.savingThrowsModifier[3].saves[i].value +
                      this.savingThrowsModifier[4].saves[i].value +
                      this.savingThrowsModifier[5].saves[i].value
                  this.savingThrowsModifier[2].saves[2].value= this.temporaryModifier[4].value;
              }
          }
      },
        
        // calculate ability modifier in SKILLS
        mapAbilityModifier(){
          return this.skills.map((x) =>{
            if(x.value.keyAbility==='str'){
              x.value.abilityModifier = Number(this.temporaryModifier[0].value);
              return x.value.abilityModifier
            }
            else if(x.value.keyAbility==='dex'){
              x.value.abilityModifier = Number(this.temporaryModifier[1].value);
              return x.value.abilityModifier
            }
            else if(x.value.keyAbility==='con'){
            x.value.abilityModifier = Number(this.temporaryModifier[2].value);
            return x.value.abilityModifier
            }
            else if(x.value.keyAbility==='int'){
              x.value.abilityModifier = Number(this.temporaryModifier[3].value);
              return x.value.abilityModifier
            }
            else if(x.value.keyAbility==='wis'){
              x.value.abilityModifier = Number(this.temporaryModifier[4].value);
              return x.value.abilityModifier
            }
            else if(x.value.keyAbility==='cha'){
              x.value.abilityModifier = Number(this.temporaryModifier[5].value);
              return x.value.abilityModifier
            }
          })

         },
        mapTotalSkillModifier(){
          return this.skills.map((x)=>{
            if(x.value.keyAbility==='str'){
                x.value.skillModifier = Number(this.temporaryModifier[0].value) + Number(x.value.ranks) + Number(x.value.miscModifier);
                return x.value.skillModifier
            }
            else if(x.value.keyAbility==='dex'){
                x.value.skillModifier = Number(this.temporaryModifier[1].value) + Number(x.value.ranks) + Number(x.value.miscModifier);
                return x.value.skillModifier
            }
            else if(x.value.keyAbility==='con'){
                x.value.skillModifier = Number(this.temporaryModifier[2].value) + Number(x.value.ranks) + Number(x.value.miscModifier);
                return x.value.skillModifier
            }
            else if(x.value.keyAbility==='int'){
                x.value.skillModifier = Number(this.temporaryModifier[3].value) + Number(x.value.ranks) + Number(x.value.miscModifier);
                return x.value.skillModifier
            }
            else if(x.value.keyAbility==='wis'){
                x.value.skillModifier = Number(this.temporaryModifier[4].value) + Number(x.value.ranks) + Number(x.value.miscModifier);
                return x.value.skillModifier
            }
            else if(x.value.keyAbility==='cha'){
                x.value.skillModifier = Number(this.temporaryModifier[5].value) + Number(x.value.ranks) + Number(x.value.miscModifier);
                return x.value.skillModifier
            }
          })
        }
    },
}    