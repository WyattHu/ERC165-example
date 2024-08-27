// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

interface IHomer {
    function is2D() external returns (bool);
    function skinColor() external returns (string memory);
}

contract Homer is IERC165, IHomer {
    function supportsInterface(
        bytes4 interfaceID
    ) public view virtual override returns (bool) {
        return
            interfaceID == type(IERC165).interfaceId || // ERC165
            interfaceID == this.is2D.selector ^ this.skinColor.selector; // Simpson
    }

    function is2D() external returns (bool) {}
    function skinColor() external returns (string memory) {}
}
