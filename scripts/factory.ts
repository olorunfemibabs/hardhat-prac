import { ethers } from "hardhat";

async function main() {
    const [owner, admin2] = await ethers.getSigners();
  //const [owner, addr1, addr2, newAddr] = await ethers.getSigners();
  const admin = [owner.address, admin2.address, "0xFE4890F43F46a4c2590dd4685cAB12c43266a67d"]
  //const admin = [addr1.address, addr2.address, owner.address];

  const CloneMultiSig = await ethers.getContractFactory("cloneMultiSig");
  const cloneMultiSig = await CloneMultiSig.deploy();
  await cloneMultiSig.deployed();

  console.log(`Multisig Address is ${cloneMultiSig.address}`);
  //console.log(addr1.address, addr2.address, owner.address);

  const newMultisig = await cloneMultiSig.createMultiSig(admin);
  let event = await newMultisig.wait();
  let newChild = event.events[0].args[0];
  console.log(newChild);

  //////////////////////////////////////////////////

  const childMultisig = await ethers.getContractAt("IMultisig", "0xFD2d2c5556A2F5fdE5eeEd7F6c0cc77b2F5B7156");
  const addresses = await childMultisig.returnAdmins();
  console.log(newChild);

  await childMultisig.addAdmin("0x565CC0f452AD30329ab5Cf535e7a0C1771562977");
  await childMultisig.connect(admin2).addAdmin("0x565CC0f452AD30329ab5Cf535e7a0C1771562977");

  const addressesNew = await childMultisig.returnAdmins();
  console.log(addressesNew);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});