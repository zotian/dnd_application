const express= require ('express');
const CharInfo = require("../models/CharacterInfo");

const router = express.Router();


// FETCH ALL CHAR INFO
router.get('/', (req, res) => {
    var e = new Error('error message')
    CharInfo.find({user_id:req.user._id}, (error, info) =>{
      if (error) { console.error(error); }
      res.json({
        charInfo: info
      })
    }).sort({_id:-1})
  })

// POST CHAR INFO
router.post('/', (req,res)=>{
    var db = req.db;
    var charInfo = new CharInfo(req.body)
    var newCharacterInfo = new CharInfo({
        user_id: req.user._id,
        title: charInfo.title,
        charName: charInfo.charName,
        player: charInfo.player,
        class_: charInfo.class_,
        level: charInfo.level,
        race: charInfo.race,
        alignment: charInfo.alignment,
        deity: charInfo.deity,
        size: charInfo.size,
        age: charInfo.age,
        gender: charInfo.gender,
        height: charInfo.height,
        weight: charInfo.weight,
        eyes: charInfo.eyes,
        hair: charInfo.hair,
        skin: charInfo.skin,
        spentPoints: charInfo.spentPoints,
        unspentPoints: charInfo.unspentPoints,
        abilityScore : charInfo.abilityScore,
        abilityModifier : charInfo.abilityModifier,
        temporaryScore : charInfo.temporaryScore,
        temporaryModifier : charInfo.temporaryModifier,

        savingThrowsModifier:charInfo.savingThrowsModifier,
        skills : charInfo.skills,
        learnedFeats : charInfo.learnedFeats,

        classes: charInfo.classes,
        isConditionForRanks: charInfo.isConditionForRanks,
        errorMessageForRanks: charInfo.errorMessageForRanks,
        unspentRanks: charInfo.unspentRanks,
        checkForLevel1: charInfo.checkForLevel1,
        checkLevelForRanks: charInfo.checkLevelForRanks,
        totalRanks: charInfo.totalRanks,
        spentCrossRanks: charInfo.spentCrossRanks,
        spentClassRanks: charInfo.spentClassRanks,

        hp : charInfo.hp,    
        currentHp : charInfo.currentHp,    
        dmgTaken : charInfo.dmgTaken,    
        nonLethal : charInfo.nonLethal,    
        ac : charInfo.ac,    
        armorBonus : charInfo.armorBonus,    
        shieldBonus : charInfo.shieldBonus,    
        sizeModifier : charInfo.sizeModifier,    
        naturalArmor : charInfo.naturalArmor,    
        deflectingModifier : charInfo.deflectingModifier,    
        miscModifierAC : charInfo.miscModifierAC,
        miscModifierInitiative : charInfo.miscModifierInitiative,    
        miscModifierTouch : charInfo.miscModifierTouch,    
        miscModifierFlatFooted : charInfo.miscModifierFlatFooted,    
        miscModifierGrapple : charInfo.miscModifierGrapple,    
        dmgReduction : charInfo.dmgReduction,    
        initiative : charInfo.initiative,    
        touch : charInfo.touch,    
        flatFooted : charInfo.flatFooted,    
        speed : charInfo.speed,    
        baseAttackBonus : charInfo.baseAttackBonus,    
        spellResistance : charInfo.spellResistance,    
        grapple : charInfo.grapple,  
  }) 
  newCharacterInfo.save(function(error,response){
      if(error){
          console.log(error)
          res.status(500).json({
              success: false,
              message: 'Error! Character was not saved!'
            })    
          return
      }else{
        res.json({
            success:true,
            message:'Character info saved successfully!',
            info : response
        })
      }
  })
})

// FETCH SINGLE CHARACTER
router.get('/:id', (req,res) =>{
  var db = req.db;
  CharInfo.findById(
    req.params.id,
    req.body,
    req.db,
    function(error,data){
      if(error){
        console.log(error)
      }
      res.json(data)
    }
  )
})

// EDIT CHARACTER
router.get('/:id/edit', (req,res) =>{
  var db = req.db;
  CharInfo.findById(
    req.params.id,
    req.body,
    function(error,data){
      if(error){
        console.log(error)
      }
      res.json(data)
  })
})

//  UPDATE CHARACTER
router.put('/:id', (req,res) =>{
  CharInfo.findByIdAndUpdate(
    req.params.id,
    req.body,
    function(error,data){
      if(error){
        console.log(error)
      }
      data.title= req.body.title,
      data.charName= req.body.charName,
      data.player= req.body.player,
      data.class_= req.body.class_,
      data.level= req.body.level,
      data.race= req.body.race,
      data.alignment= req.body.alignment,
      data.deity= req.body.deity,
      data.size= req.body.size,
      data.age= req.body.age,
      data.gender= req.body.gender,
      data.height= req.body.height,
      data.weight= req.body.weight,
      data.eyes= req.body.eyes,
      data.hair= req.body.hair,
      data.skin= req.body.skin,
      data.spentPoints= req.body.spentPoints,
      data.unspentPoints= req.body.unspentPoints,
      data.abilityScore = req.body.abilityScore,
      data.abilityModifier = req.body.abilityModifier,
      data.temporaryScore = req.body.temporaryScore,
      data.temporaryModifier = req.body.temporaryModifier,

      data.savingThrowsModifier= req.body.savingThrowsModifier,
      data.skills = req.body.skills,
      data.learnedFeats = req.body.learnedFeats,

      data.classes = req.body.classes,
      data.isConditionForRanks = req.body.isConditionForRanks,
      data.errorMessageForRanks = req.body.errorMessageForRanks,
      data.unspentRanks = req.body.unspentRanks,
      data.checkForLevel1 = req.body.checkForLevel1,
      data.checkLevelForRanks = req.body.checkLevelForRanks,
      data.totalRanks = req.body.totalRanks,
      data.spentCrossRanks = req.body.spentCrossRanks,
      data.spentClassRanks = req.body.spentClassRanks,
 
      data.hp = req.body.hp,    
      data.currentHp = req.body.currentHp,    
      data.dmgTaken = req.body.dmgTaken,    
      data.nonLethal = req.body.nonLethal,    
      data.ac = req.body.ac,    
      data.armorBonus = req.body.armorBonus,    
      data.shieldBonus = req.body.shieldBonus,    
      data.sizeModifier = req.body.sizeModifier,    
      data.naturalArmor = req.body.naturalArmor,    
      data.deflectingModifier = req.body.deflectingModifier,    
      data.miscModifierAC = req.body.miscModifierAC,
      data.miscModifierInitiative = req.body.miscModifierInitiative,    
      data.miscModifierTouch = req.body.miscModifierTouch,    
      data.miscModifierFlatFooted = req.body.miscModifierFlatFooted,    
      data.miscModifierGrapple = req.body.miscModifierGrapple,    
      data.dmgReduction = req.body.dmgReduction,    
      data.initiative = req.body.initiative,    
      data.touch = req.body.touch,    
      data.flatFooted = req.body.flatFooted,    
      data.speed = req.body.speed,    
      data.baseAttackBonus = req.body.baseAttackBonus,    
      data.spellResistance = req.body.spellResistance,    
      data.grapple = req.body.grapple,    

      
      data.save(function(error){
        if(error){
          console.log(error)
          res.status(500).json({
              success: false,
              message: 'Error: Update was not saved'
            })    
          return
        }
        res.json({
          success:true,
          message: 'Error: Update was not saved'
        })
      })
  })
})

// DELETE CHARACTER
router.delete('/:id', (req,res) =>{
  var db= req.db;
  CharInfo.findByIdAndRemove({
    _id:req.params.id
  },function(error){
    if(error){
      console.log(error)
      res.status(500).json({
          success: false,
          message: 'Error: Delete was not saved'
        })    
      return
    }
    res.json({
      success:true
    })
  })
})

module.exports = router;