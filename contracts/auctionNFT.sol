// SPDX-License-Identifier: UNLICENSED
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTAuction is ERC721URIStorage, ReentrancyGuard {

    uint256 public tokenCounter;
    uint256 public listingCounter;

    uint8 public constant STATUS_OPEN = 1;
    uint8 public constant STATUS_CLOSED = 2;

    uint256 public  minAuctionIncrement = 10; //10 percent

    struct Listing {
        address seller;
        uint256 tokenId;
        uint256 price; //display price
        uint256 netPrice; //actual price
        uint256 startAt;
        uint256 endAt;
        uint8 status;
    }
    
}