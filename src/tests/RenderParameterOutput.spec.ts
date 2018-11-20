import { Template } from "../Quokka";

describe(
	"Rendering of parameter output",
	() => {

		it("Single string parameter",
		() => {
			const template = new Template("${ Name }");
			
			const result = template.render({
				"Name": "Angelina"
			});

			expect(result).toEqual("Angelina");
		});

		it("Single integer parameter",
		() => {
			const template = new Template("${ ProductId }");

			const result = template.render({
				"ProductId": 43
			});

			expect(result).toEqual("43");
		});		

		it("Multiple string parameters",
		() => {
			const template = new Template("${ FirstName } ${ LastName }");
			
			const result = template.render({
				"FirstName": "Winona",
				"LastName": "Ryder",
			});

			expect(result).toEqual("Winona Ryder");
		});
		
		it("String parameter in plain text",
		() => {
			const template = new Template("Hello, ${ FirstName }!");
			
			const result = template.render({
				"FirstName": "Kate"
			});

			expect(result).toEqual("Hello, Kate!");
		});
		
		it("Parameter names are case-insensitive",
		() => {
			const template = new Template("${ pRoDuCtmOdEl }");
			
			const result = template.render({
				"ProductModel": "ES-335"
			});

			expect(result).toEqual("ES-335");
		});
	}
);
