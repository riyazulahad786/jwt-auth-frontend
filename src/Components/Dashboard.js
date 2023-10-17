import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
// import { Jwt } from "jsonwebtoken";

function Dashboard() {
  const [quote, setquote] = useState("");
  const [tempQuote, settempQuote] = useState("");
//   const populatecode = async () => {
//     const response = await fetch("http://localhost:3001/api/quote", {
//       headers: {
//         "x-access-token": localStorage.getItem("token"),
//       },
//     });
//     const data = await response.json();
//     if (data.status === "ok") {
//       setquote(data.qoute);
//     } else {
//       alert("data.error");
//     }
//   };
  const navigate = useNavigate();
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       const user = jwt.decode(token);
//       if (!user) {
//         localStorage.removeItem("token");
//         navigate("/login");
//       }
//     //    else {
//     //     // populatecode();
//     //   }
//     }
//   }, []);
//   const updated = async(e)=>{
//     e.preventDefault()
//     const response = await fetch("http://localhost:3001/api/quote", {
//         method:'POST',
//         headers: {
//             "Content-Type":'application/json',
//             "x-access-token": localStorage.getItem("token"),
//         },
//         body:JSON.stringify({
//             quote:tempQuote
//         })
//       });
//       const data = await response.json();
//       if (data.status === "ok") {
//         settempQuote('')
//         setquote(tempQuote);
//       } else {
//         alert("data.error");
//       }
//   }
  return (
    <div>
      <h1>{quote || "no quote found"}</h1>
      {/* <div>
        <form onSubmit={updated}>
          <input
            type="text"
            placeholder="quote"
            value={tempQoute}
            onChange={(e) => {
              e.target.value;
            }}
          />
          <button>update</button>
        </form>
      </div> */}
    </div>
  );
}

export default Dashboard;
