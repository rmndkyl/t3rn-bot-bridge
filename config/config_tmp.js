export class Config {
  /**
   *  Network OP <Swap from OP to ARB sepolia
   *  Network ARB <Swap from ARB to OP sepolia
   */
  static network = "OP"; //OP or ARB
  static BRIDGEAMOUNT = "0.1";
  static OPRPCURL = "https://optimism-sepolia.blockpi.network/v1/rpc/public";
  static ARBRPCURL = "https://sepolia-rollup.arbitrum.io/rpc";

  static OPTOARBBRIDGECONTRACT = "0xf221750e52aa080835d2957f2eed0d5d7ddd8c38";
  static ARBTOOPBRIDGECONTRACT = "0x8D86c3573928CE125f9b2df59918c383aa2B514D";
  static ARBTOOPRAWDATA =
    "YOUR_DATA";
  static OPTOARBRAWDATA =
    "YOUR_DATA";
}
