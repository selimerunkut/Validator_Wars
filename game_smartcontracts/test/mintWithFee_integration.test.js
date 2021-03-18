const { expect } = require('chai');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

var my_constants = require('./include_in_tesfiles.js')

contract("TestToken", async accounts => {

  before(async function () {
    // Deploy a new contract before the tests
    this.TestToken = await deployProxy(
      my_constants._t_c.TestToken,
      [my_constants._t_c.TOKEN_NAME, my_constants._t_c.TOKEN_SYMBOL],
      { initializer: "initialize", unsafeAllowCustomTypes: true });
    console.log('Deployed', this.TestToken.address);
    this.TestToken.setFeeWalletAddress(accounts[1]);
    this.TestToken.setTransferFeeDivisor(2000);
  });

  it("mint coins and transfer with fee to account, fee should be collected", async function () {

    const transferAmount = 10000000000000000000

    this.TestToken.mintWithoutDecimals(accounts[0], 10, false)
    let balance = (await this.TestToken.balanceOf(accounts[0])).toString()
    assert.equal(balance, transferAmount);

    this.TestToken.mintWithFee(accounts[4], transferAmount.toString())
    let accountBalance = (await this.TestToken.balanceOf(accounts[4])).toString()
    assert.equal(accountBalance, transferAmount - (transferAmount / my_constants._t_c.FEE))

    mintingFeeAccount = (await this.TestToken.feeAddress()).toString()
    let feeCollectorAccountBalance = (await this.TestToken.balanceOf(mintingFeeAccount)).toString()
    assert.equal(feeCollectorAccountBalance, transferAmount / my_constants._t_c.FEE)

  });
});