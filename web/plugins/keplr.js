const {SigningCosmosClient} = require("@cosmjs/launchpad");

window.onload = async () => {
  if(!window.keplr){
    alert("Please install keplr extension");
  }else{
    const chainId = "cosmoshub-4";
    await window.keplr.enable(chainId);

    const offlineSigner = window.getOfflineSigner(chainId);
    const account = await offlineSigner.getAccounts();

    const cosmJS = new SigningCosmosClient(
      "http://127.0.0.1:1317",
      account[0].address,
      offlineSigner,
    );
  }
  inject('account', account)
}
