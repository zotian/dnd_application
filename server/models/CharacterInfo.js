var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CharacterInfoSchema = new Schema({
  // PERSONAL INFO
  user_id:{
    type:String
  },
  title:{
    type:String
  },
  charName:{
    type:String,
    required:false
  },
  player:{
    type:String,
    required:false
  },
  class_:{
    type:String,
    required:false
  },
  level:{
    type:Number,
    required:false
  },
  race:{
    type:String,
    required:false
  },
  alignment:{
    type:String,
    required:false
  },
  deity:{
    type:String,
    required:false
  },
  size:{
    type:String,
    required:false
  },
  age:{
    type:Number,
    required:false
  },
  gender:{
    type:String,
    required:false
  },
  height:{
    type:Number,
    required:false
  },
  weight:{
    type:Number,
    required:false
  },
  eyes:{
    type:String,
    required:false
  },
  hair:{
    type:String,
    required:false
  },
  skin:{
    type:String,
    required:false
  },
  spentPoints:{
    type:Number,
    required:false
  },
  unspentPoints:{
    type:Number,
    required:false
  },
  // ABILITIES
  abilityScore:[{id:String, value:{type:Number,default:8}}],
  abilityModifier:[{id:String, value:{type:Number,default:-1}}],
  temporaryScore:[{id:String, value:{type:Number,default:8}}],
  temporaryModifier:[{id:String, value:{type:Number,default:-1}}],
  // SAVING THROWS
  savingThrowsModifier:[{id:String, saves:[{id:String, saveValue:String, value:{type:Number,default:0}}]}],
  // HP - AC - INITIATIVE ets... CONFIGURATION
  hp:{
    type:Number,
    required:false
  },
  currentHp:{
    type:Number,
    required:false
  },
  dmgTaken:{
    type:Number,
    required:false
  },
  nonLethal:{
    type:Number,
    required:false
  },
  ac:{
    type:Number,
    required:false
  },
  armorBonus:{
    type:Number,
    required:false
  },
  shieldBonus:{
    type:Number,
    required:false
  },
  sizeModifier:{
    type:Number,
    required:false
  },
  naturalArmor:{
    type:Number,
    required:false
  },
  deflectingModifier:{
    type:Number,
    required:false
  },
  miscModifierAC:{
    type:Number,
    required:false
  },
  miscModifierInitiative:{
    type:Number,
    required:false
  },
  miscModifierTouch:{
    type:Number,
    required:false
  },
  miscModifierFlatFooted:{
    type:Number,
    required:false
  },
  miscModifierGrapple:{
    type:Number,
    required:false
  },
  dmgReduction:{
    type:Number,
    required:false
  },
  initiative:{
    type:Number,
    required:false
  },
  touch:{
    type:Number,
    required:false
  },
  flatFooted:{
    type:Number,
    required:false
  },
  speed:{
    type:Number,
    required:false
  },
  baseAttackBonus:{
    type:String,
    required:false
  },
  spellResistance:{
    type:Number,
    required:false
  },
  grapple:{
    type:Number,
    required:false
  },

  // SKILLS
  skills:[{
    id:String,
    isText:Boolean,
    text:String,
    isClicked:Boolean,
    isClassSkill:Boolean,
    isCrossSkill:Boolean,
    value:{
      keyAbility:String, 
      skillModifier:Number,
      abilityModifier:Number,
      ranks:Number,
      miscModifier:Number}
  }],
  // CLASSES AND RANKS
  classes:[{
    id:String,
    isClass:Boolean,
    ranksPerLevel:Number,
    classSkills:[String]
  }],

  // DATA TO CALCULATE RANKS
  isConditionForRanks : Boolean, //check if all conditions are met (class,level,race)
  errorMessageForRanks:String, //error if conditions are not met (class,level,race)
  unspentRanks:Number, //show unspent rank points
  checkForLevel1:Boolean, //check if level=1 
  checkLevelForRanks:[Number], //check level to calculate how many ranks gained
  totalRanks:[Number], // calculates how many rank points gained total
  spentCrossRanks:Number, //calculates how many rank points have been spent
  spentClassRanks:Number, //calculates how many rank points have been spent

  // FEATS
  learnedFeats:[{}]

});


var CharInfo = mongoose.model("CharInfo", CharacterInfoSchema);
module.exports = CharInfo;