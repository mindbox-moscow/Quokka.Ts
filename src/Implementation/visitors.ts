import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { QuokkaVisitor } from "../Generated/QuokkaVisitor";
import * as Parser from "../Generated/QuokkaParser";
import * as Nodes from "./template-nodes";
import {
	Expression,
	StringExpression,
	StringConstantExpression,
	FunctionCallExpression,
	VariableValueExpression,
	VariantValueExpression
} from "./expressions";

export class TemplateVisitor extends AbstractParseTreeVisitor<Nodes.TemplateBlock> implements QuokkaVisitor<Nodes.TemplateBlock> {

	protected defaultResult(): Nodes.TemplateBlock {
		throw new Error("Unsupported");
	}

	public visitTemplate(ctx: Parser.TemplateContext) : Nodes.TemplateBlock {
		var templateBlock = ctx.templateBlock();

		if (templateBlock)
		{
			return ctx.templateBlock().accept(this);
		}
		else
		{
			return new Nodes.TemplateBlock([
				new Nodes.ConstantBlock("")
			]);
		}
	}

	public visitTemplateBlock(ctx: Parser.TemplateBlockContext) : Nodes.TemplateBlock {
		const staticBlockVisitor = new StaticBlockVisitor();

		return new Nodes.TemplateBlock(
			ctx.children.map(child => child.accept(staticBlockVisitor)));
	}
}

class StaticBlockVisitor extends AbstractParseTreeVisitor<Nodes.TemplateNode> implements QuokkaVisitor<Nodes.TemplateNode> {

	protected defaultResult(): Nodes.TemplateBlock {
		throw new Error("Unsupported");
	}

	public visitStaticBlock(ctx: Parser.StaticBlockContext) : Nodes.TemplateNode {
		return new Nodes.StaticBlock(
			ctx.children.map(child => child.accept(this)));
	}

	public visitConstantBlock(ctx: Parser.ConstantBlockContext) : Nodes.TemplateNode {
		return new Nodes.ConstantBlock(ctx.text);
	}

	public visitOutputBlock(ctx: Parser.OutputBlockContext) : Nodes.TemplateNode {
		return new Nodes.OutputInstructionBlock(
			ctx.expression().accept(new ExpressionVisitor()));
	}
}

class ExpressionVisitor extends AbstractParseTreeVisitor<Expression> implements QuokkaVisitor<Expression> {
	protected defaultResult(): Expression {
		return null;
	}

	public visitVariantValueExpression(ctx: Parser.VariantValueExpressionContext) {
		return ctx.accept(new VariantValueExpressionVisitor());
	}

	public visitStringExpression(ctx: Parser.StringExpressionContext) {
		return ctx.accept(new StringExpressionVisitor());
	}
}

class StringExpressionVisitor
	extends AbstractParseTreeVisitor<StringExpression>
	implements QuokkaVisitor<StringExpression> {

	protected defaultResult(): StringExpression {
		return null;
	}

	public visitStringConstant(ctx: Parser.StringConstantContext) {
		const quotedValue = ctx.DoubleQuotedString() == null
			? ctx.SingleQuotedString()
			: ctx.DoubleQuotedString();

		const unquotedValue = quotedValue.text.substring(1, quotedValue.text.length - 1);
		return new StringConstantExpression(unquotedValue);
	}
}

class VariantValueExpressionVisitor 
	extends AbstractParseTreeVisitor<VariantValueExpression> 
	implements QuokkaVisitor<VariantValueExpression> {

	protected defaultResult(): VariantValueExpression {
		return null;
	}

	public visitVariableValueExpression(ctx: Parser.VariableValueExpressionContext) {
		return new VariableValueExpression(ctx.Identifier().text);
	}

	public visitFunctionCallExpression(ctx: Parser.FunctionCallExpressionContext) {
		const expressionVisitor = new ExpressionVisitor();
		return new FunctionCallExpression(
			ctx.Identifier().text,
			ctx.argumentList().expression().map(expressionNode => expressionNode.accept(expressionVisitor)));
	}
}