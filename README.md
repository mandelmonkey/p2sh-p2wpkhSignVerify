# Pshsegwitverify

## Segwit P2SH(P2WPKH) address sign verify message tool 

  Most segwit wallets use a backwards compatible P2SH(P2WPKH) address i.e. native segwit address wrapped in a P2SH address. The issue is this generated P2SH address has no corresponding private key and therefore won't work in regular Bitcoin Message/Sign verify applications. 
  This tool will generate P2SH(P2WPKH), P2WPKH and legacy P2PKH addresses from a given WIF and sign a message using the private key.
  Using your now known P2WPKH or P2PKH address you can send it to a another party along with the signature who can use this tool to verify the signature and that your claimed P2SH(P2WPKH) derived from same private key as your P2WPKH or P2PKH address.

  demo can be found here https://p2sh-p2wpkh-sign-verify.herokuapp.com/


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# p2sh-p2wpkhSignVerify
