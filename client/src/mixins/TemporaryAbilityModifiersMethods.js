/* eslint-disable */
export const TemporaryAbilityModifiersMethods = {
    methods: {
      changeTempModifier(i,event) {
        if(Number(event) === 1){
          return this.temporaryModifier[i].value = -5;
        }
        if(Number(event) === 2 || Number(event) === 3 ){
          return this.temporaryModifier[i].value = -4;
        }
        if(Number(event) === 4 || Number(event) === 5 ){
          return this.temporaryModifier[i].value = -3;
        }
        if(Number(event) === 6 || Number(event) === 7 ){
          return this.temporaryModifier[i].value = -2;
        }
        if(Number(event) === 8 || Number(event) === 9 ){
          return this.temporaryModifier[i].value = -1;
        }
        if(Number(event) === 10 || Number(event) === 11 ){
          return this.temporaryModifier[i].value = 0;
        }
        if(Number(event) === 12 || Number(event) === 13 ){
          return this.temporaryModifier[i].value = 1;
        }
        if(Number(event) === 14 || Number(event) === 15 ){
          return this.temporaryModifier[i].value = 2;
        }
        if(Number(event) === 16 || Number(event) === 17 ){
          return this.temporaryModifier[i].value = 3;
        }
        if(Number(event) === 18 || Number(event) === 19 ){
          return this.temporaryModifier[i].value = 4;
        }
        if(Number(event) === 20 || Number(event) === 21 ){
          return this.temporaryModifier[i].value = 5;
        }
        if(Number(event) === 22 || Number(event) === 23 ){
          return this.temporaryModifier[i].value = 6;
        }
        if(Number(event) === 24 || Number(event) === 25 ){
          return this.temporaryModifier[i].value = 7;
        }
        if(Number(event) === 26 || Number(event) === 27 ){
          return this.temporaryModifier[i].value = 8;
        }
        if(Number(event) === 28 || Number(event) === 29 ){
          return this.temporaryModifier[i].value = 9;
        }
        if(Number(event) === 30 || Number(event) === 31 ){
          return this.temporaryModifier[i].value = 10;
        }
      }  
    }
  }