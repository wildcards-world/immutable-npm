import meow from "meow";

export default meow(`
	Usage
	  $ inpm 

	Options
		install  package-name
		uninstall  package-name
		login 
		zip package-name.tar.gz path-to-package-folder
		publish package-name path-to-tar.gz-package
        --help
        --version

	Examples
	  $ inpm install ghost-busters
	  Installing ghost-busters
	  
      $ inpm uninstall ghost-busters
	  Uninstalling ghost-busters
    
	  $ inpm login
	  This function configures your arweave wallet to the application
	  
	  $ inpm zip package-name.tar.gz path-to-package-folder
	  Helper function to tar zip your package prepping it for publishing
	  -- buggy and will only work in unix systems
	 
	  $ inpm publish package-name path-to-tar.gz-package
	  publish a package on arweave
	  
      $ inpm --help
      $ inpm --version	  
`);
