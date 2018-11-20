// Generated from C:\Users\Ivonin\Code\Quokka\Grammar\Quokka\Quokka.g4 by ANTLR 4.6-SNAPSHOT
/* tslint:disable */
// @ts-ignore

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { TemplateContext } from './QuokkaParser';
import { TemplateBlockContext } from './QuokkaParser';
import { StaticBlockContext } from './QuokkaParser';
import { DynamicBlockContext } from './QuokkaParser';
import { ConstantBlockContext } from './QuokkaParser';
import { CommentBlockContext } from './QuokkaParser';
import { IfStatementContext } from './QuokkaParser';
import { IfConditionContext } from './QuokkaParser';
import { ElseConditionContext } from './QuokkaParser';
import { ElseIfConditionContext } from './QuokkaParser';
import { IfInstructionContext } from './QuokkaParser';
import { ElseIfInstructionContext } from './QuokkaParser';
import { ElseInstructionContext } from './QuokkaParser';
import { EndIfInstructionContext } from './QuokkaParser';
import { ForStatementContext } from './QuokkaParser';
import { ForInstructionContext } from './QuokkaParser';
import { IterationVariableContext } from './QuokkaParser';
import { EndForInstructionContext } from './QuokkaParser';
import { AssignmentBlockContext } from './QuokkaParser';
import { OutputBlockContext } from './QuokkaParser';
import { FilterChainContext } from './QuokkaParser';
import { ExpressionContext } from './QuokkaParser';
import { VariantValueExpressionContext } from './QuokkaParser';
import { RootVariantValueExpressionContext } from './QuokkaParser';
import { VariableValueExpressionContext } from './QuokkaParser';
import { MemberValueExpressionContext } from './QuokkaParser';
import { MemberContext } from './QuokkaParser';
import { FieldContext } from './QuokkaParser';
import { MethodCallContext } from './QuokkaParser';
import { FunctionCallExpressionContext } from './QuokkaParser';
import { ArgumentListContext } from './QuokkaParser';
import { StringExpressionContext } from './QuokkaParser';
import { StringConstantContext } from './QuokkaParser';
import { StringConcatenationContext } from './QuokkaParser';
import { StringAtomContext } from './QuokkaParser';
import { BooleanExpressionContext } from './QuokkaParser';
import { AndExpressionContext } from './QuokkaParser';
import { NotExpressionContext } from './QuokkaParser';
import { ParenthesizedBooleanExpressionContext } from './QuokkaParser';
import { StringComparisonExpressionContext } from './QuokkaParser';
import { NullComparisonExpressionContext } from './QuokkaParser';
import { ArithmeticComparisonExpressionContext } from './QuokkaParser';
import { BooleanAtomContext } from './QuokkaParser';
import { ArithmeticExpressionContext } from './QuokkaParser';
import { PlusOperandContext } from './QuokkaParser';
import { MinusOperandContext } from './QuokkaParser';
import { MultiplicationExpressionContext } from './QuokkaParser';
import { MultiplicationOperandContext } from './QuokkaParser';
import { DivisionOperandContext } from './QuokkaParser';
import { NegationExpressionContext } from './QuokkaParser';
import { ParenthesizedArithmeticExpressionContext } from './QuokkaParser';
import { ArithmeticAtomContext } from './QuokkaParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `QuokkaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface QuokkaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `QuokkaParser.template`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate?: (ctx: TemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.templateBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateBlock?: (ctx: TemplateBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.staticBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticBlock?: (ctx: StaticBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.dynamicBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicBlock?: (ctx: DynamicBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.constantBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantBlock?: (ctx: ConstantBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.commentBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentBlock?: (ctx: CommentBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.ifCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfCondition?: (ctx: IfConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.elseCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseCondition?: (ctx: ElseConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.elseIfCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfCondition?: (ctx: ElseIfConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.ifInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfInstruction?: (ctx: IfInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.elseIfInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfInstruction?: (ctx: ElseIfInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.elseInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseInstruction?: (ctx: ElseInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.endIfInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndIfInstruction?: (ctx: EndIfInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.forInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInstruction?: (ctx: ForInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.iterationVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationVariable?: (ctx: IterationVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.endForInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndForInstruction?: (ctx: EndForInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.assignmentBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentBlock?: (ctx: AssignmentBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.outputBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputBlock?: (ctx: OutputBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.filterChain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterChain?: (ctx: FilterChainContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.variantValueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariantValueExpression?: (ctx: VariantValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.rootVariantValueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootVariantValueExpression?: (ctx: RootVariantValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.variableValueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableValueExpression?: (ctx: VariableValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.memberValueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberValueExpression?: (ctx: MemberValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember?: (ctx: MemberContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.functionCallExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.stringConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConstant?: (ctx: StringConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.stringConcatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConcatenation?: (ctx: StringConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.stringAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringAtom?: (ctx: StringAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.notExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.parenthesizedBooleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedBooleanExpression?: (ctx: ParenthesizedBooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.stringComparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringComparisonExpression?: (ctx: StringComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.nullComparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullComparisonExpression?: (ctx: NullComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.arithmeticComparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticComparisonExpression?: (ctx: ArithmeticComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.booleanAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanAtom?: (ctx: BooleanAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.arithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpression?: (ctx: ArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.plusOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlusOperand?: (ctx: PlusOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.minusOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinusOperand?: (ctx: MinusOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.multiplicationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicationExpression?: (ctx: MultiplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.multiplicationOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicationOperand?: (ctx: MultiplicationOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.divisionOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivisionOperand?: (ctx: DivisionOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.negationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegationExpression?: (ctx: NegationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.parenthesizedArithmeticExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedArithmeticExpression?: (ctx: ParenthesizedArithmeticExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `QuokkaParser.arithmeticAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticAtom?: (ctx: ArithmeticAtomContext) => Result;
}

