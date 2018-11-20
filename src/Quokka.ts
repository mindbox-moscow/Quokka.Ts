import { ANTLRInputStream, CommonTokenStream, Parser } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { QuokkaLex } from "./Generated/QuokkaLex";
import * as Parsing from "./Generated/QuokkaParser";
import { QuokkaVisitor } from "./Generated/QuokkaVisitor";

export type FunctionRegistry = { [name: string]: Function };

export class Template {

	private root: TemplateBlock;
	private functionRegistry: FunctionRegistry;

	public constructor(templateText: string, functionRegistry?: FunctionRegistry) {
		this.functionRegistry = functionRegistry;
		this.root = this.parseTemplate(templateText);
	}

	public render = (templateViewModel?: Object) : string => {
		return this.root.render({
			compositeModelValue: templateViewModel || {},
			functionRegistry: this.functionRegistry
		});
	}

	private parseTemplate(templateText: string) : TemplateBlock {
		const chars = new ANTLRInputStream(templateText);
		const lexer = new QuokkaLex(chars);
		const tokens = new CommonTokenStream(lexer);
		const parser = new Parsing.QuokkaParser(tokens);

		const rootContext = parser.template();
		return new TemplateVisitor().visit(rootContext);
	}
}

export const renderTemplate = (template: string) : string => {

	const sample1 = "Шаблон с ${parameter}-строкой";
	const sample2 = "${ Thunder() } feel the ${ Oscillate(A, 'b', \"c\") }";
	const sample3 = "${ Thunder() } feel";
	const sample4 = "${ DiscoverStrings(\"Stone\", 'Temple', \"Pilots\") }";
	const sample5 = "${ number } ${ ErsatzForms(number, \"бутылка\", 'бутылки', \"бутылок\") }";

	const chars = new ANTLRInputStream(sample5);
	const lexer = new QuokkaLex(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new Parsing.QuokkaParser(tokens);

	const rootContext = parser.template();
	var result = new TemplateVisitor().visit(rootContext);

	return result.render({
		compositeModelValue: {
			"parameter": "Dance Dance Dance",
			"number": 1102 
		},

		functionRegistry: {
			"Thunder": () => {
				return "Hear the thunder";
			},

			"DiscoverStrings": (a: string, b: string, c: string) => {
				return `A = ${a}, B = ${b}, C = ${c}`;
			},

			"Oscillate": (a: number, b: string, c: string) => {
				return "Dopamine.";
			},

			"ErsatzForms": (a: number, form1: string, form2: string, formN: string) : string => {
				if (a % 10 == 1 && a % 100 != 11)
					return form1;
				if (a % 10 == 2 && a % 100 != 12)
					return form2;
				return formN;
			}
		}
	});
};

interface RenderContext {
	compositeModelValue: Object;
	functionRegistry: { [name: string]: Function };
}

interface TemplateNode {
	render(renderContext: RenderContext) : string;
}

interface Expression {
	evaluate(renderContext: RenderContext);
}

interface VariantValueExpression extends Expression {	
}

interface StringExpression extends Expression {	
}

class TemplateBlock implements TemplateNode {

	private children: TemplateNode[];

	constructor(children: TemplateNode[]) {
		this.children = children;
	}

	public render(renderContext: RenderContext) {
		let result = "";			

		for (const child of this.children) {
			result += child.render(renderContext);
		}

		return result;
	}
}

class StaticBlock implements TemplateNode {

	private children: TemplateNode[];

	constructor(children: TemplateNode[]) {
		this.children = children;
	}

	public render(renderContext: RenderContext) {
		let result = "";

		for (const child of this.children) {
			result += child.render(renderContext);
		}

		return result;
	}
}

class ConstantBlock implements TemplateNode {

	private text: string;

	constructor(text: string) {
		this.text = text;
	}

	public render(renderContext: RenderContext) {
		return this.text;
	}
}

class OutputInstructionBlock implements TemplateNode {

	private expression: Expression;

	constructor(expression: Expression) {
		this.expression = expression;
	}

	public render(renderContext: RenderContext) {
		return this.expression.evaluate(renderContext);
	}
}

class UnsupportedBlock implements TemplateNode {
	
	public render(renderConext: RenderContext) {
		return " UNSUPPORTED ";
	}
}

class VariableValueExpression implements VariantValueExpression {

	private variableName: string;

	constructor(variableName: string) {
		this.variableName = variableName;
	}

	public evaluate(renderContext: RenderContext) {
		const variableValue = Object
			.getOwnPropertyNames(renderContext.compositeModelValue)
			.find(name => name.toLowerCase() === this.variableName.toLowerCase());

		if (variableValue)
			return renderContext.compositeModelValue[variableValue];

		return renderContext.compositeModelValue[this.variableName];
	}
}

class FunctionCallExpression implements VariantValueExpression {

	private functionName: string;
	private functionArguments: Expression[];

	constructor(functionName: string, functionArguments: Expression[]) {
		this.functionName = functionName;
		this.functionArguments = functionArguments;
	}

	public evaluate(renderContext: RenderContext) {
		return renderContext.functionRegistry[this.functionName]
			.apply(
				null, 
				this.functionArguments.map(arg => arg.evaluate(renderContext)));
	}
}

class StringConstantExpression implements StringExpression {

	private text: string;

	constructor(text: string) {
		this.text = text;
	}

	public evaluate(renderContext: RenderContext) {
		return this.text;
	}
}

class TemplateVisitor extends AbstractParseTreeVisitor<TemplateBlock> implements QuokkaVisitor<TemplateBlock> {

	protected defaultResult(): TemplateBlock {
		throw new Error("Unsupported");
	}

	public visitTemplate(ctx: Parsing.TemplateContext) : TemplateBlock {
		var templateBlock = ctx.templateBlock();

		if (templateBlock)
		{
			return ctx.templateBlock().accept(this);
		}
		else
		{
			return new TemplateBlock([
				new ConstantBlock("")
			]);
		}
	}

	public visitTemplateBlock(ctx: Parsing.TemplateBlockContext) : TemplateBlock {
		const staticBlockVisitor = new StaticBlockVisitor();

		return new TemplateBlock(
			ctx.children.map(child => child.accept(staticBlockVisitor)));
	}
}

class StaticBlockVisitor extends AbstractParseTreeVisitor<TemplateNode> implements QuokkaVisitor<TemplateNode> {

	protected defaultResult(): TemplateBlock {
		throw new Error("Unsupported");
	}

	public visitStaticBlock(ctx: Parsing.StaticBlockContext) : TemplateNode {
		return new StaticBlock(
			ctx.children.map(child => child.accept(this)));
	}

	public visitConstantBlock(ctx: Parsing.ConstantBlockContext) : TemplateNode {
		return new ConstantBlock(ctx.text);
	}

	public visitOutputBlock(ctx: Parsing.OutputBlockContext) : TemplateNode {
		return new OutputInstructionBlock(
			ctx.expression().accept(new ExpressionVisitor()));
	}
}

class ExpressionVisitor extends AbstractParseTreeVisitor<Expression> implements QuokkaVisitor<Expression> {
	protected defaultResult(): Expression {
		return null;
	}

	public visitVariantValueExpression(ctx: Parsing.VariantValueExpressionContext) {
		return ctx.accept(new VariantValueExpressionVisitor());
	}

	public visitStringExpression(ctx: Parsing.StringExpressionContext) {
		return ctx.accept(new StringExpressionVisitor());
	}
}

class StringExpressionVisitor
	extends AbstractParseTreeVisitor<StringExpression>
	implements QuokkaVisitor<StringExpression> {

	protected defaultResult(): StringExpression {
		return null;
	}

	public visitStringConstant(ctx: Parsing.StringConstantContext) {
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

	public visitVariableValueExpression(ctx: Parsing.VariableValueExpressionContext) {
		return new VariableValueExpression(ctx.Identifier().text);
	}

	public visitFunctionCallExpression(ctx: Parsing.FunctionCallExpressionContext) {
		const expressionVisitor = new ExpressionVisitor();
		return new FunctionCallExpression(
			ctx.Identifier().text,
			ctx.argumentList().expression().map(expressionNode => expressionNode.accept(expressionVisitor)));
	}
}