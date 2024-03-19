{ pkgs, ... }: {

  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_18
  ];

  # Sets environment variables in the workspace
  env = {
    # SOME_ENV_VAR = "hello";
  };

  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [ ];

    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = "npm install";
      };
      # To run something each time the environment is rebuilt, use the `onStart` hook
    };

    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = [
        {
          env = {
            HOST = "0.0.0.0";
            PORT = "$PORT";
          };
          command = [ "npm" "run" "start"];
          id = "web";
          manager = "web";
        }
      ];
    };
  };
}
