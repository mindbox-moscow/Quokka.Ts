import { ANTLRInputStream, CommonTokenStream, Parser } from "antlr4ts";
import { QuokkaLex } from "./Generated/QuokkaLex";
import * as Parsing from "./Generated/QuokkaParser";
import { TemplateBlock } from "./Implementation/template-nodes";
import { TemplateVisitor } from "./Implementation/visitors";

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