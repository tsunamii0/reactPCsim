import { createRenderer } from "react-dom/test-utils";

const Showcase = () => {
    Array.from({ length: 17 }).map((_, index) => {
        return (<div>
        <img src={require(`/src/content/${index}.png`)} key={index} />
        </div>
        )
      })
  };
  
  export default Showcase;