/* eslint-disable */

// CALCULATE BASE SAVE AND BASE ATTACK BONUS
export const SThrowsBAttack = {
    methods:{
        calculate_ST_BA(){
            if(this.class_ === 'Barbarian'){
                if(this.level===1){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '16/11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '17/12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '18/13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '19/14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '20/15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 12
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                return;
            }
            if(this.class_ === 'Bard'){
                if(this.level===1){
                    this.baseAttackBonus = '0';
                    this.savingThrowsModifier[1].saves[0].value= 0
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 0
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 7
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 7
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 8
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 8
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 9
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 9
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 10
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 10
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 11
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 11
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 12
                    this.savingThrowsModifier[1].saves[2].value= 12
                    return;
                }
                return;
            }
            if(this.class_ === 'Cleric'){
                if(this.level===1){
                    this.baseAttackBonus = '0';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 12
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 12
                    return;
                }
                return;
            }
            if(this.class_ === 'Druid'){
                if(this.level===1){
                    this.baseAttackBonus = '0';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 12
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 12
                    return;
                }
                return;
            }
            if(this.class_ === 'Fighter'){
                if(this.level===1){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '16/11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '17/12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '18/13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '19/14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '20/15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 12
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                return;
            }
            if(this.class_ === 'Monk'){
                if(this.level===1){
                    this.baseAttackBonus = '0';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 7
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 7
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 8
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 8
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 9
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 9
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 10
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 10
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 11
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 11
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 12
                    this.savingThrowsModifier[1].saves[1].value= 12
                    this.savingThrowsModifier[1].saves[2].value= 12
                    return;
                }
                return;
            }
            if(this.class_ === 'Paladin'){
                if(this.level===1){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '16/11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '17/12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '18/13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '19/14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '20/15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 12
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                return;
            }
            if(this.class_ === 'Ranger'){
                if(this.level===1){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 7
                    this.savingThrowsModifier[1].saves[1].value= 7
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 8
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 8
                    this.savingThrowsModifier[1].saves[1].value= 8
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 9
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 9
                    this.savingThrowsModifier[1].saves[1].value= 9
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '16/11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 10
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '17/12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 10
                    this.savingThrowsModifier[1].saves[1].value= 10
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '18/13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 11
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '19/14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 11
                    this.savingThrowsModifier[1].saves[1].value= 11
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '20/15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 12
                    this.savingThrowsModifier[1].saves[1].value= 12
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                return;
            }
            if(this.class_ === 'Rogue'){
                if(this.level===1){
                    this.baseAttackBonus = '0';
                    this.savingThrowsModifier[1].saves[0].value= 0
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 0
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 0
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 1
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 7
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 7
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 8
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 8
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 9
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '11/6/1';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 9
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 10
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '12/7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 10
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '13/8/3';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 11
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '14/9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 11
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '15/10/5';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 12
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                return;
            }
            if(this.class_ === 'Sorcerer'){
                if(this.level===1){
                    this.baseAttackBonus = '0';
                    this.savingThrowsModifier[1].saves[0].value= 0
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 0
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 12
                    return;
                }
                return;
            }
            if(this.class_ === 'Wizard'){
                if(this.level===1){
                    this.baseAttackBonus = '0';
                    this.savingThrowsModifier[1].saves[0].value= 0
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 2
                    return;
                }
                if(this.level===2){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 0
                    this.savingThrowsModifier[1].saves[1].value= 0
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===3){
                    this.baseAttackBonus = '1';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 3
                    return;
                }
                if(this.level===4){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===5){
                    this.baseAttackBonus = '2';
                    this.savingThrowsModifier[1].saves[0].value= 1
                    this.savingThrowsModifier[1].saves[1].value= 1
                    this.savingThrowsModifier[1].saves[2].value= 4
                    return;
                }
                if(this.level===6){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===7){
                    this.baseAttackBonus = '3';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 5
                    return;
                }
                if(this.level===8){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 2
                    this.savingThrowsModifier[1].saves[1].value= 2
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===9){
                    this.baseAttackBonus = '4';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 6
                    return;
                }
                if(this.level===10){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===11){
                    this.baseAttackBonus = '5';
                    this.savingThrowsModifier[1].saves[0].value= 3
                    this.savingThrowsModifier[1].saves[1].value= 3
                    this.savingThrowsModifier[1].saves[2].value= 7
                    return;
                }
                if(this.level===12){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===13){
                    this.baseAttackBonus = '6/1';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 8
                    return;
                }
                if(this.level===14){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 4
                    this.savingThrowsModifier[1].saves[1].value= 4
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===15){
                    this.baseAttackBonus = '7/2';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 9
                    return;
                }
                if(this.level===16){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===17){
                    this.baseAttackBonus = '8/3';
                    this.savingThrowsModifier[1].saves[0].value= 5
                    this.savingThrowsModifier[1].saves[1].value= 5
                    this.savingThrowsModifier[1].saves[2].value= 10
                    return;
                }
                if(this.level===18){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===19){
                    this.baseAttackBonus = '9/4';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 11
                    return;
                }
                if(this.level===20){
                    this.baseAttackBonus = '10/5';
                    this.savingThrowsModifier[1].saves[0].value= 6
                    this.savingThrowsModifier[1].saves[1].value= 6
                    this.savingThrowsModifier[1].saves[2].value= 12
                    return;
                }
                return;
            }
        }
    }
}