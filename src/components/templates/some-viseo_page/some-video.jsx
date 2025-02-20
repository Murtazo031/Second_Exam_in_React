export default function SomeVideo (){
    return <div className="some_video">
        <div style={{
            width:"65px",
            height:"65px",
            borderRadius: "50%",
            cursor: "pointer",
            backgroundColor:"#FCD54C",
            display:"flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div style={{
                borderLeft:"10px solid transparent",
                borderRight:"10px solid transparent",
                borderBottom:"15px solid #272727",
                width:"0",
                height:"0",
                transform: "rotate(90deg)"
            }}></div>
        </div>
    </div>
} 