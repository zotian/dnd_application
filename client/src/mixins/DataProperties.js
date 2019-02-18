/* eslint-disable */
export const DataProperties = {
    data(){
        return{
          charInfo:[],
          user:{},
          // character personal info 
          classes:[
            {id:'Barbarian',isClass:false,ranksPerLevel:4, classSkills:['climb','craft','handle animal','intimidate','jump','listen','ride','survival','swim']},
            {id:'Bard' ,isClass:false, ranksPerLevel:6, classSkills:['appraise','balance','bluff','climb','concentration','craft','decipher script ','diplomacy','disguise','escape artist','gather information','hide','Jump','Knowledge','Listen','Move Silently','Perform','Profession','Sense Motive','Sleight of Hand','Spellcraft','Swim','Tumble','Use Magic Device']},
            {id:'Cleric' ,isClass:false, ranksPerLevel:2, classSkills:['Concentration','Craft','Diplomacy','Heal','Knowledge','Profession','Spellcraft']},
            {id:'Druid' ,isClass:false, ranksPerLevel:4, classSkills:[' Concentration','Craft','handle animal',' Diplomacy','Heal','Knowledge','Listen','Profession','Ride','Spellcraft','Spot','Survival','Swim']},
            {id:'Fighter' ,isClass:false, ranksPerLevel:2, classSkills:['climb','craft','handle animal','intimidate','ride','swim','jump']},
            {id:'Monk' ,isClass:false, ranksPerLevel:4, classSkills:['Balance','Climb','Concentration','Craft','Diplomacy','Escape Artist','Hide','Jump','Knowledge','Listen','Move Silently','Perform','Profession','Sense Motive','Spot','Swim','Tumble']},
            {id:'Paladin' ,isClass:false , ranksPerLevel:2, classSkills:['Concentration','craft','Diplomacy','Handle Animal','Heal','Knowledge','Profession','Ride','Sense Motive']},
            {id:'Ranger' ,isClass:false , ranksPerLevel:6, classSkills:['Climb','Concentration','Craft','Handle Animal','Heal','Hide','Jump','Knowledge','Listen','Move Silently','Profession','Ride','Spot','Search','Survival','Swim','Use Rope']},
            {id:'Rogue' ,isClass:false , ranksPerLevel:8, classSkills:['appraise','balance','bluff','climb','craft','decipher script ','diplomacy',' Disable Device','disguise','escape artist','Forgery','gather information','hide','Intimidate','Jump','Knowledge','Listen','Move Silently','Open Lock','Perform','Profession','Search','Sense Motive','Sleight of Hand','Spot','Swim','Tumble','Use Magic Device','Use Rope']},
            {id:'Sorcerer' ,isClass:false , ranksPerLevel:2, classSkills:['Bluff','Concentration','Craft','Knowledge','Profession','Spellcraft']},
            {id:'Wizard' ,isClass:false , ranksPerLevel:2, classSkills:['Concentration','Craft',' Decipher Script','Knowledge','Profession','Spellcraft']}
          ], 
          races:[
            {id:'Dwarf', isRace:false},
            {id:'Elf', isRace:false},
            {id:'Gnome', isRace:false},
            {id:'Half Elf', isRace:false},
            {id:'Half Orc', isRace:false},
            {id:'Halfling', isRace:false},
            {id:'Human', isRace:false}
          ] ,

          title: ' ',
          charName: '',
          player: '',
          class_: '',
          level: null,
          race: '',
          alignment: '',
          deity:'',
          size: '',
          age: null,
          gender: '',
          height: null,
          weight: null,
          eyes: '',
          hair: '',
          skin: '',
          //end of character personal info
          spentPoints:0, //
          unspentPoints:0,

          hideSkills:true,
          // Feats
          hideFeats:false,
          hideLearnedFeats:true,
          featData:{},
          learnedFeats:[],

          hp:20,
          currentHp:20,
          dmgTaken:null,
          nonLethal:null,
          ac:null,
          armorBonus:0,
          shieldBonus:0,
          sizeModifier:0,
          naturalArmor:0,
          deflectingModifier:0,
          miscModifierAC:0,
          miscModifierInitiative:0,
          miscModifierTouch:0,
          miscModifierFlatFooted:0,
          miscModifierGrapple:0,
          dmgReduction:0,
          initiative: null,
          touch: null,
          flatFooted: null,
          speed:0,
          baseAttackBonus:'0',
          spellResistance:0,
          grapple:0,
          deadColor:'white',
          showBaseAttacK:true, //BASE ATT-SPELL RESS-GRAPPLE BUTTON
          // SAVING THROWS  
          showSavingThrows:true, //SAVING THROWS BUTTON
          savingThrowsModifier:[
            {id:'total', saves:[
                {id:'FORTITUDE', saveValue:'CONSTITUTION', value:0},
                {id:'REFLEX', saveValue:'DEXTERITY', value:0},
                {id:'WILL', saveValue:'WISDOM', value:0}]
            },
            {id:'baseSave', saves:[
                {id:'FORTITUDE', saveValue:'CONSTITUTION', value:0},
                {id:'REFLEX', saveValue:'DEXTERITY', value:0},
                {id:'WILL', saveValue:'WISDOM', value:0}]
            },
            {id:'abilityModifier', saves:[
                {id:'FORTITUDE' ,saveValue:'CONSTITUTION', value:0},
                {id:'REFLEX' ,saveValue:'DEXTERITY', value:0},
                {id:'WILL' ,saveValue:'WISDOM', value:0}]
            },
            {id:'magicModifier', saves:[
                {id:'FORTITUDE' ,saveValue:'CONSTITUTION', value:0},
                {id:'REFLEX' ,saveValue:'DEXTERITY', value:0},
                {id:'WILL' ,saveValue:'WISDOM', value:0}]
            },
            {id:'miscModifier', saves:[
                {id:'FORTITUDE' ,saveValue:'CONSTITUTION', value:0},
                {id:'REFLEX' ,saveValue:'DEXTERITY', value:0},
                {id:'WILL' ,saveValue:'WISDOM', value:0}]
            },
            {id:'temporaryModifier', saves:[
                {id:'FORTITUDE' ,saveValue:'CONSTITUTION', value:0},
                {id:'REFLEX' ,saveValue:'DEXTERITY', value:0},
                {id:'WILL' ,saveValue:'WISDOM', value:0}]
            },
          ],
                   // SPEND POINT TO SKILLS
          selected:'',
          options: [
            { text: 'Str +1'},
            { text: 'Dex +1'},
            { text: 'Con +1'},
            { text: 'Int +1'},
            { text: 'Wis +1'},
            { text: 'Cha +1'},
          ],
          
          // ABILITY SCORE & MODIFIERS
          abilityScore:[
            {id:'str' , value:8},
            {id:'dex' , value:8},
            {id:'con' , value:8},
            {id:'int' , value:8},
            {id:'wis' , value:8},
            {id:'cha' , value:8}
          ],
          abilityModifier:[
            {id:'str' , value:-1},
            {id:'dex' , value:-1},
            {id:'con' , value:-1},
            {id:'int' , value:-1},
            {id:'wis' , value:-1},
            {id:'cha' , value:-1}
          ],
          temporaryScore:[
            {id:'str' , value:8},
            {id:'dex' , value:8},
            {id:'con' , value:8},
            {id:'int' , value:8},
            {id:'wis' , value:8},
            {id:'cha' , value:8}
          ],
          temporaryModifier:[
            {id:'str' , value:-1},
            {id:'dex' , value:-1},
            {id:'con' , value:-1},
            {id:'int' , value:-1},
            {id:'wis' , value:-1},
            {id:'cha' , value:-1}
          ],
          
          
          // DATA TO CALCULATE RANKS
          isConditionForRanks : false, //check if all conditions are met (class,level,race)
          errorMessageForRanks:'', //error if conditions are not met (class,level,race)
          unspentRanks:0, //show unspent rank points
          checkForLevel1:false, //check if level=1 
          checkLevelForRanks:[], //check level to calculate how many ranks gained
          totalRanks:[], // calculates how many rank points gained total
          spentCrossRanks:null, //calculates how many rank points have been spent for crossSkills
          spentClassRanks:null //calculates how many rank points have been spent for classSkills

        };
      },
}