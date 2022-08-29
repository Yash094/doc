/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  contracts: [
    {
      type: "doc",
      label: "Getting Started",
      id: "index",
    },
    {
      type: "category",
      label: "Design Docs",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Design Docs",
        description:
          "In-depth breakdowns of thirdweb smart contract architecture.",
        keywords: ["design", "docs"],
      },
      items: [
        {
          type: "doc",
          label: "Drop",
          id: "design/Drop",
        },
        {
          type: "doc",
          label: "Marketplace",
          id: "design/Marketplace",
        },
        {
          type: "doc",
          label: "Signature Minting",
          id: "design/SignatureMint",
        },
        {
          type: "doc",
          label: "Multiwrap",
          id: "design/Multiwrap",
        },
        {
          type: "doc",
          label: "Signature Drop",
          id: "design/SignatureDrop",
        },
      ],
    },

    // Base Contracts
    {
      type: "category",
      label: "Base Contracts",
      collapsed: true,
      items: [
        // ERC721A
        {
          type: "category",
          label: "ERC721A",
          collapsed: false,
          items: [
            {
              type: "doc",
              label: "ERC721Base",
              id: "ERC721Base",
            },
            {
              type: "doc",
              label: "ERC721SignatureMint",
              id: "ERC721SignatureMint",
            },
            {
              type: "doc",
              label: "ERC721LazyMint",
              id: "ERC721LazyMint",
            },
            {
              type: "doc",
              label: "ERC721DelayedReveal",
              id: "ERC721DelayedReveal",
            },
            {
              type: "doc",
              label: "ERC721Drop",
              id: "ERC721Drop",
            },
          ],
        },

        // ERC1155
        {
          type: "category",
          label: "ERC1155",
          collapsed: false,
          items: [
            {
              type: "doc",
              label: "ERC1155Base",
              id: "ERC1155Base",
            },
            {
              type: "doc",
              label: "ERC1155SignatureMint",
              id: "ERC1155SignatureMint",
            },
            {
              type: "doc",
              label: "ERC1155LazyMint",
              id: "ERC1155LazyMint",
            },
            {
              type: "doc",
              label: "ERC1155DelayedReveal",
              id: "ERC1155DelayedReveal",
            },
            {
              type: "doc",
              label: "ERC1155Drop",
              id: "ERC1155Drop",
            },
          ],
        },

        // ERC20
        {
          type: "category",
          label: "ERC20",
          collapsed: false,
          items: [
            {
              type: "doc",
              label: "ERC20Base",
              id: "ERC20Base",
            },
            {
              type: "doc",
              label: "ERC20Vote",
              id: "ERC20Vote",
            },
            {
              type: "doc",
              label: "ERC20SignatureMint",
              id: "ERC20SignatureMint",
            },
            {
              type: "doc",
              label: "ERC20SignatureMintVote",
              id: "ERC20SignatureMintVote",
            },
            {
              type: "doc",
              label: "ERC20Drop",
              id: "ERC20Drop",
            },
            {
              type: "doc",
              label: "ERC20DropVote",
              id: "ERC20DropVote",
            },
          ],
        },
      ],
    },

    // Contract Extensions
    {
      type: "category",
      label: "Contract Extensions",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "ContractMetadata",
          id: "ContractMetadata",
        },
        {
          type: "doc",
          label: "DelayedReveal",
          id: "DelayedReveal",
        },
        {
          type: "doc",
          label: "Drop",
          id: "Drop",
        },
        {
          type: "doc",
          label: "LazyMint",
          id: "LazyMint",
        },
        {
          type: "doc",
          label: "Ownable",
          id: "Ownable",
        },
        {
          type: "doc",
          label: "Permissions",
          id: "Permissions",
        },
        {
          type: "doc",
          label: "PermissionsEnumerable",
          id: "PermissionsEnumerable",
        },
        {
          type: "doc",
          label: "PlatformFee",
          id: "PlatformFee",
        },
        {
          type: "doc",
          label: "PrimarySale",
          id: "PrimarySale",
        },
        {
          type: "doc",
          label: "Royalty",
          id: "Royalty",
        },
        {
          type: "doc",
          label: "SignatureMintERC721",
          id: "SignatureMintERC721",
        },
        {
          type: "doc",
          label: "SignatureMintERC1155",
          id: "SignatureMintERC1155",
        },
      ],
    },

    // Pre-Built Contracts
    {
      type: "category",
      label: "Pre-Built Contracts",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "NFTs",
          collapsed: false,
          items: [
            {
              type: "doc",
              label: "Signature Drop",
              id: "SignatureDrop",
            },
            {
              type: "doc",
              label: "NFT Drop",
              id: "DropERC721",
            },
            {
              type: "doc",
              label: "Edition Drop",
              id: "DropERC1155",
            },
            {
              type: "doc",
              label: "NFT Collection",
              id: "TokenERC721",
            },
            {
              type: "doc",
              label: "Edition",
              id: "TokenERC1155",
            },
            {
              type: "doc",
              label: "Multiwrap",
              id: "Multiwrap",
            },
            {
              type: "doc",
              label: "Pack",
              id: "Pack",
            },
          ],
        },
        {
          type: "category",
          label: "Tokens",
          collapsed: false,
          items: [
            {
              type: "doc",
              label: "Token Drop",
              id: "DropERC20",
            },
            {
              type: "doc",
              label: "Token",
              id: "TokenERC20",
            },
          ],
        },
        {
          type: "doc",
          label: "Marketplace",
          id: "Marketplace",
        },
        {
          type: "doc",
          label: "Vote",
          id: "VoteERC20",
        },
        {
          type: "doc",
          label: "Split",
          id: "Split",
        },
      ],
    },

    {
      className: "hidden-category",
      type: "category",
      label: "Full Reference",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Full Reference",
        description: "Everything exported by the package",
      },
      items: [
        {
          type: "autogenerated",
          dirName: ".",
        },
      ],
    },
  ],
};

module.exports = sidebars;
