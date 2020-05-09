const meow = require("meow");

module.export = meow(`
	Usage
	  $ inpm 

	Options
		install  package-name
		uninstall  package-name
        --help
        --version

	Examples
	  $ inpm install ghost-busters
	  Installing ghost-busters
	  
      $ inpm uninstall ghost-busters
	  Uninstalling ghost-busters
	  
      $ inpm --help
      $ inpm --version	  
`);
