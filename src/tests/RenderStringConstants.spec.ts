import { Template } from "../Quokka";

describe(
	"Rendering of string constants",
	() => {		

		it("Output of string constant renders",
		() => {
			const template = new Template("${ \"Quokka\" }");
			
			expect(template.render())
				.toEqual("Quokka");
		});

		it("Double-quoted string with single-quoted value inside renders",
		() => {
			const template = new Template(
				"${ \"Some 'value'\" }");
			
			expect(template.render())
				.toEqual("Some 'value'");
		});

		it("Single-quoted string with double-quoted value inside renders",
		() => {
			const template = new Template(
				"${ 'Some \"value\"' }");
			
			expect(template.render())
				.toEqual("Some \"value\"");
		});
	}
);
