import { Component, OnInit } from '@angular/core';
declare var bitcoinJSLib:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  wif ="";
  message ="";
  signature="";
  p2pkhAddress = "";
  p2wpkhAddress = "";
  p2sh_p2wpkhAddress = "";
   
  messageVerify ="";
  signatureVerify="";
  addressVerify="";
  p2sh_p2wpkhAddressVerify = "";

  resultVerify="";

  bitcoin:any;
  bitcoinMessage:any;

    ngOnInit() {

  	this.bitcoin = bitcoinJSLib.bitcoin;
   	this.bitcoinMessage = bitcoinJSLib.bitcoinJSMessage;
   


    }

  sign(){
 
  	this.p2pkhAddress = "";
 	this.p2wpkhAddress = "";
 	this.p2sh_p2wpkhAddress = "";
 	this.signature = "";

    var keyPair = this.bitcoin.ECPair.fromWIF(this.wif)
	var privateKey = keyPair.d.toBuffer(32)
	

	var signature = this.bitcoinMessage.sign(this.message, privateKey, keyPair.compressed)
	this.signature = signature.toString('base64');


	var pubKey = keyPair.getPublicKeyBuffer()
 
     var scriptPubKey = this.bitcoin.script.witnessPubKeyHash.output.encode(this.bitcoin.crypto.hash160(pubKey))
   
    this.p2pkhAddress = keyPair.getAddress();

    this.p2wpkhAddress =  this.bitcoin.address.fromOutputScript(scriptPubKey)

    
     scriptPubKey = this.bitcoin.script.scriptHash.output.encode(this.bitcoin.crypto.hash160(scriptPubKey))
  
	this.p2sh_p2wpkhAddress = this.bitcoin.address.fromOutputScript(scriptPubKey)

  }

  verify(){

  	this.resultVerify = "";
  	this.p2sh_p2wpkhAddressVerify = "";

  var network = network || this.bitcoin.networks.bitcoin
 
    
     try {
   		var decode = this.bitcoin.address.fromBase58Check(this.addressVerify);
   		var hash160 = decode.hash;

   		if (decode.version != network.pubKeyHash){
   			alert("Invalid address or address not supported");
			return;
   		}
   		 
 	 } catch (e) {
 	 	 
 	 	 try {
   			var decode = this.bitcoin.address.fromBech32(this.addressVerify);
   			var hash160 =  decode.data;
   			if (decode.data.length != 20){
   					alert("Invalid address or address not supported");
				return;
   			}
   			
 	 	} catch (e) {
 	 		
 	 			alert("Invalid address or address not supported");
			return;
			

 	 	}


 	 }
 

  	var p2pkhVerify =   this.bitcoin.address.toBase58Check(hash160, network.pubKeyHash);

	if(this.bitcoinMessage.verify(this.messageVerify,  p2pkhVerify, this.signatureVerify) == true){
		this.resultVerify = "Verified!";
	}else{
		this.resultVerify = "Cannot verify";
	}

	
	var redeemScript = this.bitcoin.script.witnessPubKeyHash.output.encode(hash160)
    var scriptPubKey = this.bitcoin.script.scriptHash.output.encode(this.bitcoin.crypto.hash160(redeemScript))

    
	this.p2sh_p2wpkhAddressVerify = this.bitcoin.address.fromOutputScript(scriptPubKey)
  	 
 

 

  }
}

