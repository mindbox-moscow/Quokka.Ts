import { Template } from "../quokka";

describe(
	"Rendering of function call output",
	() => {

		// Functions used in tests below
		const functionRegistry = {
			"GetEngineName": () => {
				return "Quokka";
			},

			"AddSquareBrackets": (arg1) => {
				return `[${arg1}]`;
			},

			"Concat3Arguments": (arg1, arg2, arg3) => {
				return `${arg1}${arg2}${arg3}`;
			},

			"Add2Arguments": (arg1, arg2) => {
				return arg1 + arg2;
			}
		}


		it("Function names are case-insensitive",
		() => {
			const template = new Template(
				"${ gEtEnGiNeNaMe() }",
				 functionRegistry);
			
			const result = template.render();

			expect(result).toEqual("Quokka");
		});


		it("Parameterless function result renders",
		() => {
			const template = new Template(
				"${ GetEngineName() }",
				 functionRegistry);
			
			const result = template.render();

			expect(result).toEqual("Quokka");
		});


		it("Function with one string parameter",
		() => {
			const template = new Template(
				"${ AddSquareBrackets('Cow') }",
				 functionRegistry);
			
			const result = template.render();

			expect(result).toEqual("[Cow]");
		});


		it("Function with multiple parameters",
		() => {
			const template = new Template(
				"${ Concat3Arguments('Uno', 'Dos', 'Tres') }",
				 functionRegistry);
			
			const result = template.render();

			expect(result).toEqual("UnoDosTres");
		});


		it("Variable as a parameter",
		() => {
			const template = new Template(
				"${ AddSquareBrackets(var1) }",
				 functionRegistry);
			
			const result = template.render({
				var1: "Variable value"
			});

			expect(result).toEqual("[Variable value]");
		});

		
		it("Function with two integer parameters",
		() => {
			const template = new Template(
				"${ Add2Arguments(a, b) }",
				 functionRegistry);
			
			const result = template.render({
				"a": 40,
				"b": 59
			});

			expect(result).toEqual("99");
		});
		
		
		it("Function parameter is undefined",
		() => {
			const template = new Template(
				"${ AddSquareBrackets(UnknownParameter) }",
				functionRegistry);

			expect(() => {
				template.render();
			})
			.toThrowError("Value for variable \"UnknownParameter\" not found");
		})
	}
);
