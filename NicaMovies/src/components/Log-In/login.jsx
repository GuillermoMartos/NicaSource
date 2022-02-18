import "./login.sass";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Login() {
  var [log, setLog] = useState({
    user: "",
    password: "",
  });
  var[con, setCon]=useState(false)

  useEffect(() => {
    
  }, [con])
  

  function handleChange(e) {
    const value = e.target.value;
    setLog({
      ...log,
      [e.target.name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('NicaMovieUser',true)
    setCon(!con)
    setLog({user: "", password: ""})
    // await axios({
    //   method: "POST",
    //   url: "http://localhost:3001/log-in",
    //   data: log
    // }).then((res)=>{
    //   if (res.data===null) return alert(`no user "${log.user}" founded or pass incorrect, try again please`)
    //   localStorage.setItem('NicaMovieUser', res.data.token)
    //   }
    //   );
  }
  
  async function handleLogOff(e) {
    e.preventDefault();
    localStorage.removeItem('NicaMovieUser');
    setCon(!con)
  }

  if(localStorage.getItem('NicaMovieUser')){
    return (
      <div className="nav">
        <div className="logo">
        <img
          className="logo"
          alt="logo"
          src="data:image/jpeg;base64,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"
          width="62px"
        />
        </div>
     
      <div className="Log">
        <h2>  NicaMovies</h2>
        <form className="form" onSubmit={handleLogOff}>
          <button className="hola" type="submit">
            <h4>LOG OUT</h4>
          </button>
        </form>
        </div>
      </div>
    )
  }
  else return (
    <div className="nav">
        <div className="logo">
        <img
          className="logo"
          alt="logo"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDQ0NDQ8PDQ0ODg0PEA0NDQ8NDg8PFhEWGRURFhcYHSggJBomGxMTIj0hJSkrMy4uFx8zRDMtOjQtLi4BCgoKDQ0NFhAPFysdHR0tKy0wLTctLS00NysrKysrKy0tKystLS0tKy8tLSs3KystKy0rKysrKy0wKysrLSsrLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIGBwMFBP/EADsQAAICAQEHAQUFBgUFAAAAAAABAhEDBAUGEiExQVFhBxNikaEiMnGBsRQkUmPB4SM0Q8LRM0JEcqL/xAAbAQEBAQADAQEAAAAAAAAAAAAAAQIDBAUGB//EAC0RAQADAAIAAwYGAwEBAAAAAAABAhEDBCFR0RIxQWGx4QUiMnGB8BPB8ZFC/9oADAMBAAIRAxEAPwD51nmv0dLAWAsBYAABAAQAAAaA0KaBNQGgNAFhCwJYCwFgLAlgCgAAgR6GWwADQpoDQJqA0AWDSwhYEsBYCwJYCygAAAQIALAWAsBYEAAAFgelkUsCWAsBYEsAUAAAIgABYCwFgLAgAAEAACwJYNLBpZTSwmlgQGgNZkaAACwFgLAlgAAAIALAlgLBpZTSwmlg0sGoACAAAXDQYJYwLGBYQsABmZbAAEsBYNLKaWE0sGoDQAEAAwBgFwSxgWELAWAAAAIAsBYQsCWAsoWBmZbAgAGBZcCxgljACAAAAAgABYQsBYEsBZTSwaWDUsGgTSwaWAAWBLAWEehGwABAFgLAWELAllCwFg0sGoE0sGlgLAWBAhYUsIWAsBYEsoAAAAIA1nZG9LBqA0CaA0sBYACALCFgLALm0lbbaSSVtt9EkU10vcvcX3fBqtfG8iqWPTS5qHiWTzL4e349OWlPjLwO9+J+1vHwz4fGfT5fNjvpuLxceq2fGpc5ZNLHkpeZY/X4e/bw1+P4wdH8TzOPmnw+E+vq5s/D5Ncmnyafg4nvoAABABYEsBYCwFgAiAAAGdkaLAWAsCWUAAAAEAaWBnp8M8s4YsUZZMk5cMIRVyk/CERrNr1rWbWnIh1rczcuGiUdRqVHLrKtf90MF9o+ZfF8vXnrTHzfd/ELc20p4V+v7/L5NvNvMANO303KhreLUaVRx6urlH7uPP8Aj4l8Xz8rF6b7nqdL8Rtw5S/jX6fb5OTZ8M8U548kXjyQk4yhJVKL8NHDj6OtotEWrOxLzIoAAFNAaWDQJqAAAwC4BMGZGksBYCwFgLAWBAgAA/VszZ2XV5o4NPB5Mku3SMY95SfaK8liNcfLzU4qTe85Dsm6e6mHZsL5ZdTJVkztf/EF2j+pz1rEPmO33b9i3lWPdHr82wGnSAAADXd7d08W0ocSrFqoxqGdLqu0J+Y/VfR5tXXd6ndv15z318vRxzaWgy6TNPBqIPHlh1T6NdpRfeL8nDMTD6bi5actIvSdiX5RjkBgljELAWAsCWAsBYCwFgZmWgAU0BoE1AaABgFwfU3e2Fn2jm91gjSVPJmkn7vFHy/Xwur+bLFddfsdnj4K+1f+I83Z93tg4NnYfdYFcnTyZZV7zLLy349OxzRWIfMdjs357+1f+I8n1CuuAAAAAB8rePd/BtHD7rMqnG3jzRS95jl5Xp5XckxEux1+zfgt7Vf5jzcW3g2Hn2dmeHUR5O3jyxv3eWPmL8+V1XyZxTGPpuv2ac9Pap/MeT5Zl2CwhYCwFgSwFgAAAD0GNFjESwFgLAWBLAWBsG6e6mbac7V4tLF1k1DXf+CF9ZfRd/D1Wuun2+7Trx528vX5OzbK2bh0eGODTwWPHHt1cn3lJ92/JzRGPmeXlvy2m152X6w4wAAAAAAAD8e1tl4dbhlg1EFPHL8pRl2lF9mvImNcnFy34rRak5Li+9m6ubZmT7V5dNN1j1CXL/0n4l9H27pcNq4+l6vcp2I8rfGPT5PgEdsAWBLBpYNLBpYTSwFgZkaQBYCwFgLAlgbhuVuTPX8Oo1PFi0fVV9nJn9I+I/F8vK3WuvN7vfjh/JTxt9Pv8v8A11/S6eGHHDFihHHjhFRjCC4YxS7JHK+etabTNrTsy9AyAAAAAAAAAAHlqtNDPjnizQjkxzTjKE1cZINVtNZi1ZyYce313Jns9y1Gn4sui6tv7U8HpPzH4vn5fHauPoen345vy38LfX++TUDDvhQBpYEsBYCwhYGZlyBUAAEsGjYHQ9yNwnl4NXtCFY+Uselkqc/Esi7R+Hv38Pdaebx+7+I5tOGfH4z6erqMUkkkkklSSVJLwcjxAIAAAAAAAAAAAABJRTTTSaaaaatNPqmFcs343BeHj1ez4uWFXLJpYpuWPzLGu8fh6rty5LFq+T2un+Ie1lOWfHz9fVzxMw9YAAAAAqAGRlsABACwi5NRinKUmlGMU5Sk30SS5t+hcJnPGXV9x9w1p+DV66KnqOUseB1KGF9pS7Of0Xq+ZyVq8LufiE32nF4R5+f2+rfjTykAAAAAAAAAAAAAAAAUDnu/O4Kz8er0EVHPzlk06qMMz7yh2U/To/R9czV6nT780ynL7vPy+zlMk03GScZRbi4yTjKMk6aafRp9jD29SwaljAsYFlwLGDOzLQAA9tFpMmoyww4ISy5Zuowirb/t6voMZvetKza05EOyblbl49nRWbNw5tbJc59YYU+sMf8AWXV+iOWK4+f7fdtzT7NfCv1/f0bYV0AAAAAAAADw1+txabFPPnnHFigrlOTpei9W/C6hulLXtFaxsyaHWY9RihmwTjlxZFcZxdp/39OwS9LUtNbRkw9wyAAAAAAAAahvvuTj2innwcOHWpfefKGZJfdn6+JfqSYd7qd23DPs28a/T9vRxnWaXJgyTw54SxZYOpY5qpJ/8eq5My96tq2iLVnYl42RosBYCwPQjSA0BrZ9wd5YbN1TeaMXgzqMMmThvJip8pJ9eHzH8H252Jx0u7155qfl98f3/jt+OanGMotSjJKUZRdxlFq00/ByPnZjPCWQQAAAAAAB8/bu2sGz8Dz6mfDHpGK5zyT7Qgu7/TqHLw8N+W3s0hxDerefPtTNxZXwYIN+608X9mHxPzOu/wAqMTL6HrdanBXI98++f78GW6m9OfZeXix/4mCbXvdPJ1GXxR8T9e/f0RKdnrU56+PhMe6f78HbtibZwa/As+mnxwfKUXynjl3hNdmbfP8ALxX4rezeH7w4gAAAAAAGOXJGEZTnJQhFOUpSaUYxS5tvwFiJmchwrf3eWO09WpYoKODCpY8c3CsuVN85yfWuXKPbn3bMTL6Hp9eeGmTPjP8Af+taI7aBCyhYGdkxssIWAsDfPZzvn+yyjodXP91m6xZZP/oTb+63/A38n6dNRLze91Pbj/JSPH4/P7/V1408MAAAAAD4e9e9GDZeLiy/bzTT91p4v7eR+X4iu8v1fITLsdfrX5rZHu+MuIbd21n2hnefUz4pc1CC5Y8UP4YLsvqzGvoOHipxV9msPnWRygH0dg7cz7OzrPppU+SnjfPHlh/DJf16osS4ubhpy19mzuG6u8+DamHjwvgywS97p5P7eN+fWL7SX0fI3Evn+x178Nst7vhL7YdcAAAAADjvtH30/bJy0Wkl+6QlWTJH/wAiafRfy0/m+fSrky9vpdT/ABx7d/1fD5ff6NDsy9DQGgAABnZGkAWAsAB0/wBmm+l8GztZPnyjps8n18YJPz4f5eL3EvI73U9/LSP3j/fq6aV5IAAAapvtvri2ZF4sfDm1slccV3HEn0nkr6R6v0XMTLudXqW5p2fCv99ziu0Ndl1WWefUTllyzdynLr6JeEvC6GHvUpWlYrWMiH5w1pYNSwaWE1+nZ2vy6XNDUaecsWXG7jKPjvFrun4ZWb0res1tGxLte5O+mLacfdTrDrYq5Yb+zkS6zx31XldV6rma14Xa6luGdjxr5+rag6YAAoHLfaZvrfvNm6OfJXHU54v54Iv9X+XkkvV6XU93JeP2j/fo5iR6oAAAAJYGdkaLAALBpYNSwmuw+zjfT9sjHRauX73CP+Hkk/8AMQS7/wAxJfmufk1EvE7vU/xz7dP0/T7N9K89QNA383/jpOPSaFxyarnHJm5Shp/RdnP06Lv4JMvR6nS9v8/J4R9fs5DlyynKU5ylOcm5SnJuUpSfVtvuZezEREZDAKFQAAAAGWHLLHOOTHKUJwkpRnBuMoyXRpruEmImMl2DcPf6Os4NJrXHHq+Shl5Rx6j08Kfp0fbwaiXjdrpzx/np41+n2b8HnoBz/wBpW+v7JGWg0cv3qarLli/8vBr7q/mNfJO/Al6HT6vt/nv7vr9nHrMvZLAWAsCWAAAehGgCFQAWAAyxZZQlGcJOE4SUozi6lGSdpp+bCTETGS7fuDvjHaWF4s7jDW4Y3kjyjHLBf60fpa7P0aNPC7fVnittf0z/AHGs7+e0Pj49Hs2dR5xy6yD5y8xxPx8fy8k12ur0s/Pyx/Hr6OZkeoWELAWBLAWAsCWAsAB0/cL2iVwaPac+XKOLWTfTxDK/9/z8mnldrpf/AHxR/Hp6Ni9oO+Udm4vc4HGWuzRuC5SWGD/1Zf0Xd+gdfq9aeWdt+mP7jiGTI5ylObcpyblKUncpSbttvzZHuRkRkMQalg0sGlg0sYmllwLGDMy2WAsJpYEsBYCwCm10bXJrk2uTVNfg02vzCIFAgUAAACWDSwaWE0sYaWXBLGCyk3zbbdJW226SpL8Ekl+QxEAAAAEsBYCwFgZmWgoAAIDSwaWE0sYaWMCy4JYwAAQAAAJYCwFgLAWACAEAAABQsABlZMaBgBAAAAASwFgLAWAABEAAABQsBYEsIWDSwaWDQGgTUBoAsBYGdkbLABEAAAACyhYCwJYTSwANAaBNAagABYCwFgSyoWAsBYEsBYCwFgZ2RosBYNAaA0BoEQGgCwFgLCJYCyhYACWAsBYCwFhEsAAAAAAEKAR6WZbLCFgSyhYCwIAAWAsBYEsJoAAAAAAolgLCFgLAWDQGpYw0suJpYw0GAMGdmWywiWAAAAAACFCwhYCwFgLBqWMNLGGllxNLGGgCwJYCwFhAAAAAQAB6GWwIFBgQAAAAGBAAJBCBQAgAAAABACAAAAAACAACAf/Z"
          width="62px"
        />
        </div>
     
      <div className="Log">
        <h2>  NicaMovies</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <h4>Mail</h4>
          </label>

          <input
            className="input"
            name="user"
            value={log.user}
            id="myInput"
            onChange={(e) => handleChange(e)}
            required
            autoComplete="off"
          />

          <label>
            <h4>Password</h4>
          </label>

          <input
            className="input"
            name="password"
            value={log.password}
            onChange={(e) => handleChange(e)}
            required
            autoComplete="off"
          />
          <button className="hola" type="submit">
            <h4>LOG IN</h4>
          </button>
        </form>
        </div>
      </div>
    
  );
}

export default Login;
