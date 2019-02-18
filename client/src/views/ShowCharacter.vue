<template>
  <div class='container mt-3 text-center'>
      <!-- CHARACTER PERSONAL INFO -->
      <div class='form-group smallDisplay mb-3' style='max-width:250px; margin:0 auto;'>
        <small class="form-text smallDisplayMedia">TITLE</small>
        <input disabled
          name='title'
          v-model='title'
          class='personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1'
          type="text">
      </div>
      <div class="form-group smallDisplay row mb-2">
        <div class="col-sm-5 col-4  divPersonalDisplayMedia">
          <input disabled
            v-model='charName'
            name='charName'
            type="text" 
            class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            >
          <small class="form-text smallDisplayMedia">CHARACTER NAME</small>
        </div>
        <div class="col-sm-2 col-4 mb-1 divPersonalDisplayMedia spinnersOff">
          <input disabled
            type="number"
            name='level'
            class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            v-model.number='level'
            min='1'
            max='20'>
          <small class="form-text smallDisplayMedia">LEVEL</small>
        </div>
        <div class="col-sm-5 col-4 mb-1 divPersonalDisplayMedia">
          <input disabled
            v-model='player'
            name='player'
            type="text"
            class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1">
          <small class="form-text smallDisplayMedia">PLAYER</small>
        </div>
      </div>
      <div class="form-group smallDisplay row mb-2">
        <div class="form-group col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input class="custom-select inputStyle4 h6DisplayMedia mb-0 pr-3 pl-1"
            disabled
            v-model='class_'
            name='class_'>
          </input>
          <small class="form-text smallDisplayMedia">CLASS</small>
        </div>
        <div class="form-group col-sm-2 col-4 text-center mb-0 divPersonalDisplayMedia">
          <input class="custom-select inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            disabled 
            v-model='race' name='race'>
          </input>
          <small class="form-text smallDisplayMedia">RACE</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='alignment' name='alignment' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">ALIGNMENT</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='deity' name='deity' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">DEITY</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='size' name='size' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">SIZE</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='gender' name='gender' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">GENDER</small>
        </div>
      </div>

      <div class="form-group smallDisplay row mb-1">
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia spinnersOff">
          <input disabled v-model='age' name='age' type="number" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">AGE</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia spinnersOff">
          <input disabled v-model='height' name='height' type="number" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">HEIGHT</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia spinnersOff">
          <input disabled v-model='weight' name='weight' type="number" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">WEIGHT</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='eyes' name='eyes' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">EYES</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='hair' name='hair' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">HAIR</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input disabled v-model='skin' name='skin' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia">SKIN</small>
        </div>
      </div>
            <!-- ABILITIES -->
      <div class='row mt-5 pb-4'>
        <div class="col-md-4 col-12">
          <div class="row">
            <div class='col-6 divDisplayMedia '>
              <ul>
              <h6 class="form-text h6DisplayMedia">ABILITY <br> NAME</h6>
              <li class=' inputStyle1 liDisplayMedia'>
                <h6 class="form-text pt-1 mb-0 mt-0">STR</h6>
                <small class="form-text pb-1 mt-0 mb-0">STRENGTH</small>
              </li>
              <li class='inputStyle1 liDisplayMedia'>
                <h6 class="form-text pt-1 mb-0" >DEX</h6>
                <small class="form-text pb-1 mt-0">DEXTERITY</small>
              </li>
              <li class='inputStyle1 liDisplayMedia'>
                <h6 class="form-text pt-1 mb-0">CON</h6>
                <small class="form-text pb-1 mt-0">CONSTITUTION</small>
              </li>
              <li class='inputStyle1 liDisplayMedia'>
                <h6 class="form-text pt-1 mb-0">INT</h6>
                <small class="form-text pb-1 mt-0">INTELIGENCE</small>
              </li>
              <li class='inputStyle1 liDisplayMedia'>
                <h6 class="form-text pt-1 mb-0">WIS</h6>
                <small class="form-text pb-1 mt-0">WISDOM</small>
              </li>
              <li class='inputStyle1 liDisplayMedia'>
                <h6 class="form-text pt-1 mb-0" >CHA</h6>
                <small class="form-text pb-1 mt-0">CHARISMA</small>
              </li>
            </ul>
            </div>
 

          <!-- TEMORARY SCORES -->
            <div class='col-3 divDisplayMedia2 spinnersOff spinnersOn'>
              <ul >
                <small class="form-text smallDisplayMedia"
                  style='padding-bottom:0.2rem'>TEMP<br> SCORE</small>
                <li class="form-text pt-1 liAbilities" style='padding-bottom:0.5rem' v-for=' (item,i) in temporaryScore' :key='item.id'>
                  <input
                    class="form-control inputStyle2 inputDisplayMedia p-0"
                    style='max-height:2rem;'
                    type='number'
                    v-model.number='item.value'
                    @input='changeTempModifier(i,$event.target.value)'>
                </li>
              </ul>
            </div>

            <!-- TEMPORARY MODIFIER -->
            <div class='col-3 divDisplayMedia2 spinnersOff'>
              <ul>
                <small class="form-text smallDisplayMedia"
                  style='padding-bottom:0.2rem'>TEMP <br> MODIFIER</small>
                <li class="form-text pt-1 liAbilities" style='padding-bottom:0.5rem' v-for=' item in temporaryModifier' :key='item.id'>
                  <input
                    class="form-control inputStyle2 inputDisplayMedia p-0"
                    style='max-height:2rem;'
                    type='number'
                    v-model.number='item.value' disabled>
                </li>
              </ul>
            </div>
          </div>  
        </div>
        
        <div class="col-md-8 col-12">
          <div class="row">
            <div class='col-3 divDisplayMedia totalsMargin mt-4'>
                <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='HP' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='AC' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='INITIATIVE' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='TOUCH' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='FLAT FOOTED' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='SPEED' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='REDUCTION' disabled>
            </div>

            <div class='col-3 divDisplayMedia mt-4 totalsMargin spinnersOff spinnersOn'>
                <input
                  class="form-control inputStyle2 subTotalsMargin  p-0"
                  type='number'
                  v-model='hp'>
                <input
                  class="form-control inputStyle2 subTotalsMargin  p-0"
                  type='number'
                  v-model='changeAc'>
                <input
                  class="form-control inputStyle2 subTotalsMargin  p-0"
                  type='number'
                  v-model='changeInitiative'>
                <input
                  class="form-control inputStyle2 subTotalsMargin  p-0"
                  type='number'
                  v-model='changeTouch'>
                <input
                  class="form-control inputStyle2 subTotalsMargin  p-0"
                  type='number'
                  v-model='changeFlatFooted'>
                <input
                  class="form-control inputStyle2 subTotalsMargin  p-0"
                  type='number'
                  v-model='speed'>
                <input
                  class="form-control inputStyle2 subTotalsMargin p-0"
                  type='number'
                  v-model='dmgReduction'>
            </div>

            <div class='col-3 totalsMargin divDisplayMedia mt-4'>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='FORTITUDE' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='REFLEX' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='WILL' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='BASE ATTACK' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='SPELL RES' disabled>
              <input
                  class="form-control inputStyle3 h6DisplayMedia subTotalsMargin p-0"
                  style='color:#d4d4d6;'
                  type='text'
                  value='GRAPPLE' disabled>
            </div>

            <div class="col-3 totalsMargin divDisplayMedia mt-4  spinnersOff spinnersOn">
              <input
                    class="form-control inputStyle2 subTotalsMargin  p-0"
                    type='number'
                    v-model.number='savingThrowsModifier[0].saves[0].value'>
              <input
                    class="form-control inputStyle2 subTotalsMargin  p-0"
                    type='number'
                    v-model.number='savingThrowsModifier[0].saves[1].value'>
              <input
                    class="form-control inputStyle2 subTotalsMargin  p-0"
                    type='number'
                    v-model.number='savingThrowsModifier[0].saves[2].value' >
              <input
                    v-model='baseAttackBonus'
                    type="text"
                    class="form-control inputStyle2 subTotalsMargin  p-0" disabled>
              <input
                  class="form-control inputStyle2 subTotalsMargin  p-0"
                  type='number'
                  v-model='spellResistance'>
              <input
                  class="form-control inputStyle2 subTotalsMargin  p-0"
                  type='number'
                  v-model='changeGrapple'>      
            </div>
          </div>
        </div>
      </div>

        <!-- SKILLS title / button / unspent ranks / names -->
       <div class="row mt-4">
        <div class="col-lg-8 col-md-10 col-sm-11 col-12 ">
          <button v-if='hideSkills' class='btn btn-secondary btn-sm float-left mb-2' 
            data-toggle="tooltip" data-placement="top" title="Click on a Skill name to make it favorite" 
            @click.prevent='hideSkills=!hideSkills'>Show favorite
          </button>
          <button v-else class='btn btn-secondary btn-sm float-left mb-2'  
            data-toggle="tooltip" data-placement="top" title="Click on a Skill name to make it favorite" 
            @click.prevent='hideSkills=!hideSkills'>Show all
          </button>
                      <!-- SHOW UNSPENT POINTS FOR RANKS -->
          <div v-if='unspentRanks<0' class="float-right divDisplayMedia divSkillsPadding pl-2  spinnersOff">
            <small
              class="form-text"
              style='font-size:0.67rem;color:white;'
              >REMOVE <br> RANKS
            </small>
            <input
              class="form-control input p-0 inputDisplayMedia"
              type='number'
              disabled
              style='background-color:#f44949;font-weight:700 ;border:1px solid black;max-height:2rem;min-width:3rem;'
              v-model='unspentRanks'
              >
          </div> 
          <div v-else class="float-right divDisplayMedia divSkillsPadding pl-2  spinnersOff">
            <small
              class="form-text"
              style='color:white;font-size:0.67rem;'>UNSPENT <br> RANKS
            </small>
            <input
              class="form-control input p-0 inputStyle2 inputDisplayMedia"
              style='background-color:#eda12f;border:1px solid black;max-height:2rem;min-width:3rem;'
              type='number'
              disabled
              v-model='unspentRanks'
              >
          </div>
          <h5 class="form-text clearfix font-italic font-weight-bold"  style='border-bottom:1px solid #6d6d6d;'>SKILLS</h5>
          <div class="row clearfix">
            <div class="col-6" style='text-align:center;'>
              <div class="row">
                <div class="col-lg-8 col-9 p-0 ">
                  <small
                   class="form-text"
                   style='color:white;font-size:0.67rem;'>SKILL <br> NAME</small>
                  
                </div>
                <div class="col-lg-4 col-3 keyAbilityPadding">
                  <small
                   class='form-text skillsWidth'
                   style='color:white;'>KEY <br> ABILITY</small>
                </div>
              </div>
            </div>
            <div class="col-6" style='text-align:center;'>
              <div class="row">
                <div class="col-3 p-0">
                  <small
                   class="form-text skillsWidth"
                   style='color:white;;'>SKILL <br> MODIFIER</small>
                </div>
                <div class="col-3 p-0">
                  <small
                   class="form-text skillsWidth"
                   style='color:white;'>ABILITY <br> MODIFIER</small>
                </div>
                <div class="col-3 p-0">
                  <small
                   class="form-text skillsWidth"
                   style='color:white;'>RANKS <br></small>
                </div>
                <div class="col-3 p-0">
                  <small
                  class="form-text skillsWidth"
                  style='color:white;'>MISC <br> MODIFIER</small>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div> <!--END OF  SKILLS title / button / unspent ranks / names -->

      <!-- SKILLS -->
      <div class="row" > 
        <div class="col-lg-8 col-md-10 col-sm-11 col-12">
          <div class="row">
            <div class="col-6" >
              <div class="row">
                <!-- SKILL NAME -->
                <div v-if='!hideSkills' class="col-lg-8 col-9 pr-1 pl-1 divSkillsPadding">
                  <div class='inputStyle4 text-left' v-for="(skillName,i) in skills" :key="`${i}-${skillName.id}`">
                    <div v-if='skills[i].isClicked'>
                      <small
                          class='ml-2'
                          style='cursor: pointer; color:black;'
                          @click.prevent='skills[i].isClicked=!skills[i].isClicked'
                        >{{skillName.id.toUpperCase()}}
                      </small>
                      <small v-if='skillName.isClassSkill'>* </small>
                      <small  v-if='skillName.isText'>
                        <input
                          v-model='skillName.text'
                          class='input1 skillNameInput'
                          type="text">
                      </small>
                    </div>
                  </div>
                </div>

                <div v-else class="col-lg-8 col-9 pr-1 pl-1 divSkillsPadding">
                  <div class='inputStyle4 text-left' v-for="(skillName,i) in skills" :key="`${i}-${skillName.id}`">
                    <small
                        class='ml-2'
                        style='cursor: pointer; color:black;'
                        @click.prevent='skills[i].isClicked=!skills[i].isClicked'
                      >{{skillName.id.toUpperCase()}}
                    </small>
                    <small v-if='skillName.isClassSkill'>* </small>
                    <small v-if='skillName.isText'>
                      <input
                        v-model='skillName.text'
                        class='input1 skillNameInput'
                        type="text"
                      >
                    </small>
                  </div>
                </div>
                <!-- KEY ABILITY -->
                <div v-if='!hideSkills' class="col-lg-4 col-3 keyAbilityPadding" >
                  <div class='inputStyle4' v-for='(ability,i) in skills' :key="`${i}-${ability.value.keyAbility}`">
                    <div v-if='skills[i].isClicked'>
                      <small style='color:black;'>{{ ability.value.keyAbility.toUpperCase() }}</small>
                    </div>  
                  </div>
                </div>

                <div v-else class="col-lg-4 col-3 keyAbilityPadding" >
                  <div class='inputStyle4' v-for='(ability,i) in skills' :key="`${i}-${ability.value.keyAbility}`">
                    <small style='color:black;'>{{ ability.value.keyAbility.toUpperCase() }}</small>
                  </div>
                </div>
              </div>
            </div> <!-- END OF GRID ROW -->
            <div class="col-6" style='text-align:center;'>
              <div class="row">
                <!-- SKILL MODIFIER -->
                <div v-if='!hideSkills' class="col-3 p-0  spinnersOff">              
                    <div v-for='(skill,i) in mapTotalSkillModifier' :key="`${i}-${skill}`">
                      <!-- check if SKILL NAME is clicked to change the color -->
                      <div v-if='skills[i].isClicked' class='inputStyle5 changeBackground'>
                        <input 
                          disabled
                          class='input1 skillNameInput inputSkills changeBackground'
                          type='number'
                          v-model='mapTotalSkillModifier[i]'>
                       </div>
                    </div>
                </div>

                <div v-else class="col-3 p-0  spinnersOff">
                    <div v-for='(skill,i) in mapTotalSkillModifier'  :key="`${i}-${skill}`">
                      <!-- check if SKILL NAME is clicked to change the color -->
                      <div v-if='skills[i].isClicked' class='inputStyle5 changeBackground'>
                        <input 
                          disabled
                          class='input1 skillNameInput inputSkills changeBackground'
                          type='number'
                          v-model='mapTotalSkillModifier[i]'>
                      </div>  
                      <div v-else class='inputStyle5'>
                        <input
                          disabled
                          class='input1 skillNameInput inputSkills'
                          type='number'
                        v-model='mapTotalSkillModifier[i]'>
                      </div>  
                    </div>
                </div>
                <!-- ABILITY MODIFIER -->
                <div v-if='!hideSkills' class="col-3 p-0 spinnersOff">
                    <div v-for='(skill,i) in mapAbilityModifier' :key="`${i}-${skill}`">
                      <div v-if='skills[i].isClicked' class='inputStyle5'>
                        <input
                          disabled
                          class='input1 skillNameInput inputSkills'
                          type='number'
                          v-model='mapAbilityModifier[i]'>
                      </div>  
                    </div>
                </div>

                <div v-else class="col-3 p-0 spinnersOff">
                    <div v-for='(skill,i) in mapAbilityModifier' :key="`${i}-${skill}`">
                      <div class='inputStyle5'>
                        <input
                          disabled
                          class='input1 skillNameInput inputSkills'
                          type='number'
                          v-model='mapAbilityModifier[i]'>
                        </div>
                    </div>
                </div>
                <!-- RANKS -->
                <div v-if='!isConditionForRanks' class="col-3 p-0 spinnersOff">
                  <div v-if='!hideSkills'>
                    <div v-for='(skill,i) in skills' :key='i'>
                      <div v-if='skills[i].isClicked' class='inputStyle5'>
                        <input class='input1 skillNameInput inputSkills'
                          type='number'
                          disabled
                          v-model='skill.value.ranks'>
                      </div>  
                    </div>
                  </div>
                  <div v-else class='spinnersOff'>
                    <div v-for='(skill,i) in skills' :key='i'>
                      <div class='inputStyle5'>
                        <input class='input1 skillNameInput inputSkills'
                          style='color:#c11900'
                          type='number'
                          disabled
                          v-model='skill.value.ranks'>
                      </div>
                    </div>
                  </div>      
                </div>  

                <div v-else class="col-3 p-0  pinnersOff">
                  <div v-if='!hideSkills'>
                      <div v-for='(skill,i) in skills' :key='i'>
                        <div v-if='skills[i].isClicked' class='inputStyle5'>
                          <input class='input1 skillNameInput inputSkills'
                            type='number'
                            min="0"
                            :max='skills[i].isClassSkill ? level+3 : Math.floor((level+3)/2)'
                            v-model='skill.value.ranks'
                            @input='spendRankPoints()'>
                        </div>    
                      </div>
                  </div>
                  <div v-else class='spinnersOff'>
                      <div v-for='(skill,i) in skills' :key='i'>
                        <div class='inputStyle5'>
                          <input class='input1 skillNameInput inputSkills'
                            type='number'
                            min="0"
                            :max='skills[i].isClassSkill ? level+3 : Math.floor((level+3)/2)'
                            v-model='skill.value.ranks'
                            @input='spendRankPoints()'>
                        </div>
                      </div>
                  </div>   
                </div>
                <!-- MISC MODIFIER -->
                <div v-if='!hideSkills' class="col-3 p-0  spinnersOff spinnersOn">
                    <div v-for='(skill,i) in skills' :key="i">
                      <div v-if='skills[i].isClicked' class='inputStyle5'>
                        <input class='input1 skillNameInput inputSkills'
                          type='number'
                          v-model='skill.value.miscModifier'>
                      </div>  
                    </div>
                </div>
                <div v-else class="col-3 p-0  spinnersOff spinnersOn">
                    <div v-for='(skill,i) in skills' :key="i">
                      <div class='inputStyle5'>
                        <input class='input1 skillNameInput inputSkills'
                          type='number'
                          v-model='skill.value.miscModifier'>
                      </div>
                    </div>
                </div>
              </div>
            </div> <!-- END OF GRID ROW -->
          </div>
        </div> <!-- END OF GRID ROW -->
      </div>  <!--END OF SKILLS -->

      <hr class='pt-4' style='opacity:0'>
            <!-- FEATS , SHOW ALL -->
      <div class="row">
        <div class="col-12">
          <button v-if='hideLearnedFeats' class='btn btn-secondary btn-sm float-left mb-2'
            @click.prevent='hideLearnedFeats=!hideLearnedFeats'>Hide
          </button>
          <button v-else class='btn btn-secondary btn-sm float-left mb-2' 
            @click.prevent='hideLearnedFeats=!hideLearnedFeats'>Show
          </button>
          <h5 class="form-text font-italic font-weight-bold clearfix m-0" style='border-bottom:1px solid black;'>FEATS</h5>
        </div>
      </div>
      <!-- FEATS , SHOW LEARNED  -->
           <div class="row pl-1 pr-1">
        <div class='col-12 featsStyle featsStyle2'>
        <span v-show='hideLearnedFeats' v-for='(learnedFeat,i) in learnedFeats' :key='i'>
          {{i+1}}) <a @click='passFeatData(learnedFeat, i)' href='#' data-toggle="modal" data-target="#learnedFeat">{{learnedFeat.id}}.</a>
              <!-- Modal -->
          <div class="modal fade" id="learnedFeat" tabindex="-1" role="dialog" aria-labelledby="featModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title text-center" id="featModalLabel">{{featData.id}}</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-left">
                  <span class='font-italic' v-if='featData.prerequisite'><u> Prerequisite: </u></span>
                  <p class='font-weight-bold' v-if='featData.prerequisite'>{{featData.prerequisite}}</p>
                  <span class='font-italic'><u> Benefit: </u></span>
                  <p class='font-weight-bold'>{{featData.benefit}}</p>
                  <span class='font-italic' v-if='featData.normal'><u> Normal: </u></span>
                  <p class='font-weight-bold' v-if='featData.normal'>{{featData.normal}}</p>
                  <span class='font-italic' v-if='featData.special'><u> Special: </u></span> 
                  <p class='font-weight-bold' v-if='featData.special'>{{featData.special}}</p> 
                </div>
              </div>
            </div>
          </div> <!-- END OF MODAL -->
        </span>
        </div>
      </div>

      <hr class='pt-4' style='opacity:0;'>

     <!-- FEATS , SHOW ALL -->
      <div class="row">
        <div class="col-12">
          <button v-if='hideFeats' class='btn btn-secondary btn-sm float-left mb-2'
            @click.prevent='hideFeats=!hideFeats'>Hide
          </button>
          <button v-else class='btn btn-secondary btn-sm float-left mb-2' 
            @click.prevent='hideFeats=!hideFeats'>Show
          </button>
          <h5 class="form-text font-italic font-weight-bold clearfix m-0"  style='border-bottom:1px solid black;'>FEATS TABLE</h5>
        </div>
      </div>
      <div class="row featsStyle" v-show='hideFeats'>
        <div class="col-4 text-left mb-4">
          <div class='featsStyle2' v-for='(feat,i) in feats' :key='feat.id'>
            <span v-if='i<=17'>{{i+1}}) </span>
            <a v-if='i<=17' @click='passFeatData(feat, i)' href='#' data-toggle="modal" data-target="#showFeats">
              {{feat.id}}
            </a>
          </div>
        </div>        
        <div class="col-4 text-left mb-4">
          <div class='featsStyle2' v-for='(feat,i) in feats' :key='feat.id'>
            <span v-if='(i>=18 && i<=35)'>{{i+1}}) </span>
            <a v-if='(i>=18 && i<=35)' @click='passFeatData(feat, i)' href='#' data-toggle="modal" data-target="#showFeats">
              {{feat.id}}
            </a>
          </div>
        </div>    
        <div class="col-4 text-left mb-4">
          <div class='featsStyle2' v-for='(feat,i) in feats' :key='feat.id'>
            <span v-if='(i>=36 && i<=51)'>{{i+1}}) </span>
            <a v-if='(i>=36 && i<=51)' @click='passFeatData(feat, i)' href='#' data-toggle="modal" data-target="#showFeats">
              {{feat.id}}
            </a>           
          </div>
        </div>
        <div class="col-4 text-left mb-4">
          <div class='featsStyle2' v-for='(feat,i) in feats' :key='feat.id'>
             <span v-if='(i>=52 && i<=70)'>{{i+1}}) </span>
             <a v-if='(i>=52 && i<=70)'@click='passFeatData(feat, i)' href='#' data-toggle="modal" data-target="#showFeats">
              {{feat.id}}
             </a>          
          </div>
        </div>
        <div class="col-4 text-left mb-4">
          <div class='featsStyle2' v-for='(feat,i) in feats' :key='feat.id'>
            <span v-if='(i>=71 && i<=89)'>{{i+1}}) </span> 
            <a v-if='(i>=71 && i<=89)' @click='passFeatData(feat, i)' href='#' data-toggle="modal" data-target="#showFeats">
              {{feat.id}}
            </a>          
          </div>
        </div>
        <div class="col-4 text-left mb-4">
          <div class='featsStyle2' v-for='(feat,i) in feats' :key='feat.id'>
            <span v-if='(i>=90 && i<=108)'>{{i+1}}) </span> 
            <a v-if='(i>=90 && i<=108)' @click='passFeatData(feat)' href='#' data-toggle="modal" data-target="#showFeats">
              {{feat.id}}
            </a>
            
          </div>
        </div>
      </div>

              <!-- Modal -->
      <div class="modal fade" id="showFeats" tabindex="-1" role="dialog" aria-labelledby="showFeatsModat" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center" id="featModalLabel">{{featData.id}}</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">
              <span class='font-italic' v-if='featData.prerequisite'><u> Prerequisite: </u></span>
              <p class='font-weight-bold' v-if='featData.prerequisite'>{{featData.prerequisite}}</p>
              <span class='font-italic'><u> Benefit: </u></span>
              <p class='font-weight-bold'>{{featData.benefit}}</p>
              <span class='font-italic' v-if='featData.normal'><u> Normal: </u></span>
              <p class='font-weight-bold' v-if='featData.normal'>{{featData.normal}}</p>
              <span class='font-italic' v-if='featData.special'><u> Special: </u></span> 
              <p class='font-weight-bold' v-if='featData.special'>{{featData.special}}</p> 
            </div>
          </div>
        </div>
      </div> <!-- END OF MODAL -->

      <div class='mt-5 mb-5'>
        <router-link :to="{ name:'Characters'}">
          <a href="#">
            <button @click='redirectAtTop()' class='btn btn-info mr-2'>Go Back</button>
          </a>
        </router-link>
        <router-link :to="{ name:'EditCharacter'}">
          <a href="#">
            <button @click='redirectAtTop()' class='btn btn-warning'>Edit</button>
          </a>
        </router-link>
      </div>  
  </div>  
      <!--END OF CHARACTER PERSONAL INFO -->
  
</template>

<script>
/* eslint-disable */
import PostsService from '@/services/PostsService'

import { AbilityModifiersMethods } from '../mixins/AbilityModifiersMethods.js'
import { TemporaryAbilityModifiersMethods } from '../mixins/TemporaryAbilityModifiersMethods.js'
import { ComputedProperties } from '../mixins/ComputedProperties.js'
import { DataProperties } from '../mixins/DataProperties.js'
import { MethodProperties } from '../mixins/MethodProperties.js'
import { SkillPoints } from '../mixins/SkillPoints.js'
import { Feats } from '../mixins/Feats.js'
import { SThrowsBAttack } from '../mixins/SThrowsBAttack.js'

export default {
    name: 'ShowCharacter',
    mixins:[
      AbilityModifiersMethods,
      TemporaryAbilityModifiersMethods,
      ComputedProperties,DataProperties,
      MethodProperties,SkillPoints,
      Feats,SThrowsBAttack
    ],
    mounted(){
        this.getCharInfo();
    },
    methods:{
        async getCharInfo(){
            const response = await PostsService.getCharInfo({
                id: this.$route.params.id
            })
            this.title = response.data.title,
            this.charName= response.data.charName,
            this.player= response.data.player,
            this.class_= response.data.class_,
            this.level= response.data.level,
            this.race= response.data.race,
            this.alignment= response.data.alignment,
            this.deity= response.data.deity,
            this.size= response.data.size,
            this.age= response.data.age,
            this.gender= response.data.gender,
            this.height= response.data.height,
            this.weight= response.data.weight,
            this.eyes= response.data.eyes,
            this.hair= response.data.hair,
            this.skin= response.data.skin,
            this.abilityScore= response.data.abilityScore,
            this.abilityModifier= response.data.abilityModifier,
            this.temporaryScore= response.data.temporaryScore,
            this.temporaryModifier= response.data.temporaryModifier

            this.savingThrowsModifier= response.data.savingThrowsModifier,
            this.skills= response.data.skills,
            this.learnedFeats = response.data.learnedFeats,


            this.classes = response.data.classes,
            this.isConditionForRanks = response.data.isConditionForRanks,
            this.errorMessageForRanks = response.data.errorMessageForRanks,
            this.unspentRanks = response.data.unspentRanks,
            this.checkForLevel1 = response.data.checkForLevel1,
            this.checkLevelForRanks = response.data.checkLevelForRanks,
            this.totalRanks = response.data.totalRanks,
            this.spentCrossRanks = response.data.spentCrossRanks,
            this.spentClassRanks = response.data.spentClassRanks,

            this.hp = response.data.hp,    
            this.currentHp = response.data.currentHp,    
            this.dmgTaken = response.data.dmgTaken,    
            this.nonLethal = response.data.nonLethal,    
            this.ac = response.data.ac,    
            this.armorBonus = response.data.armorBonus,    
            this.shieldBonus = response.data.shieldBonus,    
            this.sizeModifier = response.data.sizeModifier,    
            this.naturalArmor = response.data.naturalArmor,    
            this.deflectingModifier = response.data.deflectingModifier,    
            this.miscModifierAC = response.data.miscModifierAC,
            this.miscModifierInitiative = response.data.miscModifierInitiative,    
            this.miscModifierTouch = response.data.miscModifierTouch,    
            this.miscModifierFlatFooted = response.data.miscModifierFlatFooted,    
            this.miscModifierGrapple = response.data.miscModifierGrapple,    
            this.dmgReduction = response.data.dmgReduction,    
            this.initiative = response.data.initiative,    
            this.touch = response.data.touch,    
            this.flatFooted = response.data.flatFooted,    
            this.speed = response.data.speed,    
            this.baseAttackBonus = response.data.baseAttackBonus,    
            this.spellResistance = response.data.spellResistance,    
            this.grapple = response.data.grapple  

        },      
    }
}
</script>

<style scoped lang='scss'>
@import "@/assets/styles/main.scss";
@import "@/assets/styles/show.scss";


</style>


