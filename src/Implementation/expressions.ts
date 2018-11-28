import { RenderContext } from "./render-context";

export interface Expression {
	evaluate(renderContext: RenderContext);
}

export interface VariantValueExpression extends Expression {	
}

export interface StringExpression extends Expression {	
}

export class VariableValueExpression implements VariantValueExpression {

	private variableName: string;

	constructor(variableName: string) {
		this.variableName = variableName;
	}

	public evaluate(renderContext: RenderContext) {
		const variableValueKey = Object
			.getOwnPropertyNames(renderContext.compositeModelValue)
			.find(name => name.toLowerCase() === this.variableName.toLowerCase());

		if (variableValueKey)
			return renderContext.compositeModelValue[variableValueKey];

		throw new Error(`Value for variable "${this.variableName}" not found`);
	}
}

export class FunctionCallExpression implements VariantValueExpression {

	private functionName: string;
	private functionArguments: Expression[];

	constructor(functionName: string, functionArguments: Expression[]) {
		this.functionName = functionName;
		this.functionArguments = functionArguments;
	}

	public evaluate(renderContext: RenderContext) {

		const templateFunctionKey = Object
			.getOwnPropertyNames(renderContext.functionRegistry)
			.find(name => name.toLowerCase() === this.functionName.toLowerCase());

		if (templateFunctionKey)
		{
			return renderContext.functionRegistry[templateFunctionKey]
				.apply(
					null, 
					this.functionArguments.map(arg => arg.evaluate(renderContext)));
		}

		throw new Error(`Function ${this.functionName} not found`);
	}
}

export class StringConstantExpression implements StringExpression {

	private text: string;

	constructor(text: string) {
		this.text = text;
	}

	public evaluate(renderContext: RenderContext) {
		return this.text;
	}
}