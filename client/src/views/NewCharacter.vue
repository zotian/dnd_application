<template>
  <div class='container mt-3 text-center'>
    <form accept-charset="ISO-8859-1">
      <!-- CHARACTER PERSONAL INFO -->
      <div class='form-group smallDisplay mb-3' style='max-width:250px; margin:0 auto;'>
        <small class="form-text smallDisplayMedia">TITLE (optional)</small>
        <input
          name='title'
          v-model='title'
          class='personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1'
          type="text">
      </div>
      <div class="form-group smallDisplay row mb-0">
        <div class="col-sm-5 col-4  divPersonalDisplayMedia2">
          <input
            v-model='charName'
            name='charName'
            type="text" 
            class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            >
          <small class="form-text smallDisplayMedia mb-2">CHARACTER NAME</small>
        </div>
        <div class="col-sm-2 col-4 mb-1 divPersonalDisplayMedia2 spinnersOn spinnersOff">
          <input
            type="number"
            name='level'
            class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            v-model.number='level'
            min='1'
            max='20'
            @input="levelUp($event)"
            >
          <small class="form-text smallDisplayMedia mb-2">LEVEL</small>
        </div>
        <div class="col-sm-5 col-4  mb-1 divPersonalDisplayMedia2">
          <input
            v-model='player'
            name='player'
            type="text"
            class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
            >
          <small class="form-text smallDisplayMedia mb-2">PLAYER</small>
        </div>
      </div>

      <div class="form-group smallDisplay row mb-0">
        <div class="form-group col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <select class="custom-select inputStyle4 h6DisplayMedia mb-0 pr-3 pl-1"
              v-model='class_'
              name='class_'
              @input='selectedClass($event)'
              >
            <option v-for='choosenClass in classes' :key='choosenClass.id'
             :value='choosenClass.id'>
              {{ choosenClass.id }} </option>
          </select>
          <small class="form-text smallDisplayMedia mb-2">CLASS</small>
        </div>
        <div class="form-group col-sm-2 col-4 text-center mb-0 divPersonalDisplayMedia">
          <select class="custom-select inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1"
           v-model='race' name='race' @select='selectedRace($event)' >
            <option v-for='race in races' :key='race.id' :value='race.id'>
               {{ race.id }} </option>
          </select>
          <small class="form-text smallDisplayMedia mb-2">RACE</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input v-model='alignment' name='alignment' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">ALIGNMENT</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input v-model='deity' name='deity' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">DEITY</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input v-model='size' name='size' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">SIZE</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input v-model='gender' name='gender' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">GENDER</small>
        </div>
      </div>

      <div class="form-group smallDisplay row mb-1">
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia spinnersOn spinnersOff">
          <input v-model='age' min='0' name='age' type="number" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">AGE</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia spinnersOn spinnersOff">
          <input v-model='height' min='0' name='height' type="number" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">HEIGHT</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia spinnersOn spinnersOff">
          <input v-model='weight' min='0' name='weight' type="number" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">WEIGHT</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input v-model='eyes' name='eyes' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">EYES</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input v-model='hair' name='hair' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">HAIR</small>
        </div>
        <div class="col-sm-2 col-4 mb-0 divPersonalDisplayMedia">
          <input v-model='skin' name='skin' type="text" class="personalInput form-control inputStyle4 h6DisplayMedia mb-0 pr-2 pl-1" >
          <small class="form-text smallDisplayMedia mb-2">SKIN</small>
        </div>
      </div>


            <!-- ABILITIES -->
      <div class='row mt-5 pb-4'>
        <div class=' col-2 divDisplayMedia mr-1'>
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

        <!-- ABILITIES SCORE -->
        <div class='col-lg-1 col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOn spinnersOff'>
          <ul >
            <small class="form-text smallDisplayMedia"
               style='padding-bottom:0.2rem'>ABILITY <br> SCORE</small>
            <li class="form-text pt-1 liAbilities" style='padding-bottom:0.5rem' v-for=' (item,i) in abilityScore' :key='item.id'>
              <input
                class="form-control inputStyle2 inputDisplayMedia p-0"
                style='max-height:2rem;'
                type='number'
                v-model.number='item.value'
                @input='changePermModifier(i,$event.target.value)'>
            </li>
          </ul>
        </div>

        <!-- ABILITY MODIFIER -->
        <div class='col-lg-1 col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOff'>
          <ul>
            <small class="form-text smallDisplayMedia"
              style='padding-bottom:0.2rem'>ABILITY <br> MODIFIER</small>
            <li class="form-text pt-1 liAbilities" style='padding-bottom:0.5rem' v-for=' item in abilityModifier' :key='item.id'>
              <input
                class="form-control inputStyle2 inputDisplayMedia p-0"
                style='max-height:2rem;'
                type='number'
                v-model.number='item.value' disabled>
            </li>
          </ul>
        </div>  

      <!-- TEMORARY SCORES -->
        <div class='col-lg-1 col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOn spinnersOff'>
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
        <div class='col-lg-1 col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOff'>
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
        <!-- UNSPENT POINTS -->
        <div class="col-lg-1 col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOff"
          style='padding-bottom:0.2rem' v-if='unspentPoints>0'>
          <ul>
          <small class="form-text  smallDisplayMedia"
            style='padding-bottom:0.2rem'>UNSPENT POINTS</small>
            <li class="form-text pt-1 liAbilities" style='padding-bottom:0.5rem'>
              <input
                class="form-control inputStyle2 inputDisplayMedia p-0"
                type="number"
                style='background-color:#eda12f;max-height:2rem;'
                v-model='unspentPoints' disabled>
            </li>
          </ul>
          <button class='btn btn-success btn-sm' @click.prevent='spendPoints(selected)'>Save</button> 
          <select class='mt-3 inputStyle2 inputDisplayMedia ' v-model="selected">
            <option style='color:black;' v-for="option in options" :key='option.value'
                :value="option.text">
                  {{ option.text }}
            </option>
          </select>       
        </div>
      </div>
          <!-- MAKE TEMP ABILITY = TEMP -->
      <button class='btn btn-info btn-sm mb-4' @click.prevent='equalScore'>Set Abilities = Temporary </button>

      <hr style='opacity:0;'>

          <!-- HP CONFIGURATION -->
      <div class="row">
        <div class='col-2 divDisplayMedia'>
          <input
              class="form-control inputStyle3 h6DisplayMedia p-0"
              type='text'
              value='HP' disabled>
        </div>
        <div class="col-2 pr-4 pl-4 divDisplayMediaTotal spinnersOn spinnersOff">
            <input
              class="form-control inputStyle2  p-0"
              type='number'
              v-model='hp'>
            <small class="form-text smallDisplayMedia smallWidth">TOTAL</small>
        </div>
        <div class="col-2 pr-4 pl-4 divDisplayMediaTotal spinnersOn spinnersOff">
            <input
              class="form-control inputStyle2 p-0"
              type='number'
              v-model='dmgReduction'>
            <small class="form-text smallDisplayMedia smallWidth">DMG REDUCTION</small>
        </div>
        <div class="col-2 pr-4 pl-4 divDisplayMediaTotal spinnersOn spinnersOff">
            <input
              class="form-control inputStyle2 p-0"
              type='number'
              v-model='speed'>
            <small class="form-text smallDisplayMedia smallWidth">SPEED</small>
        </div>
      </div>
        <!--AC CONFIGURATION -->
      <div class="row">
        <div class='col-2 mt-2 divDisplayMedia'>
            <input
              class="form-control inputStyle3 h6DisplayMedia p-0"
              type='text'
              value='AC' disabled>
        </div>
        <div class="col-2 mt-2 pr-4 pl-4 divDisplayMediaTotal spinnersOff">
            <input
              class="form-control inputStyle2 p-0"
              type='number'
              v-model='changeAc'
              disabled>
          <small class="form-text smallDisplayMedia smallWidth">TOTAL</small>
        </div>
        <div class="col-1 mt-2 divDisplayMedia2 spinnersOn spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='armorBonus'>
          <small class="form-text smallDisplayMedia">ARMOR BONUS</small>
        </div>
        <div class="col-1 mt-2 divDisplayMedia2 spinnersOn spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='shieldBonus'>
          <small class="form-text smallDisplayMedia">SHILED BONUS</small>
        </div >
        <div class="col-1 mt-2 divDisplayMedia2 spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='temporaryModifier[1].value' disabled>
          <small class="form-text smallDisplayMedia">DEX MODIFIER</small>
        </div>
        <div class="col-1 mt-2 divDisplayMedia2 spinnersOn spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='sizeModifier'>
          <small class="form-text smallDisplayMedia">SIZE MODIFIER</small>
        </div>
        <div class="col-1 mt-2 divDisplayMedia2 spinnersOn spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='naturalArmor'>
          <small class="form-text smallDisplayMedia">NATURAL ARMOR</small>
        </div>
        <div class="col-1 mt-2 divDisplayMedia2 spinnersOn spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='deflectingModifier'>
          <small class="form-text smallDisplayMedia">DEFLECTING MODIFIER</small>
        </div>
        <div class="col-1 mt-2 divDisplayMedia2 spinnersOn spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='miscModifierAC'>
          <small class="form-text smallDisplayMedia">MISC MODIFIER</small>
        </div>
      </div>
      <!-- INITIATIVE / FLAT-FOOTED / TOUCH -->
      <div class="row mt-2">
        <div class='col-2 divDisplayMedia'>
          <input
            class="form-control inputStyle3 h6DisplayMedia p-0"
            type='text'
            value='INITIATIVE' disabled>
          <small class="form-text smallDisplayMedia">MODIFIER</small>
        </div>
        <div class="col-2 pr-4 pl-4 divDisplayMediaTotal spinnersOff">
          <input
            class="form-control inputStyle2 p-0"
            type='number'
            v-model='changeInitiative' disabled>
          <small class="form-text smallDisplayMedia smallWidth">TOTAL</small>
        </div>
        <div class="col-1 divDisplayMedia2 spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='temporaryModifier[1].value' disabled>
          <small class="form-text smallDisplayMedia">DEX MODIFIER</small>
        </div>
        <div class="col-1 divDisplayMedia2 spinnersOn spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='miscModifierInitiative'>
          <small class="form-text smallDisplayMedia">MISC MODIFIER</small>
        </div>
      </div>

      <div class="row mt-2">
        <div class='col-2 divDisplayMedia'>
          <input
            class="form-control inputStyle3 h6DisplayMedia p-0"
            type='text'
            value='TOUCH' disabled>
          <small class="form-text smallDisplayMedia">AC</small>
        </div>
        <div class="col-sm-2 col-1 pr-4 pl-4 divDisplayMediaTotal spinnersOff">
          <input
            class="form-control inputStyle2 p-0"
            type='number'
            v-model='changeTouch' disabled>
          <small class="form-text smallDisplayMedia smallWidth">TOTAL</small>
        </div>
        <div class="col-1 divDisplayMedia2 spinnersOn spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='miscModifierTouch'>
          <small class="form-text smallDisplayMedia">MISC MODIFIER</small>
        </div>
      </div>  

      <div class="row mt-2">
        <div class='col-2 divDisplayMedia'>
          <input
            class="form-control inputStyle3 h6DisplayMedia p-0"
            type='text'
            value='FLAT-FOOTED' disabled>         
          <small class="form-text smallDisplayMedia">AC</small>
        </div>
        <div class="col-2 pr-4 pl-4 divDisplayMediaTotal spinnersOff">
          <input
            class="form-control inputStyle2 p-0"
            type='number'
            v-model='changeFlatFooted' disabled>
          <small class="form-text smallDisplayMedia smallWidth">TOTAL</small>
        </div>
        <div class="col-1 divDisplayMedia2 spinnersOn spinnersOff">
          <input
            class="form-control inputStyle2 inputDisplayMedia p-0"
            type='number'
            v-model='miscModifierFlatFooted'>
          <small class="form-text smallDisplayMedia">MISC MODIFIER</small>
        </div>
      </div>
      <hr class='pt-2' style='opacity:0;'>


      <!-- SAVING THROWS -->
      <div class="row">
        <div class='col-2 divDisplayMedia mr-1'>       
          <ul>
            <h6 class="form-text h6DisplayMedia">SAVING <br> THROWS</h6>
            <li v-for='item in savingThrowsModifier[0].saves' :key='item.id'
              class="inputStyle1 liSaves" >
              <h6 class="form-text pt-1" style='margin-bottom:0px;margin-top:0.4rem;'>{{item.id}}</h6>
              <small class="form-text pb-1 mt-0">{{item.saveValue}}</small>
            </li>
          </ul>
        </div>
        <div class='col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOff'>
          <ul>
            <small class="form-text smallDisplayMedia"  style='padding-bottom:0.2rem'>TOTAL <br> SCORE</small>
            <li class="form-text pt-1 liSavingThrows" style='padding-bottom:0.5rem' v-for='item in savingThrowsModifier[0].saves' :key='item.id'>
              <input
                class="form-control inputStyle2 inputDisplayMedia"
                style='max-height:2rem;'
                type="number"
                v-model='item.value' @input='changeTotalScore'
                disabled>
            </li>
          </ul>
        </div>
        <div class='col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOff'>
          <ul>
            <small class="form-text smallDisplayMedia"  style='padding-bottom:0.2rem'>BASE <br> SAVE</small>
            <li class="form-text pt-1 liSavingThrows" style='padding-bottom:0.5rem' v-for='(item,i) in savingThrowsModifier[1].saves' :key='item.id'>
              <input
                class="form-control inputStyle2 inputDisplayMedia"
                style='max-height:2rem;'
                type="number"
                v-model='savingThrowsModifier[1].saves[i].value'
                @input='changeBaseSave(i,$event)'
                disabled>
            </li>
          </ul>
        </div>
        <div class='col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOff'>
          <small class="form-text smallDisplayMedia"  style='padding-bottom:0.2rem'>ABILITY <br> MODIFIER</small>
          <ul >
            <li class="form-text pt-1 liSavingThrows" style='padding-bottom:0.5rem' v-for='(item,i) in savingThrowsModifier[2].saves' :key='item.id'>
              <input
                 class="form-control inputStyle2 inputDisplayMedia"
                 style='max-height:2rem;'
                 type="number"
                 v-model='savingThrowsModifier[2].saves[i].value'
                 @input='changeAbilityModifier(i,$event)'
                 disabled>
            </li>
          </ul>
        </div>
        <div class='col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOn spinnersOff'>
          <small class="form-text smallDisplayMedia"  style='padding-bottom:0.2rem'>MAGIC <br> MODIFIER</small>
          <ul >
            <li class="form-text pt-1 liSavingThrows" style='padding-bottom:0.5rem' v-for='(item,i) in savingThrowsModifier[3].saves' :key='item.id'>
              <input
                 class="form-control inputStyle2 inputDisplayMedia"
                 style='max-height:2rem;'
                 type="number"
                 v-model='savingThrowsModifier[3].saves[i].value'
                 @input='changeMagicModifier(i,$event)'>
            </li>
          </ul>
        </div>
        <div class='col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOn spinnersOff'>
          <small class="form-text smallDisplayMedia"  style='padding-bottom:0.2rem'>MISC <br> MODIFIER</small>
          <ul >
            <li class="form-text pt-1 liSavingThrows" style='padding-bottom:0.5rem' v-for='(item,i) in savingThrowsModifier[4].saves' :key='item.id'>
              <input
                class="form-control inputStyle2 inputDisplayMedia"
                style='max-height:2rem;'
                type="number"
                v-model='savingThrowsModifier[4].saves[i].value'
                @input='changeMiscModifier(i,$event)'>
            </li>
          </ul>
        </div>
        <div class='col-md-1 col-sm-2 col-2 divDisplayMedia2 spinnersOn spinnersOff'>
          <small class="form-text smallDisplayMedia"  style='padding-bottom:0.2rem'>TEMPORARY MODIFIER</small>
          <ul >
            <li class="form-text pt-1 liSavingThrows" style='padding-bottom:0.5rem' v-for='(item,i) in savingThrowsModifier[5].saves' :key='item.id'>
              <input
                class="form-control inputStyle2 inputDisplayMedia"
                style='max-height:2rem;'
                type="number"
                v-model='savingThrowsModifier[5].saves[i].value'
                @input='changeTemporaryModifier(i,$event)'>
            </li>
          </ul>
        </div>

      </div>
      <div class="row">
              <!-- BASE ATT / SPELL RES / GRAPPLE -->
        <div class='col-2 divDisplayMedia'>
          <h6 class="form-text h6DisplayMedia">B.ATT - S.RES -<br>GRAPPLE</h6>
          <ul>
            <li
              class="inputStyle3 liBaseAtt" >
              <h6 class="form-text pt-1 h6DisplayMedia" style='margin-bottom:0px;margin-top:0.4rem;color:#2D2D2D;'>BASE ATTACK</h6>
              <small class="form-text pb-1 mt-0" style='color:white;'>BONUS</small>
            </li>            
            <li
              class="inputStyle3 liBaseAtt">
              <h6 class="form-text pt-1 h6DisplayMedia" style='margin-bottom:0px;margin-top:0.4rem;color:#2D2D2D;'>SPELL</h6>
              <small class="form-text pb-1 mt-0" style='color:white;'>RESISTANCE</small>
            </li>            
            <li
              class="inputStyle3 liBaseAtt">
              <h6 class="form-text pt-1 h6DisplayMedia" style='margin-bottom:0px;margin-top:0.4rem;color:#2D2D2D;'>GRAPPLE</h6>
              <small class="form-text pb-1 mt-0" style='color:white;'>MODIFIER</small>
            </li>
          </ul>
        </div>
        <div class='col-2 pr-4 pl-4 divDisplayMediaTotal spinnersOn spinnersOff'>
          <small class="form-text smallDisplayMedia smallWidth"  style='padding-bottom:0.2rem'>TOTAL <br> SCORE</small>
          <ul>
                  <!-- BASE ATTACK BONUS -->
            <li class="form-text pt-1 liBaseAtt2" style='padding-bottom:0.5rem'>
              <input
                v-model='baseAttackBonus'
                type="text"
                class="form-control inputStyle2 p-0"
                style='max-height:2rem;'
                >
            </li>
                  <!-- SPELL RESISTANCE -->
            <li class="form-text pt-1 liBaseAtt2" style='padding-bottom:0.5rem'>
              <input
                v-model='spellResistance'
                type="number"
                class="form-control inputStyle2 p-0"
                style='max-height:2rem;'
                >
            </li>
                  <!-- GRAPPLE -->
            <li class="form-text pt-1 liBaseAtt2" style='padding-bottom:0.5rem'>
              <input
                v-model='changeGrapple'
                type="text"
                class="form-control inputStyle2 p-0"
                style='max-height:2rem;'
                disabled>
            </li>
          </ul>
        </div>
        <div class='col-1 divDisplayMedia2 spinnersOn spinnersOff'>
          <small class="form-text smallDisplayMedia" style='padding-bottom:0.2rem'>MISC MODIFIER</small>
          <ul class='ulMiscGrapple'>
                  <!-- GRAPPLE -->
            <li class="form-text pt-1" style='padding-bottom:0.5rem'>
              <input
                v-model='miscModifierGrapple'
                type="number"
                class="form-control inputStyle2 inputDisplayMedia p-0"
                style='max-height:2rem;'> 
            </li>
          </ul>
        </div>
      </div>
      <hr class='pt-4' style='opacity:0;'>

      <div class="alert alert-dismissible alert-info">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        Choose your <strong>Class</strong>, <strong>Race</strong> and <strong>Level</strong> first, then click <strong>'Calculate Ranks'</strong> button in order to calculate your ranks
      </div>

      <div v-if='errorMessageForRanks.length>1' class="alert alert-dismissible alert-danger">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <span>{{errorMessageForRanks}}</span>
      </div>
      <button @click.prevent='calculateRanks()' class="btn btn-info btn-sm">Calculate Ranks</button>

      <!-- SKILLS  -->
      <div class="row mt-4">
        <div class="col-lg-8 col-md-10 col-sm-11 col-12">
          <button v-if='hideSkills' class='btn btn-secondary btn-sm float-left mb-2' 
            data-toggle="tooltip" data-placement="top" title="Click on a Skill name to make it favorite" 
            @click.prevent='hideSkills=!hideSkills'>Show favorite
          </button>
          <button v-else class='btn btn-secondary btn-sm float-left mb-2'  
            data-toggle="tooltip" data-placement="top" title="Click on a Skill name to make it favorite" 
            @click.prevent='hideSkills=!hideSkills'>Show all
          </button>
                          <!-- SHOW UNSPENT POINTS FOR RANKS -->
          <div v-if='unspentRanks<0' class="float-right divDisplayMedia divSkillsPadding pl-2 spinnersOff">
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
          <div v-else class="float-right divDisplayMedia divSkillsPadding pl-2 spinnersOff">
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
      </div>

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
                <div v-if='!hideSkills' class="col-3 p-0 spinnersOff">              
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

                <div v-else class="col-3 p-0 spinnersOff">
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
                          class='input1 skillNameInput inputSkills '
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
                <div v-if='!isConditionForRanks' class="col-3 p-0 spinnersOn spinnersOff">
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
                  <div v-else>
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

                <div v-else class="col-3 p-0 spinnersOn spinnersOff">
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
                  <div v-else>
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
                <div v-if='!hideSkills' class="col-3 p-0 spinnersOn spinnersOff">
                    <div v-for='(skill,i) in skills' :key="i">
                      <div v-if='skills[i].isClicked' class='inputStyle5'>
                        <input class='input1 skillNameInput inputSkills'
                          type='number'
                          v-model='skill.value.miscModifier'>
                      </div>  
                    </div>
                </div>
                <div v-else class="col-3 p-0 spinnersOn spinnersOff">
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
                <div class="modal-footer">
                  <button @click='removeFeat(featData)' type="button" class="btn btn-danger" data-dismiss="modal">Remove</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
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
      <div class="row featsStyle mb-4" v-show='hideFeats'>
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
            <div class="modal-footer">
              <button @click='learnFeat(featData)' type="button" class="btn btn-success" data-dismiss="modal">Learn</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> <!-- END OF MODAL -->

      <div class='mt-5 mb-5'>
        <router-link v-bind:to="{ name:'Characters'}"><a href=""><button @click='redirectAtTop()' class='btn btn-info mr-2'>Go back</button></a></router-link>
        <button class='btn btn-primary'  @click.prevent="addCharInfo">Create</button>
      </div>  

    </form>
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
    name: 'NewCharacter',
    data(){
      return{
        show: true,
      }
    },
    mixins:[
      AbilityModifiersMethods,
      TemporaryAbilityModifiersMethods,
      ComputedProperties,DataProperties,
      MethodProperties,SkillPoints,
      Feats,SThrowsBAttack
    ],
    methods:{
        async addCharInfo () {
          // if(this.title === '' ? this.title = 'No title' : this.title=this.title)
          const result =  await PostsService.addCharInfo({
                user_id: this.user._id,
                title: this.title,
                charName: this.charName,
                player: this.player,
                class_: this.class_,
                level: this.level,
                race: this.race,
                alignment: this.alignment,
                deity: this.deity,
                size: this.size,
                age: this.age,
                gender: this.gender,
                height: this.height,
                weight: this.weight,
                eyes: this.eyes,
                hair: this.hair,
                skin: this.skin,
                spentPoints: this.spentPoints,
                unspentPoints: this.unspentPoints,
                abilityScore : this.abilityScore,
                abilityModifier : this.abilityModifier,
                temporaryScore : this.temporaryScore,
                temporaryModifier : this.temporaryModifier,

                savingThrowsModifier:this.savingThrowsModifier,
                skills : this.skills,
                learnedFeats : this.learnedFeats,

                classes : this.classes,
                isConditionForRanks : this.isConditionForRanks,
                errorMessageForRanks : this.errorMessageForRanks,
                unspentRanks : this.unspentRanks,
                checkForLevel1 : this.checkForLevel1,
                checkLevelForRanks : this.checkLevelForRanks,
                totalRanks : this.totalRanks,
                spentCrossRanks : this.spentCrossRanks,
                spentClassRanks : this.spentClassRanks,

                hp : this.hp,    
                currentHp : this.currentHp,    
                dmgTaken : this.dmgTaken,    
                nonLethal : this.nonLethal,    
                ac : this.ac,    
                armorBonus : this.armorBonus,    
                shieldBonus : this.shieldBonus,    
                sizeModifier : this.sizeModifier,    
                naturalArmor : this.naturalArmor,    
                deflectingModifier : this.deflectingModifier,    
                miscModifierAC : this.miscModifierAC,
                miscModifierInitiative : this.miscModifierInitiative,    
                miscModifierTouch : this.miscModifierTouch,    
                miscModifierFlatFooted : this.miscModifierFlatFooted,    
                miscModifierGrapple : this.miscModifierGrapple,    
                dmgReduction : this.dmgReduction,    
                initiative : this.initiative,    
                touch : this.touch,    
                flatFooted : this.flatFooted,    
                speed : this.speed,    
                baseAttackBonus : this.baseAttackBonus,    
                spellResistance : this.spellResistance,    
                grapple : this.grapple,
            })
             this.charInfo.push(result.data.info)
             window.location.reload();
             this.$router.push({ path: '/characters'});
             this.redirectAtTop();
        },
    }
}

</script>

<style scoped lang='scss'>
@import "@/assets/styles/main.scss";

</style>


