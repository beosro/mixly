'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');

var colorSet = 518;


Blockly.Blocks.Microduino_ir_remote_begin = {
  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
        .appendTitle(Blockly.ir_r_Init)
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_ir-s.jpg", 80, 32))
  this.appendValueInput("Pin", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.ColorLEDPin);
    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null); 
    this.setInputsInline(true);
    },
};


Blockly.Blocks.Microduino_ir_remote= {
  init: function() {
    this.setColour(colorSet);        
   	this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_ir-s.jpg", 80, 32))
	      .appendTitle(Blockly.LKL_MBOT_IR_REMOTE)
	      .appendTitle("#")
		    .appendTitle(new Blockly.FieldDropdown([["power", "0XFFA25D"], ["MENU", "0XFFE21D"],["TEST", "0XFF22DD"],["+", "0XFF02FD"],["back", "0XFFC23D"], ["<<", "0XFFE01F"],[">", "0XFFA857"],[">>", "0XFF906F"],["0", "0XFF6897"],["-", "0XFF9867"],["C", "0XFFB04F"],["1", "0XFF30CF"],["2", "0XFF18E7"],["3", "0XFF7A85"],["4", "0XFF10EF"],["5", "0XFF38C7"],["6", "0XFF5AA5"],["7", "0XFF42BD"],["8", "0XFF4AB5"],["9", "0XFF52AD"]]), "btn")
		    .appendTitle(Blockly.LKL_MBOT_IR_REMOTE_PRESSED);
    this.setOutput(true, Boolean);
  }
};

Blockly.Blocks.IRSend= {
  init: function() {
    var TYPE = [ ['NEC', 'NEC'],
                    ['Sony', 'Sony'],
                    ['RC5', 'RC5'],
                    ['RC6', 'RC6']];
    this.setColour(colorSet);        
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_ir-s.jpg", 80, 32))
        .appendTitle(Blockly.IRSnd)
        .appendTitle("#")
        .appendTitle(Blockly.IRSend_content)
        .appendTitle(new Blockly.FieldTextInput('0xa90'),'IRCONTENT')
        .appendTitle(Blockly.IRSend_byte)
        .appendTitle(new Blockly.FieldTextInput('12'),'IRLENGTH')
        .appendTitle(Blockly.IRTYPE)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
  }
};