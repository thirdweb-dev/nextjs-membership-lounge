# nextjs-membership-lounge

An example project using Next.js. The project show case how to restrict the access of your web contents to the users with your NFTs.

This project demonstrated how you could validate if a wallet own a specific NFT on the client-side and the server-side using our SDK.


**NFT Ownership Validation**

To validate NFT ownership on the **server-side**, the client would have the sign a message using their private key to the server.

For **client-side** validation, you could verify the ownership on the blockchain directly using the connected wallet.

## Pages Walkthrough
**1. `pages/_app.tsx`**

Setting up `web3-react` and `chakra-ui` context providers.


**2. `pages/index.tsx`**

A simple page showing the NFT detail that is required to access to the lounge.

It has a `Wallet Connect` button and only work if your Metamask wallet is connected to the `Polygon` network. 
After connecting your wallet, you would see a button to `Attempt to Enter Private Lounge` that uses Ethereum sign message signature to authenticate and validate the ownership of the required NFT. 

If you have the required NFT in your wallet, you would also see a section of private content in the page. (private discord link 😏) 


**3. `pages/lounge.tsx`**

Restricted membership lounge page that is only accessible to wallet with specified NFT. This uses server-side authentication and validation.

To access the lounge page, you are required to pass in `signature` in the query params signed that you want to access the lounge along with a one-time use code.

If the signed wallet have the required NFT, then it would render the page with watermarks (signature and wallet info). Otherwise, it'd redirects the user back to `/index.tsx`. 


**4. `pages/api/request_access.ts`**

Generate a one-time use code for the website for wallet authentication for lounge access.

### Important Note
Make sure the `nonce` is actually only used once and has expiration to prevent attack. 


### Example Project Dependencies
- **Next.js**: React Framework.
- **ethers**: For low-level web3 interactions.
- **@3rdweb/sdk**: thirdweb sdk to interact with contracts easily.
- **@web3-react/core**, **@web3-react/injected-connector**: For web3 in React and Wallet Connect.
- **@chakra-ui/react**: For UI.
