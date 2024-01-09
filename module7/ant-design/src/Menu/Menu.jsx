import { Link } from "react-router-dom";
import { Button } from "antd";

const Menu = () => {
  const padding = {
    paddingRight: 5,
    marginRight: 30,
  };

  return (
    <div>
      <Button type="primary" style={padding}>
        <Link to="/">anecdotes</Link>
      </Button>
      <Button type="primary" style={padding}>
        <Link to="/create">create new</Link>
      </Button>
      <Button type="primary" style={padding}>
        <Link to="/about">about</Link>
      </Button>
    </div>
  );
};

export default Menu;
