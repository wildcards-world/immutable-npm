import meow from "meow";

export default meow(`
	Usage
	  $ inpm 

	Options
		install  package-name
		uninstall  package-name
		login 
        --help
        --version

	Examples
	  $ inpm install ghost-busters
	  Installing ghost-busters
	  
      $ inpm uninstall ghost-busters
	  Uninstalling ghost-busters
    
	  $ inpm login
	  This function configures your arweave wallet to the application
	  
      $ inpm --help
      $ inpm --version	  
`);
