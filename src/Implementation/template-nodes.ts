import { RenderContext } from "./render-context";
import { Expression } from "./expressions";

export interface TemplateNode {
	render(renderContext: RenderContext) : string;
}

export class TemplateBlock implements TemplateNode {

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

export class StaticBlock implements TemplateNode {

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

export class ConstantBlock implements TemplateNode {

	private text: string;

	constructor(text: string) {
		this.text = text;
	}

	public render(renderContext: RenderContext) {
		return this.text;
	}
}

export class OutputInstructionBlock implements TemplateNode {

	private expression: Expression;

	constructor(expression: Expression) {
		this.expression = expression;
	}

	public render(renderContext: RenderContext) {
		return this.expression.evaluate(renderContext);
	}
}