// Generated from C:\Users\Ivonin\Code\Quokka\Grammar\Quokka\Quokka.g4 by ANTLR 4.6-SNAPSHOT
/* tslint:disable */


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { QuokkaVisitor } from './QuokkaVisitor';


export class QuokkaParser extends Parser {
	public static readonly SingleInstructionComment=1;
	public static readonly OutputInstructionStart=2;
	public static readonly ControlInstructionStart=3;
	public static readonly Fluff=4;
	public static readonly InstructionEnd=5;
	public static readonly If=6;
	public static readonly EndIf=7;
	public static readonly End=8;
	public static readonly Else=9;
	public static readonly ElseIf=10;
	public static readonly For=11;
	public static readonly In=12;
	public static readonly EndFor=13;
	public static readonly Null=14;
	public static readonly MemberAccessOperator=15;
	public static readonly Pipe=16;
	public static readonly CommaSeparator=17;
	public static readonly LeftParen=18;
	public static readonly RightParen=19;
	public static readonly And=20;
	public static readonly Or=21;
	public static readonly Not=22;
	public static readonly Set=23;
	public static readonly Equals=24;
	public static readonly NotEquals=25;
	public static readonly GreaterThan=26;
	public static readonly LessThan=27;
	public static readonly GreaterThanOrEquals=28;
	public static readonly LessThanOrEquals=29;
	public static readonly Plus=30;
	public static readonly Minus=31;
	public static readonly Multiply=32;
	public static readonly Divide=33;
	public static readonly Number=34;
	public static readonly Digit=35;
	public static readonly DoubleQuotedString=36;
	public static readonly SingleQuotedString=37;
	public static readonly Ampersand=38;
	public static readonly Identifier=39;
	public static readonly WhiteSpace=40;
	public static readonly RULE_template = 0;
	public static readonly RULE_templateBlock = 1;
	public static readonly RULE_staticBlock = 2;
	public static readonly RULE_dynamicBlock = 3;
	public static readonly RULE_constantBlock = 4;
	public static readonly RULE_commentBlock = 5;
	public static readonly RULE_ifStatement = 6;
	public static readonly RULE_ifCondition = 7;
	public static readonly RULE_elseCondition = 8;
	public static readonly RULE_elseIfCondition = 9;
	public static readonly RULE_ifInstruction = 10;
	public static readonly RULE_elseIfInstruction = 11;
	public static readonly RULE_elseInstruction = 12;
	public static readonly RULE_endIfInstruction = 13;
	public static readonly RULE_forStatement = 14;
	public static readonly RULE_forInstruction = 15;
	public static readonly RULE_iterationVariable = 16;
	public static readonly RULE_endForInstruction = 17;
	public static readonly RULE_assignmentBlock = 18;
	public static readonly RULE_outputBlock = 19;
	public static readonly RULE_filterChain = 20;
	public static readonly RULE_expression = 21;
	public static readonly RULE_variantValueExpression = 22;
	public static readonly RULE_rootVariantValueExpression = 23;
	public static readonly RULE_variableValueExpression = 24;
	public static readonly RULE_memberValueExpression = 25;
	public static readonly RULE_member = 26;
	public static readonly RULE_field = 27;
	public static readonly RULE_methodCall = 28;
	public static readonly RULE_functionCallExpression = 29;
	public static readonly RULE_argumentList = 30;
	public static readonly RULE_stringExpression = 31;
	public static readonly RULE_stringConstant = 32;
	public static readonly RULE_stringConcatenation = 33;
	public static readonly RULE_stringAtom = 34;
	public static readonly RULE_booleanExpression = 35;
	public static readonly RULE_andExpression = 36;
	public static readonly RULE_notExpression = 37;
	public static readonly RULE_parenthesizedBooleanExpression = 38;
	public static readonly RULE_stringComparisonExpression = 39;
	public static readonly RULE_nullComparisonExpression = 40;
	public static readonly RULE_arithmeticComparisonExpression = 41;
	public static readonly RULE_booleanAtom = 42;
	public static readonly RULE_arithmeticExpression = 43;
	public static readonly RULE_plusOperand = 44;
	public static readonly RULE_minusOperand = 45;
	public static readonly RULE_multiplicationExpression = 46;
	public static readonly RULE_multiplicationOperand = 47;
	public static readonly RULE_divisionOperand = 48;
	public static readonly RULE_negationExpression = 49;
	public static readonly RULE_parenthesizedArithmeticExpression = 50;
	public static readonly RULE_arithmeticAtom = 51;
	public static readonly ruleNames: string[] = [
		"template", "templateBlock", "staticBlock", "dynamicBlock", "constantBlock", 
		"commentBlock", "ifStatement", "ifCondition", "elseCondition", "elseIfCondition", 
		"ifInstruction", "elseIfInstruction", "elseInstruction", "endIfInstruction", 
		"forStatement", "forInstruction", "iterationVariable", "endForInstruction", 
		"assignmentBlock", "outputBlock", "filterChain", "expression", "variantValueExpression", 
		"rootVariantValueExpression", "variableValueExpression", "memberValueExpression", 
		"member", "field", "methodCall", "functionCallExpression", "argumentList", 
		"stringExpression", "stringConstant", "stringConcatenation", "stringAtom", 
		"booleanExpression", "andExpression", "notExpression", "parenthesizedBooleanExpression", 
		"stringComparisonExpression", "nullComparisonExpression", "arithmeticComparisonExpression", 
		"booleanAtom", "arithmeticExpression", "plusOperand", "minusOperand", 
		"multiplicationExpression", "multiplicationOperand", "divisionOperand", 
		"negationExpression", "parenthesizedArithmeticExpression", "arithmeticAtom"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, "'${'", "'@{'", undefined, "'}'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'.'", "'|'", "','", "'('", "')'", undefined, undefined, undefined, undefined, 
		"'='", "'!='", "'>'", "'<'", "'>='", "'<='", "'+'", "'-'", "'*'", "'/'", 
		undefined, undefined, undefined, undefined, "'&'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "SingleInstructionComment", "OutputInstructionStart", "ControlInstructionStart", 
		"Fluff", "InstructionEnd", "If", "EndIf", "End", "Else", "ElseIf", "For", 
		"In", "EndFor", "Null", "MemberAccessOperator", "Pipe", "CommaSeparator", 
		"LeftParen", "RightParen", "And", "Or", "Not", "Set", "Equals", "NotEquals", 
		"GreaterThan", "LessThan", "GreaterThanOrEquals", "LessThanOrEquals", 
		"Plus", "Minus", "Multiply", "Divide", "Number", "Digit", "DoubleQuotedString", 
		"SingleQuotedString", "Ampersand", "Identifier", "WhiteSpace"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(QuokkaParser._LITERAL_NAMES, QuokkaParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return QuokkaParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Quokka.g4"; }

	@Override
	public get ruleNames(): string[] { return QuokkaParser.ruleNames; }

	@Override
	public get serializedATN(): string { return QuokkaParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(QuokkaParser._ATN, this);
	}
	@RuleVersion(0)
	public template(): TemplateContext {
		let _localctx: TemplateContext = new TemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, QuokkaParser.RULE_template);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QuokkaParser.SingleInstructionComment) | (1 << QuokkaParser.OutputInstructionStart) | (1 << QuokkaParser.ControlInstructionStart) | (1 << QuokkaParser.Fluff))) !== 0)) {
				{
				this.state = 104;
				this.templateBlock();
				}
			}

			this.state = 107;
			this.match(QuokkaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public templateBlock(): TemplateBlockContext {
		let _localctx: TemplateBlockContext = new TemplateBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, QuokkaParser.RULE_templateBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 111;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case QuokkaParser.OutputInstructionStart:
					case QuokkaParser.Fluff:
						{
						this.state = 109;
						this.staticBlock();
						}
						break;
					case QuokkaParser.SingleInstructionComment:
					case QuokkaParser.ControlInstructionStart:
						{
						this.state = 110;
						this.dynamicBlock();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 113; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public staticBlock(): StaticBlockContext {
		let _localctx: StaticBlockContext = new StaticBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, QuokkaParser.RULE_staticBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 117;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case QuokkaParser.Fluff:
						{
						this.state = 115;
						this.constantBlock();
						}
						break;
					case QuokkaParser.OutputInstructionStart:
						{
						this.state = 116;
						this.outputBlock();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 119; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dynamicBlock(): DynamicBlockContext {
		let _localctx: DynamicBlockContext = new DynamicBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, QuokkaParser.RULE_dynamicBlock);
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,5,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.ifStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this.forStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 123;
				this.assignmentBlock();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 124;
				this.commentBlock();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantBlock(): ConstantBlockContext {
		let _localctx: ConstantBlockContext = new ConstantBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, QuokkaParser.RULE_constantBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 127;
					this.match(QuokkaParser.Fluff);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 130; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public commentBlock(): CommentBlockContext {
		let _localctx: CommentBlockContext = new CommentBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, QuokkaParser.RULE_commentBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(QuokkaParser.SingleInstructionComment);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, QuokkaParser.RULE_ifStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.ifCondition();
			this.state = 138;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,7,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 135;
					this.elseIfCondition();
					}
					} 
				}
				this.state = 140;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,7,this._ctx);
			}
			this.state = 142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
			case 1:
				{
				this.state = 141;
				this.elseCondition();
				}
				break;
			}
			this.state = 144;
			this.endIfInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifCondition(): IfConditionContext {
		let _localctx: IfConditionContext = new IfConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, QuokkaParser.RULE_ifCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.ifInstruction();
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
			case 1:
				{
				this.state = 147;
				this.templateBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseCondition(): ElseConditionContext {
		let _localctx: ElseConditionContext = new ElseConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, QuokkaParser.RULE_elseCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.elseInstruction();
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
			case 1:
				{
				this.state = 151;
				this.templateBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseIfCondition(): ElseIfConditionContext {
		let _localctx: ElseIfConditionContext = new ElseIfConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, QuokkaParser.RULE_elseIfCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.elseIfInstruction();
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,11,this._ctx) ) {
			case 1:
				{
				this.state = 155;
				this.templateBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifInstruction(): IfInstructionContext {
		let _localctx: IfInstructionContext = new IfInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, QuokkaParser.RULE_ifInstruction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(QuokkaParser.ControlInstructionStart);
			this.state = 159;
			this.match(QuokkaParser.If);
			this.state = 160;
			this.booleanExpression();
			this.state = 161;
			this.match(QuokkaParser.InstructionEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseIfInstruction(): ElseIfInstructionContext {
		let _localctx: ElseIfInstructionContext = new ElseIfInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, QuokkaParser.RULE_elseIfInstruction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(QuokkaParser.ControlInstructionStart);
			this.state = 164;
			this.match(QuokkaParser.ElseIf);
			this.state = 165;
			this.booleanExpression();
			this.state = 166;
			this.match(QuokkaParser.InstructionEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseInstruction(): ElseInstructionContext {
		let _localctx: ElseInstructionContext = new ElseInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, QuokkaParser.RULE_elseInstruction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(QuokkaParser.ControlInstructionStart);
			this.state = 169;
			this.match(QuokkaParser.Else);
			this.state = 170;
			this.match(QuokkaParser.InstructionEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public endIfInstruction(): EndIfInstructionContext {
		let _localctx: EndIfInstructionContext = new EndIfInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, QuokkaParser.RULE_endIfInstruction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(QuokkaParser.ControlInstructionStart);
			this.state = 173;
			this.match(QuokkaParser.EndIf);
			this.state = 174;
			this.match(QuokkaParser.InstructionEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, QuokkaParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.forInstruction();
			this.state = 178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
			case 1:
				{
				this.state = 177;
				this.templateBlock();
				}
				break;
			}
			this.state = 180;
			this.endForInstruction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forInstruction(): ForInstructionContext {
		let _localctx: ForInstructionContext = new ForInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, QuokkaParser.RULE_forInstruction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(QuokkaParser.ControlInstructionStart);
			this.state = 183;
			this.match(QuokkaParser.For);
			this.state = 184;
			this.iterationVariable();
			this.state = 185;
			this.match(QuokkaParser.In);
			this.state = 186;
			this.variantValueExpression();
			this.state = 187;
			this.match(QuokkaParser.InstructionEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public iterationVariable(): IterationVariableContext {
		let _localctx: IterationVariableContext = new IterationVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, QuokkaParser.RULE_iterationVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(QuokkaParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public endForInstruction(): EndForInstructionContext {
		let _localctx: EndForInstructionContext = new EndForInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, QuokkaParser.RULE_endForInstruction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(QuokkaParser.ControlInstructionStart);
			this.state = 192;
			this.match(QuokkaParser.EndFor);
			this.state = 193;
			this.match(QuokkaParser.InstructionEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentBlock(): AssignmentBlockContext {
		let _localctx: AssignmentBlockContext = new AssignmentBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, QuokkaParser.RULE_assignmentBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(QuokkaParser.ControlInstructionStart);
			this.state = 196;
			this.match(QuokkaParser.Set);
			this.state = 197;
			this.match(QuokkaParser.Identifier);
			this.state = 198;
			this.match(QuokkaParser.Equals);
			this.state = 199;
			this.expression();
			this.state = 200;
			this.match(QuokkaParser.InstructionEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public outputBlock(): OutputBlockContext {
		let _localctx: OutputBlockContext = new OutputBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, QuokkaParser.RULE_outputBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(QuokkaParser.OutputInstructionStart);
			this.state = 203;
			this.expression();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===QuokkaParser.Pipe) {
				{
				this.state = 204;
				this.filterChain();
				}
			}

			this.state = 207;
			this.match(QuokkaParser.InstructionEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public filterChain(): FilterChainContext {
		let _localctx: FilterChainContext = new FilterChainContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, QuokkaParser.RULE_filterChain);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 209;
				this.match(QuokkaParser.Pipe);
				this.state = 210;
				this.functionCallExpression();
				}
				}
				this.state = 213; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===QuokkaParser.Pipe );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, QuokkaParser.RULE_expression);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 215;
				this.variantValueExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this.stringExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 217;
				this.booleanExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 218;
				this.arithmeticExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variantValueExpression(): VariantValueExpressionContext {
		let _localctx: VariantValueExpressionContext = new VariantValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, QuokkaParser.RULE_variantValueExpression);
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.rootVariantValueExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.memberValueExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rootVariantValueExpression(): RootVariantValueExpressionContext {
		let _localctx: RootVariantValueExpressionContext = new RootVariantValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, QuokkaParser.RULE_rootVariantValueExpression);
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				this.variableValueExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 226;
				this.functionCallExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableValueExpression(): VariableValueExpressionContext {
		let _localctx: VariableValueExpressionContext = new VariableValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, QuokkaParser.RULE_variableValueExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(QuokkaParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public memberValueExpression(): MemberValueExpressionContext {
		let _localctx: MemberValueExpressionContext = new MemberValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, QuokkaParser.RULE_memberValueExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.variableValueExpression();
			this.state = 234; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 232;
				this.match(QuokkaParser.MemberAccessOperator);
				this.state = 233;
				this.member();
				}
				}
				this.state = 236; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===QuokkaParser.MemberAccessOperator );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, QuokkaParser.RULE_member);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,19,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 238;
				this.field();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 239;
				this.methodCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, QuokkaParser.RULE_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(QuokkaParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, QuokkaParser.RULE_methodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(QuokkaParser.Identifier);
			this.state = 245;
			this.argumentList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionCallExpression(): FunctionCallExpressionContext {
		let _localctx: FunctionCallExpressionContext = new FunctionCallExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, QuokkaParser.RULE_functionCallExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			_la = this._input.LA(1);
			if ( !(_la===QuokkaParser.If || _la===QuokkaParser.Identifier) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 248;
			this.argumentList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, QuokkaParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(QuokkaParser.LeftParen);
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QuokkaParser.If) | (1 << QuokkaParser.LeftParen) | (1 << QuokkaParser.Not) | (1 << QuokkaParser.Minus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (QuokkaParser.Number - 34)) | (1 << (QuokkaParser.DoubleQuotedString - 34)) | (1 << (QuokkaParser.SingleQuotedString - 34)) | (1 << (QuokkaParser.Identifier - 34)))) !== 0)) {
				{
				this.state = 251;
				this.expression();
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===QuokkaParser.CommaSeparator) {
					{
					{
					this.state = 252;
					this.match(QuokkaParser.CommaSeparator);
					this.state = 253;
					this.expression();
					}
					}
					this.state = 258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 261;
			this.match(QuokkaParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stringExpression(): StringExpressionContext {
		let _localctx: StringExpressionContext = new StringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, QuokkaParser.RULE_stringExpression);
		try {
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 263;
				this.stringConstant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 264;
				this.stringConcatenation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stringConstant(): StringConstantContext {
		let _localctx: StringConstantContext = new StringConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, QuokkaParser.RULE_stringConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			_la = this._input.LA(1);
			if ( !(_la===QuokkaParser.DoubleQuotedString || _la===QuokkaParser.SingleQuotedString) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stringConcatenation(): StringConcatenationContext {
		let _localctx: StringConcatenationContext = new StringConcatenationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, QuokkaParser.RULE_stringConcatenation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.stringAtom();
			this.state = 270;
			this.match(QuokkaParser.Ampersand);
			this.state = 271;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stringAtom(): StringAtomContext {
		let _localctx: StringAtomContext = new StringAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, QuokkaParser.RULE_stringAtom);
		try {
			this.state = 275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QuokkaParser.If:
			case QuokkaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 273;
				this.variantValueExpression();
				}
				break;
			case QuokkaParser.DoubleQuotedString:
			case QuokkaParser.SingleQuotedString:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				this.stringConstant();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public booleanExpression(): BooleanExpressionContext {
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, QuokkaParser.RULE_booleanExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.andExpression();
			this.state = 282;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 278;
					this.match(QuokkaParser.Or);
					this.state = 279;
					this.andExpression();
					}
					} 
				}
				this.state = 284;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, QuokkaParser.RULE_andExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.booleanAtom();
			this.state = 290;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,25,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 286;
					this.match(QuokkaParser.And);
					this.state = 287;
					this.booleanAtom();
					}
					} 
				}
				this.state = 292;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,25,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public notExpression(): NotExpressionContext {
		let _localctx: NotExpressionContext = new NotExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, QuokkaParser.RULE_notExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(QuokkaParser.Not);
			this.state = 294;
			this.booleanAtom();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parenthesizedBooleanExpression(): ParenthesizedBooleanExpressionContext {
		let _localctx: ParenthesizedBooleanExpressionContext = new ParenthesizedBooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, QuokkaParser.RULE_parenthesizedBooleanExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(QuokkaParser.LeftParen);
			this.state = 297;
			this.booleanExpression();
			this.state = 298;
			this.match(QuokkaParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stringComparisonExpression(): StringComparisonExpressionContext {
		let _localctx: StringComparisonExpressionContext = new StringComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, QuokkaParser.RULE_stringComparisonExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.variantValueExpression();
			this.state = 301;
			_la = this._input.LA(1);
			if ( !(_la===QuokkaParser.Equals || _la===QuokkaParser.NotEquals) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 302;
			this.stringExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nullComparisonExpression(): NullComparisonExpressionContext {
		let _localctx: NullComparisonExpressionContext = new NullComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, QuokkaParser.RULE_nullComparisonExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.variantValueExpression();
			this.state = 305;
			_la = this._input.LA(1);
			if ( !(_la===QuokkaParser.Equals || _la===QuokkaParser.NotEquals) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 306;
			this.match(QuokkaParser.Null);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arithmeticComparisonExpression(): ArithmeticComparisonExpressionContext {
		let _localctx: ArithmeticComparisonExpressionContext = new ArithmeticComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, QuokkaParser.RULE_arithmeticComparisonExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.arithmeticExpression();
			this.state = 309;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QuokkaParser.Equals) | (1 << QuokkaParser.NotEquals) | (1 << QuokkaParser.GreaterThan) | (1 << QuokkaParser.LessThan) | (1 << QuokkaParser.GreaterThanOrEquals) | (1 << QuokkaParser.LessThanOrEquals))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 310;
			this.arithmeticExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public booleanAtom(): BooleanAtomContext {
		let _localctx: BooleanAtomContext = new BooleanAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, QuokkaParser.RULE_booleanAtom);
		try {
			this.state = 318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 312;
				this.variantValueExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 313;
				this.notExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this.parenthesizedBooleanExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 315;
				this.stringComparisonExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 316;
				this.nullComparisonExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 317;
				this.arithmeticComparisonExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arithmeticExpression(): ArithmeticExpressionContext {
		let _localctx: ArithmeticExpressionContext = new ArithmeticExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, QuokkaParser.RULE_arithmeticExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.multiplicationExpression();
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===QuokkaParser.Plus || _la===QuokkaParser.Minus) {
				{
				this.state = 323;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case QuokkaParser.Plus:
					{
					this.state = 321;
					this.plusOperand();
					}
					break;
				case QuokkaParser.Minus:
					{
					this.state = 322;
					this.minusOperand();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public plusOperand(): PlusOperandContext {
		let _localctx: PlusOperandContext = new PlusOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, QuokkaParser.RULE_plusOperand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(QuokkaParser.Plus);
			this.state = 329;
			this.multiplicationExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public minusOperand(): MinusOperandContext {
		let _localctx: MinusOperandContext = new MinusOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, QuokkaParser.RULE_minusOperand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(QuokkaParser.Minus);
			this.state = 332;
			this.multiplicationExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public multiplicationExpression(): MultiplicationExpressionContext {
		let _localctx: MultiplicationExpressionContext = new MultiplicationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, QuokkaParser.RULE_multiplicationExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.arithmeticAtom();
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===QuokkaParser.Multiply || _la===QuokkaParser.Divide) {
				{
				this.state = 337;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case QuokkaParser.Multiply:
					{
					this.state = 335;
					this.multiplicationOperand();
					}
					break;
				case QuokkaParser.Divide:
					{
					this.state = 336;
					this.divisionOperand();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public multiplicationOperand(): MultiplicationOperandContext {
		let _localctx: MultiplicationOperandContext = new MultiplicationOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, QuokkaParser.RULE_multiplicationOperand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.match(QuokkaParser.Multiply);
			this.state = 343;
			this.arithmeticAtom();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public divisionOperand(): DivisionOperandContext {
		let _localctx: DivisionOperandContext = new DivisionOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, QuokkaParser.RULE_divisionOperand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(QuokkaParser.Divide);
			this.state = 346;
			this.arithmeticAtom();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public negationExpression(): NegationExpressionContext {
		let _localctx: NegationExpressionContext = new NegationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, QuokkaParser.RULE_negationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(QuokkaParser.Minus);
			this.state = 349;
			this.arithmeticAtom();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parenthesizedArithmeticExpression(): ParenthesizedArithmeticExpressionContext {
		let _localctx: ParenthesizedArithmeticExpressionContext = new ParenthesizedArithmeticExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, QuokkaParser.RULE_parenthesizedArithmeticExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(QuokkaParser.LeftParen);
			this.state = 352;
			this.arithmeticExpression();
			this.state = 353;
			this.match(QuokkaParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arithmeticAtom(): ArithmeticAtomContext {
		let _localctx: ArithmeticAtomContext = new ArithmeticAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, QuokkaParser.RULE_arithmeticAtom);
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case QuokkaParser.Number:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 355;
				this.match(QuokkaParser.Number);
				}
				break;
			case QuokkaParser.If:
			case QuokkaParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 356;
				this.variantValueExpression();
				}
				break;
			case QuokkaParser.Minus:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 357;
				this.negationExpression();
				}
				break;
			case QuokkaParser.LeftParen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 358;
				this.parenthesizedArithmeticExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03*\u016C\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x03\x02\x05\x02l\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x06"+
		"\x03r\n\x03\r\x03\x0E\x03s\x03\x04\x03\x04\x06\x04x\n\x04\r\x04\x0E\x04"+
		"y\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x80\n\x05\x03\x06\x06\x06\x83"+
		"\n\x06\r\x06\x0E\x06\x84\x03\x07\x03\x07\x03\b\x03\b\x07\b\x8B\n\b\f\b"+
		"\x0E\b\x8E\v\b\x03\b\x05\b\x91\n\b\x03\b\x03\b\x03\t\x03\t\x05\t\x97\n"+
		"\t\x03\n\x03\n\x05\n\x9B\n\n\x03\v\x03\v\x05\v\x9F\n\v\x03\f\x03\f\x03"+
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03"+
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\xB5\n\x10"+
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11"+
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x05\x15\xD0\n"+
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x06\x16\xD6\n\x16\r\x16\x0E\x16\xD7"+
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xDE\n\x17\x03\x18\x03\x18\x05"+
		"\x18\xE2\n\x18\x03\x19\x03\x19\x05\x19\xE6\n\x19\x03\x1A\x03\x1A\x03\x1B"+
		"\x03\x1B\x03\x1B\x06\x1B\xED\n\x1B\r\x1B\x0E\x1B\xEE\x03\x1C\x03\x1C\x05"+
		"\x1C\xF3\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F"+
		"\x03\x1F\x03 \x03 \x03 \x03 \x07 \u0101\n \f \x0E \u0104\v \x05 \u0106"+
		"\n \x03 \x03 \x03!\x03!\x05!\u010C\n!\x03\"\x03\"\x03#\x03#\x03#\x03#"+
		"\x03$\x03$\x05$\u0116\n$\x03%\x03%\x03%\x07%\u011B\n%\f%\x0E%\u011E\v"+
		"%\x03&\x03&\x03&\x07&\u0123\n&\f&\x0E&\u0126\v&\x03\'\x03\'\x03\'\x03"+
		"(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03"+
		"+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0141\n,\x03-\x03-\x03-\x07"+
		"-\u0146\n-\f-\x0E-\u0149\v-\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030\x03"+
		"0\x070\u0154\n0\f0\x0E0\u0157\v0\x031\x031\x031\x032\x032\x032\x033\x03"+
		"3\x033\x034\x034\x034\x034\x035\x035\x035\x035\x055\u016A\n5\x035\x02"+
		"\x02\x026\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12"+
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&"+
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02"+
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02"+
		"^\x02`\x02b\x02d\x02f\x02h\x02\x02\x06\x04\x02\b\b))\x03\x02&\'\x03\x02"+
		"\x1A\x1B\x03\x02\x1A\x1F\u0161\x02k\x03\x02\x02\x02\x04q\x03\x02\x02\x02"+
		"\x06w\x03\x02\x02\x02\b\x7F\x03\x02\x02\x02\n\x82\x03\x02\x02\x02\f\x86"+
		"\x03\x02\x02\x02\x0E\x88\x03\x02\x02\x02\x10\x94\x03\x02\x02\x02\x12\x98"+
		"\x03\x02\x02\x02\x14\x9C\x03\x02\x02\x02\x16\xA0\x03\x02\x02\x02\x18\xA5"+
		"\x03\x02\x02\x02\x1A\xAA\x03\x02\x02\x02\x1C\xAE\x03\x02\x02\x02\x1E\xB2"+
		"\x03\x02\x02\x02 \xB8\x03\x02\x02\x02\"\xBF\x03\x02\x02\x02$\xC1\x03\x02"+
		"\x02\x02&\xC5\x03\x02\x02\x02(\xCC\x03\x02\x02\x02*\xD5\x03\x02\x02\x02"+
		",\xDD\x03\x02\x02\x02.\xE1\x03\x02\x02\x020\xE5\x03\x02\x02\x022\xE7\x03"+
		"\x02\x02\x024\xE9\x03\x02\x02\x026\xF2\x03\x02\x02\x028\xF4\x03\x02\x02"+
		"\x02:\xF6\x03\x02\x02\x02<\xF9\x03\x02\x02\x02>\xFC\x03\x02\x02\x02@\u010B"+
		"\x03\x02\x02\x02B\u010D\x03\x02\x02\x02D\u010F\x03\x02\x02\x02F\u0115"+
		"\x03\x02\x02\x02H\u0117\x03\x02\x02\x02J\u011F\x03\x02\x02\x02L\u0127"+
		"\x03\x02\x02\x02N\u012A\x03\x02\x02\x02P\u012E\x03\x02\x02\x02R\u0132"+
		"\x03\x02\x02\x02T\u0136\x03\x02\x02\x02V\u0140\x03\x02\x02\x02X\u0142"+
		"\x03\x02\x02\x02Z\u014A\x03\x02\x02\x02\\\u014D\x03\x02\x02\x02^\u0150"+
		"\x03\x02\x02\x02`\u0158\x03\x02\x02\x02b\u015B\x03\x02\x02\x02d\u015E"+
		"\x03\x02\x02\x02f\u0161\x03\x02\x02\x02h\u0169\x03\x02\x02\x02jl\x05\x04"+
		"\x03\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x07\x02"+
		"\x02\x03n\x03\x03\x02\x02\x02or\x05\x06\x04\x02pr\x05\b\x05\x02qo\x03"+
		"\x02\x02\x02qp\x03\x02\x02\x02rs\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03"+
		"\x02\x02\x02t\x05\x03\x02\x02\x02ux\x05\n\x06\x02vx\x05(\x15\x02wu\x03"+
		"\x02\x02\x02wv\x03\x02\x02\x02xy\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03"+
		"\x02\x02\x02z\x07\x03\x02\x02\x02{\x80\x05\x0E\b\x02|\x80\x05\x1E\x10"+
		"\x02}\x80\x05&\x14\x02~\x80\x05\f\x07\x02\x7F{\x03\x02\x02\x02\x7F|\x03"+
		"\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\t\x03\x02\x02"+
		"\x02\x81\x83\x07\x06\x02\x02\x82\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02"+
		"\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\v\x03\x02\x02"+
		"\x02\x86\x87\x07\x03\x02\x02\x87\r\x03\x02\x02\x02\x88\x8C\x05\x10\t\x02"+
		"\x89\x8B\x05\x14\v\x02\x8A\x89\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02"+
		"\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02"+
		"\x8E\x8C\x03\x02\x02\x02\x8F\x91\x05\x12\n\x02\x90\x8F\x03\x02\x02\x02"+
		"\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x05\x1C\x0F\x02"+
		"\x93\x0F\x03\x02\x02\x02\x94\x96\x05\x16\f\x02\x95\x97\x05\x04\x03\x02"+
		"\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x11\x03\x02\x02\x02"+
		"\x98\x9A\x05\x1A\x0E\x02\x99\x9B\x05\x04\x03\x02\x9A\x99\x03\x02\x02\x02"+
		"\x9A\x9B\x03\x02\x02\x02\x9B\x13\x03\x02\x02\x02\x9C\x9E\x05\x18\r\x02"+
		"\x9D\x9F\x05\x04\x03\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02"+
		"\x9F\x15\x03\x02\x02\x02\xA0\xA1\x07\x05\x02\x02\xA1\xA2\x07\b\x02\x02"+
		"\xA2\xA3\x05H%\x02\xA3\xA4\x07\x07\x02\x02\xA4\x17\x03\x02\x02\x02\xA5"+
		"\xA6\x07\x05\x02\x02\xA6\xA7\x07\f\x02\x02\xA7\xA8\x05H%\x02\xA8\xA9\x07"+
		"\x07\x02\x02\xA9\x19\x03\x02\x02\x02\xAA\xAB\x07\x05\x02\x02\xAB\xAC\x07"+
		"\v\x02\x02\xAC\xAD\x07\x07\x02\x02\xAD\x1B\x03\x02\x02\x02\xAE\xAF\x07"+
		"\x05\x02\x02\xAF\xB0\x07\t\x02\x02\xB0\xB1\x07\x07\x02\x02\xB1\x1D\x03"+
		"\x02\x02\x02\xB2\xB4\x05 \x11\x02\xB3\xB5\x05\x04\x03\x02\xB4\xB3\x03"+
		"\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x05"+
		"$\x13\x02\xB7\x1F\x03\x02\x02\x02\xB8\xB9\x07\x05\x02\x02\xB9\xBA\x07"+
		"\r\x02\x02\xBA\xBB\x05\"\x12\x02\xBB\xBC\x07\x0E\x02\x02\xBC\xBD\x05."+
		"\x18\x02\xBD\xBE\x07\x07\x02\x02\xBE!\x03\x02\x02\x02\xBF\xC0\x07)\x02"+
		"\x02\xC0#\x03\x02\x02\x02\xC1\xC2\x07\x05\x02\x02\xC2\xC3\x07\x0F\x02"+
		"\x02\xC3\xC4\x07\x07\x02\x02\xC4%\x03\x02\x02\x02\xC5\xC6\x07\x05\x02"+
		"\x02\xC6\xC7\x07\x19\x02\x02\xC7\xC8\x07)\x02\x02\xC8\xC9\x07\x1A\x02"+
		"\x02\xC9\xCA\x05,\x17\x02\xCA\xCB\x07\x07\x02\x02\xCB\'\x03\x02\x02\x02"+
		"\xCC\xCD\x07\x04\x02\x02\xCD\xCF\x05,\x17\x02\xCE\xD0\x05*\x16\x02\xCF"+
		"\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1"+
		"\xD2\x07\x07\x02\x02\xD2)\x03\x02\x02\x02\xD3\xD4\x07\x12\x02\x02\xD4"+
		"\xD6\x05<\x1F\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7"+
		"\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8+\x03\x02\x02\x02\xD9"+
		"\xDE\x05.\x18\x02\xDA\xDE\x05@!\x02\xDB\xDE\x05H%\x02\xDC\xDE\x05X-\x02"+
		"\xDD\xD9\x03\x02\x02\x02\xDD\xDA\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02"+
		"\xDD\xDC\x03\x02\x02\x02\xDE-\x03\x02\x02\x02\xDF\xE2\x050\x19\x02\xE0"+
		"\xE2\x054\x1B\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2"+
		"/\x03\x02\x02\x02\xE3\xE6\x052\x1A\x02\xE4\xE6\x05<\x1F\x02\xE5\xE3\x03"+
		"\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE61\x03\x02\x02\x02\xE7\xE8\x07"+
		")\x02\x02\xE83\x03\x02\x02\x02\xE9\xEC\x052\x1A\x02\xEA\xEB\x07\x11\x02"+
		"\x02\xEB\xED\x056\x1C\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x03\x02\x02"+
		"\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF5\x03\x02\x02"+
		"\x02\xF0\xF3\x058\x1D\x02\xF1\xF3\x05:\x1E\x02\xF2\xF0\x03\x02\x02\x02"+
		"\xF2\xF1\x03\x02\x02\x02\xF37\x03\x02\x02\x02\xF4\xF5\x07)\x02\x02\xF5"+
		"9\x03\x02\x02\x02\xF6\xF7\x07)\x02\x02\xF7\xF8\x05> \x02\xF8;\x03\x02"+
		"\x02\x02\xF9\xFA\t\x02\x02\x02\xFA\xFB\x05> \x02\xFB=\x03\x02\x02\x02"+
		"\xFC\u0105\x07\x14\x02\x02\xFD\u0102\x05,\x17\x02\xFE\xFF\x07\x13\x02"+
		"\x02\xFF\u0101\x05,\x17\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0104\x03"+
		"\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103"+
		"\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105\xFD\x03\x02\x02"+
		"\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108"+
		"\x07\x15\x02\x02\u0108?\x03\x02\x02\x02\u0109\u010C\x05B\"\x02\u010A\u010C"+
		"\x05D#\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C"+
		"A\x03\x02\x02\x02\u010D\u010E\t\x03\x02\x02\u010EC\x03\x02\x02\x02\u010F"+
		"\u0110\x05F$\x02\u0110\u0111\x07(\x02\x02\u0111\u0112\x05,\x17\x02\u0112"+
		"E\x03\x02\x02\x02\u0113\u0116\x05.\x18\x02\u0114\u0116\x05B\"\x02\u0115"+
		"\u0113\x03\x02\x02\x02\u0115\u0114\x03\x02\x02\x02\u0116G\x03\x02\x02"+
		"\x02\u0117\u011C\x05J&\x02\u0118\u0119\x07\x17\x02\x02\u0119\u011B\x05"+
		"J&\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A"+
		"\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011DI\x03\x02\x02\x02\u011E"+
		"\u011C\x03\x02\x02\x02\u011F\u0124\x05V,\x02\u0120\u0121\x07\x16\x02\x02"+
		"\u0121\u0123\x05V,\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0126\x03\x02"+
		"\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125"+
		"K\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127\u0128\x07\x18\x02"+
		"\x02\u0128\u0129\x05V,\x02\u0129M\x03\x02\x02\x02\u012A\u012B\x07\x14"+
		"\x02\x02\u012B\u012C\x05H%\x02\u012C\u012D\x07\x15\x02\x02\u012DO\x03"+
		"\x02\x02\x02\u012E\u012F\x05.\x18\x02\u012F\u0130\t\x04\x02\x02\u0130"+
		"\u0131\x05@!\x02\u0131Q\x03\x02\x02\x02\u0132\u0133\x05.\x18\x02\u0133"+
		"\u0134\t\x04\x02\x02\u0134\u0135\x07\x10\x02\x02\u0135S\x03\x02\x02\x02"+
		"\u0136\u0137\x05X-\x02\u0137\u0138\t\x05\x02\x02\u0138\u0139\x05X-\x02"+
		"\u0139U\x03\x02\x02\x02\u013A\u0141\x05.\x18\x02\u013B\u0141\x05L\'\x02"+
		"\u013C\u0141\x05N(\x02\u013D\u0141\x05P)\x02\u013E\u0141\x05R*\x02\u013F"+
		"\u0141\x05T+\x02\u0140\u013A\x03\x02\x02\x02\u0140\u013B\x03\x02\x02\x02"+
		"\u0140\u013C\x03\x02\x02\x02\u0140\u013D\x03\x02\x02\x02\u0140\u013E\x03"+
		"\x02\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141W\x03\x02\x02\x02\u0142"+
		"\u0147\x05^0\x02\u0143\u0146\x05Z.\x02\u0144\u0146\x05\\/\x02\u0145\u0143"+
		"\x03\x02\x02\x02\u0145\u0144\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02"+
		"\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148Y\x03\x02"+
		"\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014B\x07 \x02\x02\u014B\u014C"+
		"\x05^0\x02\u014C[\x03\x02\x02\x02\u014D\u014E\x07!\x02\x02\u014E\u014F"+
		"\x05^0\x02\u014F]\x03\x02\x02\x02\u0150\u0155\x05h5\x02\u0151\u0154\x05"+
		"`1\x02\u0152\u0154\x05b2\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0152\x03"+
		"\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155"+
		"\u0156\x03\x02\x02\x02\u0156_\x03\x02\x02\x02\u0157\u0155\x03\x02\x02"+
		"\x02\u0158\u0159\x07\"\x02\x02\u0159\u015A\x05h5\x02\u015Aa\x03\x02\x02"+
		"\x02\u015B\u015C\x07#\x02\x02\u015C\u015D\x05h5\x02\u015Dc\x03\x02\x02"+
		"\x02\u015E\u015F\x07!\x02\x02\u015F\u0160\x05h5\x02\u0160e\x03\x02\x02"+
		"\x02\u0161\u0162\x07\x14\x02\x02\u0162\u0163\x05X-\x02\u0163\u0164\x07"+
		"\x15\x02\x02\u0164g\x03\x02\x02\x02\u0165\u016A\x07$\x02\x02\u0166\u016A"+
		"\x05.\x18\x02\u0167\u016A\x05d3\x02\u0168\u016A\x05f4\x02\u0169\u0165"+
		"\x03\x02\x02\x02\u0169\u0166\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02"+
		"\u0169\u0168\x03\x02\x02\x02\u016Ai\x03\x02\x02\x02\"kqswy\x7F\x84\x8C"+
		"\x90\x96\x9A\x9E\xB4\xCF\xD7\xDD\xE1\xE5\xEE\xF2\u0102\u0105\u010B\u0115"+
		"\u011C\u0124\u0140\u0145\u0147\u0153\u0155\u0169";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!QuokkaParser.__ATN) {
			QuokkaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(QuokkaParser._serializedATN));
		}

		return QuokkaParser.__ATN;
	}

}

export class TemplateContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(QuokkaParser.EOF, 0); }
	public templateBlock(): TemplateBlockContext | undefined {
		return this.tryGetRuleContext(0, TemplateBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_template; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitTemplate) return visitor.visitTemplate(this);
		else return visitor.visitChildren(this);
	}
}


export class TemplateBlockContext extends ParserRuleContext {
	public staticBlock(): StaticBlockContext[];
	public staticBlock(i: number): StaticBlockContext;
	public staticBlock(i?: number): StaticBlockContext | StaticBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StaticBlockContext);
		} else {
			return this.getRuleContext(i, StaticBlockContext);
		}
	}
	public dynamicBlock(): DynamicBlockContext[];
	public dynamicBlock(i: number): DynamicBlockContext;
	public dynamicBlock(i?: number): DynamicBlockContext | DynamicBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DynamicBlockContext);
		} else {
			return this.getRuleContext(i, DynamicBlockContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_templateBlock; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitTemplateBlock) return visitor.visitTemplateBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class StaticBlockContext extends ParserRuleContext {
	public constantBlock(): ConstantBlockContext[];
	public constantBlock(i: number): ConstantBlockContext;
	public constantBlock(i?: number): ConstantBlockContext | ConstantBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantBlockContext);
		} else {
			return this.getRuleContext(i, ConstantBlockContext);
		}
	}
	public outputBlock(): OutputBlockContext[];
	public outputBlock(i: number): OutputBlockContext;
	public outputBlock(i?: number): OutputBlockContext | OutputBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OutputBlockContext);
		} else {
			return this.getRuleContext(i, OutputBlockContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_staticBlock; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitStaticBlock) return visitor.visitStaticBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class DynamicBlockContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public assignmentBlock(): AssignmentBlockContext | undefined {
		return this.tryGetRuleContext(0, AssignmentBlockContext);
	}
	public commentBlock(): CommentBlockContext | undefined {
		return this.tryGetRuleContext(0, CommentBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_dynamicBlock; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitDynamicBlock) return visitor.visitDynamicBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantBlockContext extends ParserRuleContext {
	public Fluff(): TerminalNode[];
	public Fluff(i: number): TerminalNode;
	public Fluff(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QuokkaParser.Fluff);
		} else {
			return this.getToken(QuokkaParser.Fluff, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_constantBlock; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitConstantBlock) return visitor.visitConstantBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class CommentBlockContext extends ParserRuleContext {
	public SingleInstructionComment(): TerminalNode { return this.getToken(QuokkaParser.SingleInstructionComment, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_commentBlock; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitCommentBlock) return visitor.visitCommentBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class IfStatementContext extends ParserRuleContext {
	public ifCondition(): IfConditionContext {
		return this.getRuleContext(0, IfConditionContext);
	}
	public endIfInstruction(): EndIfInstructionContext {
		return this.getRuleContext(0, EndIfInstructionContext);
	}
	public elseIfCondition(): ElseIfConditionContext[];
	public elseIfCondition(i: number): ElseIfConditionContext;
	public elseIfCondition(i?: number): ElseIfConditionContext | ElseIfConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfConditionContext);
		} else {
			return this.getRuleContext(i, ElseIfConditionContext);
		}
	}
	public elseCondition(): ElseConditionContext | undefined {
		return this.tryGetRuleContext(0, ElseConditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_ifStatement; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitIfStatement) return visitor.visitIfStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class IfConditionContext extends ParserRuleContext {
	public ifInstruction(): IfInstructionContext {
		return this.getRuleContext(0, IfInstructionContext);
	}
	public templateBlock(): TemplateBlockContext | undefined {
		return this.tryGetRuleContext(0, TemplateBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_ifCondition; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitIfCondition) return visitor.visitIfCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseConditionContext extends ParserRuleContext {
	public elseInstruction(): ElseInstructionContext {
		return this.getRuleContext(0, ElseInstructionContext);
	}
	public templateBlock(): TemplateBlockContext | undefined {
		return this.tryGetRuleContext(0, TemplateBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_elseCondition; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitElseCondition) return visitor.visitElseCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseIfConditionContext extends ParserRuleContext {
	public elseIfInstruction(): ElseIfInstructionContext {
		return this.getRuleContext(0, ElseIfInstructionContext);
	}
	public templateBlock(): TemplateBlockContext | undefined {
		return this.tryGetRuleContext(0, TemplateBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_elseIfCondition; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitElseIfCondition) return visitor.visitElseIfCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class IfInstructionContext extends ParserRuleContext {
	public ControlInstructionStart(): TerminalNode { return this.getToken(QuokkaParser.ControlInstructionStart, 0); }
	public If(): TerminalNode { return this.getToken(QuokkaParser.If, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public InstructionEnd(): TerminalNode { return this.getToken(QuokkaParser.InstructionEnd, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_ifInstruction; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitIfInstruction) return visitor.visitIfInstruction(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseIfInstructionContext extends ParserRuleContext {
	public ControlInstructionStart(): TerminalNode { return this.getToken(QuokkaParser.ControlInstructionStart, 0); }
	public ElseIf(): TerminalNode { return this.getToken(QuokkaParser.ElseIf, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public InstructionEnd(): TerminalNode { return this.getToken(QuokkaParser.InstructionEnd, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_elseIfInstruction; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitElseIfInstruction) return visitor.visitElseIfInstruction(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseInstructionContext extends ParserRuleContext {
	public ControlInstructionStart(): TerminalNode { return this.getToken(QuokkaParser.ControlInstructionStart, 0); }
	public Else(): TerminalNode { return this.getToken(QuokkaParser.Else, 0); }
	public InstructionEnd(): TerminalNode { return this.getToken(QuokkaParser.InstructionEnd, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_elseInstruction; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitElseInstruction) return visitor.visitElseInstruction(this);
		else return visitor.visitChildren(this);
	}
}


export class EndIfInstructionContext extends ParserRuleContext {
	public ControlInstructionStart(): TerminalNode { return this.getToken(QuokkaParser.ControlInstructionStart, 0); }
	public EndIf(): TerminalNode { return this.getToken(QuokkaParser.EndIf, 0); }
	public InstructionEnd(): TerminalNode { return this.getToken(QuokkaParser.InstructionEnd, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_endIfInstruction; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitEndIfInstruction) return visitor.visitEndIfInstruction(this);
		else return visitor.visitChildren(this);
	}
}


export class ForStatementContext extends ParserRuleContext {
	public forInstruction(): ForInstructionContext {
		return this.getRuleContext(0, ForInstructionContext);
	}
	public endForInstruction(): EndForInstructionContext {
		return this.getRuleContext(0, EndForInstructionContext);
	}
	public templateBlock(): TemplateBlockContext | undefined {
		return this.tryGetRuleContext(0, TemplateBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_forStatement; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitForStatement) return visitor.visitForStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ForInstructionContext extends ParserRuleContext {
	public ControlInstructionStart(): TerminalNode { return this.getToken(QuokkaParser.ControlInstructionStart, 0); }
	public For(): TerminalNode { return this.getToken(QuokkaParser.For, 0); }
	public iterationVariable(): IterationVariableContext {
		return this.getRuleContext(0, IterationVariableContext);
	}
	public In(): TerminalNode { return this.getToken(QuokkaParser.In, 0); }
	public variantValueExpression(): VariantValueExpressionContext {
		return this.getRuleContext(0, VariantValueExpressionContext);
	}
	public InstructionEnd(): TerminalNode { return this.getToken(QuokkaParser.InstructionEnd, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_forInstruction; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitForInstruction) return visitor.visitForInstruction(this);
		else return visitor.visitChildren(this);
	}
}


export class IterationVariableContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(QuokkaParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_iterationVariable; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitIterationVariable) return visitor.visitIterationVariable(this);
		else return visitor.visitChildren(this);
	}
}


export class EndForInstructionContext extends ParserRuleContext {
	public ControlInstructionStart(): TerminalNode { return this.getToken(QuokkaParser.ControlInstructionStart, 0); }
	public EndFor(): TerminalNode { return this.getToken(QuokkaParser.EndFor, 0); }
	public InstructionEnd(): TerminalNode { return this.getToken(QuokkaParser.InstructionEnd, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_endForInstruction; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitEndForInstruction) return visitor.visitEndForInstruction(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentBlockContext extends ParserRuleContext {
	public ControlInstructionStart(): TerminalNode { return this.getToken(QuokkaParser.ControlInstructionStart, 0); }
	public Set(): TerminalNode { return this.getToken(QuokkaParser.Set, 0); }
	public Identifier(): TerminalNode { return this.getToken(QuokkaParser.Identifier, 0); }
	public Equals(): TerminalNode { return this.getToken(QuokkaParser.Equals, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public InstructionEnd(): TerminalNode { return this.getToken(QuokkaParser.InstructionEnd, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_assignmentBlock; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitAssignmentBlock) return visitor.visitAssignmentBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class OutputBlockContext extends ParserRuleContext {
	public OutputInstructionStart(): TerminalNode { return this.getToken(QuokkaParser.OutputInstructionStart, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public InstructionEnd(): TerminalNode { return this.getToken(QuokkaParser.InstructionEnd, 0); }
	public filterChain(): FilterChainContext | undefined {
		return this.tryGetRuleContext(0, FilterChainContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_outputBlock; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitOutputBlock) return visitor.visitOutputBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class FilterChainContext extends ParserRuleContext {
	public Pipe(): TerminalNode[];
	public Pipe(i: number): TerminalNode;
	public Pipe(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QuokkaParser.Pipe);
		} else {
			return this.getToken(QuokkaParser.Pipe, i);
		}
	}
	public functionCallExpression(): FunctionCallExpressionContext[];
	public functionCallExpression(i: number): FunctionCallExpressionContext;
	public functionCallExpression(i?: number): FunctionCallExpressionContext | FunctionCallExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionCallExpressionContext);
		} else {
			return this.getRuleContext(i, FunctionCallExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_filterChain; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitFilterChain) return visitor.visitFilterChain(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public variantValueExpression(): VariantValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, VariantValueExpressionContext);
	}
	public stringExpression(): StringExpressionContext | undefined {
		return this.tryGetRuleContext(0, StringExpressionContext);
	}
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public arithmeticExpression(): ArithmeticExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_expression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class VariantValueExpressionContext extends ParserRuleContext {
	public rootVariantValueExpression(): RootVariantValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, RootVariantValueExpressionContext);
	}
	public memberValueExpression(): MemberValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, MemberValueExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_variantValueExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitVariantValueExpression) return visitor.visitVariantValueExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class RootVariantValueExpressionContext extends ParserRuleContext {
	public variableValueExpression(): VariableValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, VariableValueExpressionContext);
	}
	public functionCallExpression(): FunctionCallExpressionContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_rootVariantValueExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitRootVariantValueExpression) return visitor.visitRootVariantValueExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableValueExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(QuokkaParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_variableValueExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitVariableValueExpression) return visitor.visitVariableValueExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class MemberValueExpressionContext extends ParserRuleContext {
	public variableValueExpression(): VariableValueExpressionContext {
		return this.getRuleContext(0, VariableValueExpressionContext);
	}
	public MemberAccessOperator(): TerminalNode[];
	public MemberAccessOperator(i: number): TerminalNode;
	public MemberAccessOperator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QuokkaParser.MemberAccessOperator);
		} else {
			return this.getToken(QuokkaParser.MemberAccessOperator, i);
		}
	}
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_memberValueExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitMemberValueExpression) return visitor.visitMemberValueExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class MemberContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_member; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitMember) return visitor.visitMember(this);
		else return visitor.visitChildren(this);
	}
}


export class FieldContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(QuokkaParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_field; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitField) return visitor.visitField(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodCallContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(QuokkaParser.Identifier, 0); }
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_methodCall; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitMethodCall) return visitor.visitMethodCall(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionCallExpressionContext extends ParserRuleContext {
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.Identifier, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.If, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_functionCallExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) return visitor.visitFunctionCallExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(QuokkaParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(QuokkaParser.RightParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CommaSeparator(): TerminalNode[];
	public CommaSeparator(i: number): TerminalNode;
	public CommaSeparator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QuokkaParser.CommaSeparator);
		} else {
			return this.getToken(QuokkaParser.CommaSeparator, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_argumentList; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitArgumentList) return visitor.visitArgumentList(this);
		else return visitor.visitChildren(this);
	}
}


export class StringExpressionContext extends ParserRuleContext {
	public stringConstant(): StringConstantContext | undefined {
		return this.tryGetRuleContext(0, StringConstantContext);
	}
	public stringConcatenation(): StringConcatenationContext | undefined {
		return this.tryGetRuleContext(0, StringConcatenationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_stringExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitStringExpression) return visitor.visitStringExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class StringConstantContext extends ParserRuleContext {
	public DoubleQuotedString(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.DoubleQuotedString, 0); }
	public SingleQuotedString(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.SingleQuotedString, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_stringConstant; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitStringConstant) return visitor.visitStringConstant(this);
		else return visitor.visitChildren(this);
	}
}


export class StringConcatenationContext extends ParserRuleContext {
	public stringAtom(): StringAtomContext {
		return this.getRuleContext(0, StringAtomContext);
	}
	public Ampersand(): TerminalNode { return this.getToken(QuokkaParser.Ampersand, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_stringConcatenation; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitStringConcatenation) return visitor.visitStringConcatenation(this);
		else return visitor.visitChildren(this);
	}
}


export class StringAtomContext extends ParserRuleContext {
	public variantValueExpression(): VariantValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, VariantValueExpressionContext);
	}
	public stringConstant(): StringConstantContext | undefined {
		return this.tryGetRuleContext(0, StringConstantContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_stringAtom; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitStringAtom) return visitor.visitStringAtom(this);
		else return visitor.visitChildren(this);
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext[];
	public andExpression(i: number): AndExpressionContext;
	public andExpression(i?: number): AndExpressionContext | AndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExpressionContext);
		} else {
			return this.getRuleContext(i, AndExpressionContext);
		}
	}
	public Or(): TerminalNode[];
	public Or(i: number): TerminalNode;
	public Or(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QuokkaParser.Or);
		} else {
			return this.getToken(QuokkaParser.Or, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_booleanExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitBooleanExpression) return visitor.visitBooleanExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public booleanAtom(): BooleanAtomContext[];
	public booleanAtom(i: number): BooleanAtomContext;
	public booleanAtom(i?: number): BooleanAtomContext | BooleanAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanAtomContext);
		} else {
			return this.getRuleContext(i, BooleanAtomContext);
		}
	}
	public And(): TerminalNode[];
	public And(i: number): TerminalNode;
	public And(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QuokkaParser.And);
		} else {
			return this.getToken(QuokkaParser.And, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_andExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitAndExpression) return visitor.visitAndExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class NotExpressionContext extends ParserRuleContext {
	public Not(): TerminalNode { return this.getToken(QuokkaParser.Not, 0); }
	public booleanAtom(): BooleanAtomContext {
		return this.getRuleContext(0, BooleanAtomContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_notExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitNotExpression) return visitor.visitNotExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ParenthesizedBooleanExpressionContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(QuokkaParser.LeftParen, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(QuokkaParser.RightParen, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_parenthesizedBooleanExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitParenthesizedBooleanExpression) return visitor.visitParenthesizedBooleanExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class StringComparisonExpressionContext extends ParserRuleContext {
	public variantValueExpression(): VariantValueExpressionContext {
		return this.getRuleContext(0, VariantValueExpressionContext);
	}
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.NotEquals, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_stringComparisonExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitStringComparisonExpression) return visitor.visitStringComparisonExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class NullComparisonExpressionContext extends ParserRuleContext {
	public variantValueExpression(): VariantValueExpressionContext {
		return this.getRuleContext(0, VariantValueExpressionContext);
	}
	public Null(): TerminalNode { return this.getToken(QuokkaParser.Null, 0); }
	public Equals(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.NotEquals, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_nullComparisonExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitNullComparisonExpression) return visitor.visitNullComparisonExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ArithmeticComparisonExpressionContext extends ParserRuleContext {
	public arithmeticExpression(): ArithmeticExpressionContext[];
	public arithmeticExpression(i: number): ArithmeticExpressionContext;
	public arithmeticExpression(i?: number): ArithmeticExpressionContext | ArithmeticExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArithmeticExpressionContext);
		} else {
			return this.getRuleContext(i, ArithmeticExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.NotEquals, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.LessThan, 0); }
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.GreaterThan, 0); }
	public LessThanOrEquals(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.LessThanOrEquals, 0); }
	public GreaterThanOrEquals(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.GreaterThanOrEquals, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_arithmeticComparisonExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitArithmeticComparisonExpression) return visitor.visitArithmeticComparisonExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class BooleanAtomContext extends ParserRuleContext {
	public variantValueExpression(): VariantValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, VariantValueExpressionContext);
	}
	public notExpression(): NotExpressionContext | undefined {
		return this.tryGetRuleContext(0, NotExpressionContext);
	}
	public parenthesizedBooleanExpression(): ParenthesizedBooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedBooleanExpressionContext);
	}
	public stringComparisonExpression(): StringComparisonExpressionContext | undefined {
		return this.tryGetRuleContext(0, StringComparisonExpressionContext);
	}
	public nullComparisonExpression(): NullComparisonExpressionContext | undefined {
		return this.tryGetRuleContext(0, NullComparisonExpressionContext);
	}
	public arithmeticComparisonExpression(): ArithmeticComparisonExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticComparisonExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_booleanAtom; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitBooleanAtom) return visitor.visitBooleanAtom(this);
		else return visitor.visitChildren(this);
	}
}


export class ArithmeticExpressionContext extends ParserRuleContext {
	public multiplicationExpression(): MultiplicationExpressionContext {
		return this.getRuleContext(0, MultiplicationExpressionContext);
	}
	public plusOperand(): PlusOperandContext[];
	public plusOperand(i: number): PlusOperandContext;
	public plusOperand(i?: number): PlusOperandContext | PlusOperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PlusOperandContext);
		} else {
			return this.getRuleContext(i, PlusOperandContext);
		}
	}
	public minusOperand(): MinusOperandContext[];
	public minusOperand(i: number): MinusOperandContext;
	public minusOperand(i?: number): MinusOperandContext | MinusOperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MinusOperandContext);
		} else {
			return this.getRuleContext(i, MinusOperandContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_arithmeticExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitArithmeticExpression) return visitor.visitArithmeticExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class PlusOperandContext extends ParserRuleContext {
	public Plus(): TerminalNode { return this.getToken(QuokkaParser.Plus, 0); }
	public multiplicationExpression(): MultiplicationExpressionContext {
		return this.getRuleContext(0, MultiplicationExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_plusOperand; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitPlusOperand) return visitor.visitPlusOperand(this);
		else return visitor.visitChildren(this);
	}
}


export class MinusOperandContext extends ParserRuleContext {
	public Minus(): TerminalNode { return this.getToken(QuokkaParser.Minus, 0); }
	public multiplicationExpression(): MultiplicationExpressionContext {
		return this.getRuleContext(0, MultiplicationExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_minusOperand; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitMinusOperand) return visitor.visitMinusOperand(this);
		else return visitor.visitChildren(this);
	}
}


export class MultiplicationExpressionContext extends ParserRuleContext {
	public arithmeticAtom(): ArithmeticAtomContext {
		return this.getRuleContext(0, ArithmeticAtomContext);
	}
	public multiplicationOperand(): MultiplicationOperandContext[];
	public multiplicationOperand(i: number): MultiplicationOperandContext;
	public multiplicationOperand(i?: number): MultiplicationOperandContext | MultiplicationOperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicationOperandContext);
		} else {
			return this.getRuleContext(i, MultiplicationOperandContext);
		}
	}
	public divisionOperand(): DivisionOperandContext[];
	public divisionOperand(i: number): DivisionOperandContext;
	public divisionOperand(i?: number): DivisionOperandContext | DivisionOperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DivisionOperandContext);
		} else {
			return this.getRuleContext(i, DivisionOperandContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_multiplicationExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitMultiplicationExpression) return visitor.visitMultiplicationExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class MultiplicationOperandContext extends ParserRuleContext {
	public Multiply(): TerminalNode { return this.getToken(QuokkaParser.Multiply, 0); }
	public arithmeticAtom(): ArithmeticAtomContext {
		return this.getRuleContext(0, ArithmeticAtomContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_multiplicationOperand; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitMultiplicationOperand) return visitor.visitMultiplicationOperand(this);
		else return visitor.visitChildren(this);
	}
}


export class DivisionOperandContext extends ParserRuleContext {
	public Divide(): TerminalNode { return this.getToken(QuokkaParser.Divide, 0); }
	public arithmeticAtom(): ArithmeticAtomContext {
		return this.getRuleContext(0, ArithmeticAtomContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_divisionOperand; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitDivisionOperand) return visitor.visitDivisionOperand(this);
		else return visitor.visitChildren(this);
	}
}


export class NegationExpressionContext extends ParserRuleContext {
	public Minus(): TerminalNode { return this.getToken(QuokkaParser.Minus, 0); }
	public arithmeticAtom(): ArithmeticAtomContext {
		return this.getRuleContext(0, ArithmeticAtomContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_negationExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitNegationExpression) return visitor.visitNegationExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ParenthesizedArithmeticExpressionContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(QuokkaParser.LeftParen, 0); }
	public arithmeticExpression(): ArithmeticExpressionContext {
		return this.getRuleContext(0, ArithmeticExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(QuokkaParser.RightParen, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_parenthesizedArithmeticExpression; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitParenthesizedArithmeticExpression) return visitor.visitParenthesizedArithmeticExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ArithmeticAtomContext extends ParserRuleContext {
	public Number(): TerminalNode | undefined { return this.tryGetToken(QuokkaParser.Number, 0); }
	public variantValueExpression(): VariantValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, VariantValueExpressionContext);
	}
	public negationExpression(): NegationExpressionContext | undefined {
		return this.tryGetRuleContext(0, NegationExpressionContext);
	}
	public parenthesizedArithmeticExpression(): ParenthesizedArithmeticExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedArithmeticExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return QuokkaParser.RULE_arithmeticAtom; }
	@Override
	public accept<Result>(visitor: QuokkaVisitor<Result>): Result {
		if (visitor.visitArithmeticAtom) return visitor.visitArithmeticAtom(this);
		else return visitor.visitChildren(this);
	}
}


