import { Template } from "../quokka";

describe(
	"Rendering of basic templates",
	() => {		

		it("Empty template renders",
		() => {
			const template = new Template("");
			
			expect(template.render())
				.toEqual("");
		});

		it("Constant string renders to itself",
		() => {
			const template = new Template("Happy new year!");
			
			expect(template.render())
				.toEqual("Happy new year!");
		});
	}
);
