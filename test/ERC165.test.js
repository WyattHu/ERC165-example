const { expect } = require("chai");
const { ethers } = require("hardhat");
const erc165 = require("erc165");

describe("Example using ERC165 Interface Id", function () {
    it("Should be True for matching interfaceId with EIP165", async function () {
        [Deployer] = await ethers.getSigners();
        console.log(Deployer.address);
        const factory = await ethers.getContractFactory("Homer");
        const deployedContract = await factory.deploy();
        // await deployedContract.deployed();

        const boolean = await deployedContract.supportsInterface("0x01ffc9a7"); //EIP-165 interfaceId
        expect(boolean).to.be.true;
    });

    it("Should be True for matching interfaceId for Homer contract", async function () {
        [Deployer] = await ethers.getSigners();
        const factory = await ethers.getContractFactory("Homer");
        const deployedContract = await factory.deploy();
        // await deployedContract.deployed();

        const abi = await hre.artifacts.readArtifact(
            "contracts/ERC165ViewOnly.sol:/IHomer"
        );
        const interfaceId = erc165.interfaceIdFromABI(abi.abi);

        const boolean = await deployedContract.supportsInterface(interfaceId);
        expect(boolean).to.be.true;
    });
});
