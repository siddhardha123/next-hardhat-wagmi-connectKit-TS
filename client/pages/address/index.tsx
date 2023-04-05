
import React from "react";
import { useAccount } from "wagmi";

// Make sure that this component is wrapped with ConnectKitProvider
const MyComponent = () => {
  const { address } = useAccount();
   const [add,setAdd] = React.useState("")

   React.useEffect(() => {
    if(address){
        setAdd(address)
    }
  });
   
//   if (isConnecting) return <div>Connecting...</div>;
//   if (isDisconnected) return <div>Disconnected</div>;
  return (
  <div>Connected Wallet: {add}</div>
  
  );
};


export default MyComponent;