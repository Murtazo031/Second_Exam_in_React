// import { Children } from "react";

export default function Container({ children}) {
  return (
    <div style={{ 
        maxWidth: "1400px", 
        widht: "100vw", 
        margin: "auto",
        backgroundColor:"#272727",
        }}>
      {children}
    </div>
  );
}
