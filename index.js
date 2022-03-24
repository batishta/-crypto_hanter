#!/usr/bin/env bash

######################################################################
# Generates a cradle config for haskell-language-server,
# This script is used by ../hie-direnv.yaml.
######################################################################

set -euo pipefail

# See https://github.com/haskell/hie-bios#bios
make_hie_bios() {
  ghci_flags
  list_modules
}

# See https://github.com/haskell/hie-bios#cradle-dependencies
make_hie_bios_deps() {
  list_cabal_files

  cat<<EOF
cabal.project
default.nix
shell.nix
EOF
}

  echo "Ignoring $source_file."
fi
